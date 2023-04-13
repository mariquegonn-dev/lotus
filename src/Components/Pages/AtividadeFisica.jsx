import React, { useContext } from "react";
import styles from "./Pages.module.css";
import atividadeFisicaImg from "../../assets/png/atividadeFisica.png";
import { CustomerContext } from "../../Context/createAppContext";
import Button from "../Button";
import Input from "../Input/InputSelect";

const AtividadeFisica = () => {
  const { data, handleData, error, setError } = useContext(CustomerContext);
  const { step, atividadeFisica } = data;

  function handleFunction() {
    switch (atividadeFisica) {
      case "sedentario":
        return "Pratica pouca ou nenhuma atividade física relevante.";
      case "leveAtivo":
        return "Pratica pouca ou alguma atividade física, 1-3 dias por semana.";
      case "ativo":
        return "Pratica atividade física regularmente, de 3-5 dias por semana.";
      case "muitoAtivo":
        return "Pratica muita atividade física, 6-7 dias por semana.";
      case "extremeAtivo":
        return "Pratica muita atividade física, 2x por dia ou mais, todos ou quase todos os dias da semana.";
      default:
        return "Selecione uma opção para saber sua descrição.";
    }
  }

  return (
    <div className={`animeLeft ${styles.content}`}>
      <form className={styles.form}>
        <Input
          name="atividadeFisica"
          label="Qual o seu nível de atividade física?"
          desc="Especifique o seu nível de atividade física."
          value={atividadeFisica === null ? "" : atividadeFisica}
          onChange={({ target }) => handleData("atividadeFisica", target.value)}
          onClick={({ target }) => (target[0].disabled = "true")}
        >
          <option>Selecione</option>
          <option value="sedentario">Sedentário</option>
          <option value="leveAtivo">Levemente ativo</option>
          <option value="ativo">Moderamente ativo</option>
          <option value="muitoAtivo">Muito ativo</option>
          <option value="extremeAtivo">Extremamente ativo</option>
        </Input>

        {atividadeFisica !== null && (
          <p className={styles.atividadeFisicaDesc}>{handleFunction()}</p>
        )}

        {error && atividadeFisica === null && (
          <p className="error">Escolha um nível antes de avançar.</p>
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
              if (atividadeFisica !== null) {
                if (step !== 7) {
                  handleData("step", step + 1);
                  setError(false);
                }
              } else setError(true);
            }}
          />
        </div>
      </form>

      <img className="imgPerfil" src={atividadeFisicaImg} alt="" />
    </div>
  );
};

export default AtividadeFisica;
