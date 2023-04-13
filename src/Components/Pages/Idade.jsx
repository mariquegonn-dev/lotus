import React, { useContext } from "react";
import styles from "./Pages.module.css";
import IdadeImg from "../../assets/png/idade.png";
import { CustomerContext } from "../../Context/createAppContext";
import Button from "../Button";
import Input from "../Input/InputDigit";

const Idade = () => {
  const { data, handleData, error, setError } = useContext(CustomerContext);
  const { step, idade } = data;

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
          onChange={({ target }) => handleData("idade", target.value)}
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
              handleData("step", step - 1);
            }}
          />

          <Button
            text="PRÓX"
            onClick={(e) => {
              e.preventDefault();
              if (idade !== "") {
                if (step !== 7) {
                  handleData("step", step + 1);
                  setError(false);
                }
              } else setError(true);
            }}
          />
        </div>
      </form>

      <img className="imgPerfil" src={IdadeImg} alt="" />
    </div>
  );
};

export default Idade;
