import React, { useContext } from "react";
import styles from "./styles.module.css";
import { CustomerContext } from "../../Context//createAppContext";

const index = () => {
  const { StepsArray, data } = useContext(CustomerContext);
  const { step } = data;

  return (
    <div className={styles.steps}>
      <p className={styles.step}>{step}</p>
      <ul className={styles.stepsContent}>
        {StepsArray?.map((i) => (
          <li key={i}>
            <div
              className={
                step === i
                  ? `${styles.stepsList} ${styles.active}`
                  : styles.stepsList
              }
            ></div>
          </li>
        ))}
      </ul>
      <p className={styles.step}>{StepsArray.length}</p>
    </div>
  );
};

export default index;
