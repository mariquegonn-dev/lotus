import React, { useContext } from "react";
import styles from "./Pages.module.css";
import atividadeFisicaImg from "../../assets/png/atividadeFisica.png";
import { CustomerContext } from "../../Context/createAppContext";
import Button from "../Button";
import Input from "../Input/InputSelect";

const AtividadeFisica = () => {
  const { data, handleData, error, setError } = useContext(CustomerContext);
  const { step, atividadeFisica } = data;
  const [active, setActive] = React.useState();

  const atividadeArray = [
    {
      label: "Selecione",
      value: null,
      desc: "Selecione um dos níveis para saber suas descrição.",
    },
    {
      label: "Sedentário",
      value: "sedentario",
      desc: "Pratica pouca ou nenhuma atividade física relevante.",
    },
    {
      label: "Levemente ativo",
      value: "leveAtivo",
      desc: "Pratica pouca ou alguma atividade física, 1-3 dias por semana.",
    },
    {
      label: "Ativo",
      value: "ativo",
      desc: "Pratica atividade física regularmente, de 3-5 dias por semana.",
    },
    {
      label: "Muito ativo",
      value: "muitoAtivo",
      desc: "Pratica muita atividade física, 6-7 dias por semana.",
    },
    {
      label: "Extremamente ativo",
      value: "extremeAtivo",
      desc: "Pratica muita atividade física, 2x por dia ou mais, todos ou quase todos os dias da semana.",
    },
  ];

  return (
    <div className={`animeLeft ${styles.content}`}>
      <form className={styles.form}>
        <Input
          name="atividadeFisica"
          label="Qual o seu nível de atividade física?"
          desc="Especifique o seu nível de atividade física."
          value={atividadeFisica === null ? "" : atividadeFisica}
          onChange={({ target }) => {
            handleData("atividadeFisica", target.value);
            setActive(target.value);
          }}
          onClick={({ target }) => {
            atividadeFisica !== null ? (target[0].disabled = "true") : null;
          }}
        >
          {atividadeArray?.map(({ label, value }, id) => (
            <option key={id} value={value}>
              {label}
            </option>
          ))}
        </Input>

        {atividadeArray?.map(({ desc, value }, id) => (
          <p
            key={id}
            className={
              active === value
                ? `${styles.atividadeFisicaDesc} ${styles.active}`
                : styles.atividadeFisicaDesc
            }
          >
            {desc}
          </p>
        ))}

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
