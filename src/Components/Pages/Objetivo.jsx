import React, { useContext } from "react";
import styles from "./Pages.module.css";
import ObjetivoImg from "../../assets/png/objetivo.png";
import { CustomerContext } from "../../Context/createAppContext";
import Button from "../Button";
import Input from "../Input/InputSelect";

const Objetivo = () => {
  const { data, handleData, error, setError } = useContext(CustomerContext);
  const { step, objetivo } = data;

  return (
    <div className={`animeLeft ${styles.content}`}>
      <form className={styles.form}>
        <Input
          name="objetivo"
          label="Qual o seu objetivo?"
          desc="Especifique o seu objetivo abaixo."
          value={objetivo === null ? "" : objetivo}
          onChange={({ target }) => handleData("objetivo", target.value)}
          onClick={({ target }) => {
            objetivo !== null ? (target[0].disabled = "true") : null;
          }}
        >
          <option>Selecione</option>
          <option value="perder">perder peso</option>
          <option value="manter">manter peso</option>
          <option value="ganhar">ganhar peso</option>
        </Input>

        {error && objetivo === null && (
          <p className="error">Defina um objetivo.</p>
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
            text="RESULT"
            onClick={(e) => {
              e.preventDefault();
              if (objetivo !== null) {
                if (step !== 7) {
                  handleData("step", step + 1);
                  setError(false);
                }
              } else setError(true);
            }}
          />
        </div>
      </form>

      <img className="imgPerfil" src={ObjetivoImg} alt="" />
    </div>
  );
};

export default Objetivo;
