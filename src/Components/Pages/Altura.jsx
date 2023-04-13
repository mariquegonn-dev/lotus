import React, { useContext } from "react";
import styles from "./Pages.module.css";
import Button from "../Button";
import Input from "../Input/InputDigit";
import AlturaImg from "../../assets/png/altura.png";
import { CustomerContext } from "../../Context/createAppContext";

const Altura = () => {
  const { handleData, data, error, setError } = useContext(CustomerContext);
  const { altura, step } = data;
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
          onChange={({ target }) => handleData("altura", target.value)}
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
              handleData("step", step - 1);
            }}
          />

          <Button
            text="PRÓX"
            onClick={(e) => {
              e.preventDefault();
              if (altura !== "") {
                if (step !== 7) {
                  handleData("step", step + 1);
                  setError(false);
                }
              } else setError(true);
            }}
          />
        </div>
      </form>

      <img className="imgPerfil" src={AlturaImg} alt="" />
    </div>
  );
};

export default Altura;
