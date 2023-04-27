import React from "react";
import styles from "./Pages.module.css";
import IdadeImg from "../../assets/png/idade.png";
import Button from "../Button";
import Input from "../Input/InputDigit";
import { useDispatch, useSelector } from "react-redux";
import { errorUser, idadeUser, stepUser } from "../../redux/user/actions";

const Idade = () => {
  const { step, idade, error } = useSelector(
    (rootReducer) => rootReducer.userReducer
  );

  const dispatch = useDispatch();

  return (
    <div className={`animeLeft ${styles.content}`}>
      <form className={styles.form}>
        <Input
          type="number"
          name="idade"
          label="Qual a sua idade?"
          desc="Especifique a sua idade."
          value={idade === "" ? "" : idade}
          placeholder={idade !== "" ? "" : 22}
          onChange={({ target }) => dispatch(idadeUser(target.value))}
          auxiliar="anos"
        />

        {error && idade === "" && (
          <p className="error">Insira a sua idade antes de avançar.</p>
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
              if (idade !== "") {
                if (step !== 7) {
                  dispatch(stepUser(step + 1));
                  dispatch(errorUser(false));
                }
              } else dispatch(errorUser(true));
            }}
          />
        </div>
      </form>

      <img className="imgPerfil" src={IdadeImg} alt="" />
    </div>
  );
};

export default Idade;
