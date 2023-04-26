import React from "react";
import styles from "./styles.module.css";
import Sexo from "../../assets/Steps/Sexo";
import Idade from "../../assets/Steps/Idade";
import Altura from "../../assets/Steps/Altura";
import Peso from "../../assets/Steps/Peso";
import AtividadeFisica from "../../assets/Steps/AtividadeFisica";
import Objetivo from "../../assets/Steps/Objetivo";
import Resultado from "../../assets/Steps/Resultado";
import { useSelector } from "react-redux";

const index = () => {
  const { step } = useSelector((rootReducer) => rootReducer.userReducer);

  const steps = [
    {
      icon: <Sexo />,
      title: "Sexo",
      stepArray: "1/7",
    },
    {
      icon: <Idade />,
      title: "Idade",
      stepArray: "2/7",
    },
    {
      icon: <Altura />,
      title: "Altura",
      stepArray: "3/7",
    },
    {
      icon: <Peso />,
      title: "Peso",
      stepArray: "4/7",
    },
    {
      icon: <AtividadeFisica />,
      title: "Atv.Física",
      stepArray: "5/7",
    },
    {
      icon: <Objetivo />,
      title: "Objetivo",
      stepArray: "6/7",
    },
    {
      icon: <Resultado />,
      title: "Resultado",
      stepArray: "7/7",
    },
  ];

  return (
    <div className={styles.steps}>
      <ul className={styles.stepsContent}>
        {steps?.map(({ icon, title, stepArray }, index) => (
          <li className={styles.steps} key={index}>
            <div
              className={
                step === index ? `${styles.icon} ${styles.active}` : styles.icon
              }
            >
              <div className={styles.titleHover}>
                <p>{title}</p>
              </div>
              {icon}
            </div>
            <div
              className={
                step === index
                  ? `${styles.iconDesc} ${styles.active}`
                  : styles.iconDesc
              }
            >
              <p className={styles.stepTitle}>Step {stepArray}</p>
              <p className={styles.title}>{title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default index;
