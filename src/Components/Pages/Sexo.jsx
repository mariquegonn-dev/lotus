import React, { useContext } from "react";
import styles from "./Pages.module.css";
import Button from "../Button";
import Input from "../Input/InputSelect";
import SexoImg from "../../assets/png/sexo.png";
import { CustomerContext } from "../../Context/createAppContext";

const Sexo = () => {
  const { data, handleData, error, setError } = useContext(CustomerContext);
  const { step, sexo } = data;

  return (
    <div className={`animeLeft ${styles.content}`}>
      <form className={styles.form}>
        <Input
          label="Qual o seu sexo?"
          desc="Especifique o seu sexo."
          name="sexo"
          value={sexo === null ? "" : sexo}
          onChange={({ target }) => handleData("sexo", target.value)}
          onClick={({ target }) => {
            sexo !== null ? (target[0].disabled = "true") : null;
          }}
        >
          <option>Selecione</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </Input>
        {error && sexo === null && (
          <p className="error">Selecione um sexo antes de avançar.</p>
        )}

        <Button
          text="PRÓX"
          onClick={(e) => {
            e.preventDefault();
            if (sexo !== null) {
              if (step !== 7) {
                handleData("step", step + 1);
                setError(false);
              }
            } else setError(true);
          }}
        />
      </form>

      <img className="imgPerfil" src={SexoImg} alt="" />
    </div>
  );
};

export default Sexo;
