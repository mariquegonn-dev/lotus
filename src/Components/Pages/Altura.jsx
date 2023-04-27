import React from "react";
import styles from "./Pages.module.css";
import Button from "../Button";
import Input from "../Input/InputDigit";
import AlturaImg from "../../assets/png/altura.png";
import { useDispatch, useSelector } from "react-redux";
import { alturaUser, errorUser, stepUser } from "../../redux/user/actions";

const Altura = () => {
  const { step, altura, error } = useSelector(
    (rootReducer) => rootReducer.userReducer
  );
  const dispatch = useDispatch();

  return (
    <div className={`animeLeft ${styles.content}`}>
      <form className={styles.form}>
        <Input
          type="number"
          name="altura"
          label="Qual a sua altura?"
          desc="Especifique a sua altura em centímetros (cm)"
          value={altura === "" ? "" : altura}
          placeholder={altura !== "" ? "" : 175}
          onChange={({ target }) => dispatch(alturaUser(target.value))}
          auxiliar="cm"
        />

        {error && altura === "" && (
          <p className="error">Insira a sua altura antes de avançar.</p>
        )}

        <div className={styles.buttons}>
          <Button
            side="left"
            text="ANTE"
            onClick={(e) => {
              e.preventDefault();
              dispatch(stepUser(step - 1));
            }}
          />

          <Button
            text="PRÓX"
            onClick={(e) => {
              e.preventDefault();
              if (altura !== "") {
                if (step !== 7) {
                  dispatch(stepUser(step + 1));
                  dispatch(errorUser(false));
                }
              } else dispatch(errorUser(true));
            }}
          />
        </div>
      </form>

      <img className="imgPerfil" src={AlturaImg} alt="" />
    </div>
  );
};

export default Altura;
