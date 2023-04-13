import React, { useContext } from "react";

import styles from "./styles.module.css";
import Steps from "../../Steps";
import { CustomerContext } from "../../../Context/createAppContext";

const index = () => {
  const { handleContent } = useContext(CustomerContext);
  return (
    <section className={`${styles.calorias}`}>
      <h1 className={styles.title}>Calorias diárias</h1>
      <div className={styles.content}>
        <Steps />
        {handleContent()}
      </div>
    </section>
  );
};

export default index;
