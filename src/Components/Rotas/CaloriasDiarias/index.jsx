import React, { useContext } from "react";

import styles from "./styles.module.css";
import Steps from "../../Steps";
import { CustomerContext } from "../../../Context/createAppContext";
import Head from "../../Head";

const index = () => {
  const { handleContent } = useContext(CustomerContext);
  return (
    <section className={`${styles.calorias}`}>
      <Head
        title="Lotus | Calorias diárias"
        description="Faça a contagem de calorias diárias de forma fácil e rápida, baseadas no seu nível de atividade física e objetivo!"
      />
      <h1 className={styles.title}>Calorias diárias</h1>
      <div className={styles.content}>
        <Steps />
        {handleContent()}
      </div>
    </section>
  );
};

export default index;
