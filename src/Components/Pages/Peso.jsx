import React from "react";
import styles from "./Pages.module.css";
import Button from "../Button";
import Input from "../Input/InputDigit";
import PesoImg from "../../assets/png/peso.png";
import { useDispatch, useSelector } from "react-redux";
import { errorUser, pesoUser, stepUser } from "../../redux/user/actions";

const Peso = () => {
  const { step, peso, error } = useSelector(
    (rootReducer) => rootReducer.userReducer
  );
  const dispatch = useDispatch();

  return (
    <div className={`animeLeft ${styles.content}`}>
      <form className={styles.form}>
        <Input
          type="number"
          name="peso"
          label="Qual o seu peso?"
          desc="Especifique o seu peso em quilogramas (kg)"
          value={peso === "" ? "" : peso}
          placeholder={peso !== "" ? "" : 70}
          onChange={({ target }) => dispatch(pesoUser(target.value))}
          auxiliar="kg"
        />

        {error && peso === "" && (
          <p className="error">Insira o seu peso antes de avançar.</p>
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
              if (peso !== "") {
                if (step !== 7) {
                  dispatch(stepUser(step + 1));
                  dispatch(errorUser(false));
                }
              } else dispatch(errorUser(true));
            }}
          />
        </div>
      </form>

      <img className="imgPerfil" src={PesoImg} alt="" />
    </div>
  );
};

export default Peso;
