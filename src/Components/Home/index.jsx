import React from "react";
import styles from "./styles.module.css";
import "@lottiefiles/lottie-player";
import Head from "../Head";

const index = () => {
  return (
    <section className={styles.main}>
      <Head
        title="Lotus | Saúde e Estética"
        description="Aprenda mais sobre saúde e estética. Calcule a contagem de calorias e macronutrientes feita exclusivamente para o seu objetivo. Tudo isso gratuitamente, de forma rápida, fácil e objetiva."
      />

      <div className={styles.mainLeft}>
        <h1 className={styles.title}>Lotus, o melhor do fitness!</h1>
        <div className={styles.subLeft}>
          <p>
            Você está procurando um conteúdo objetivo, sem enrolação e de
            qualidade? Pois bem, você está no lugar certo. E permita-me
            complementar: aqui você terá tudo isso{" "}
            <span className={styles.span}>GRATUITAMENTE</span>.
          </p>
          <p>Navegue entre os links do menu para mais informações.</p>
          <div></div>
        </div>
      </div>

      <div className={styles.lottie}>
        <lottie-player
          src="https://assets6.lottiefiles.com/packages/lf20_ocGoFt.json"
          background="transparent"
          speed="1"
          style={{ width: "400px", height: "400px" }}
          loop
          autoplay
        ></lottie-player>
      </div>
    </section>
  );
};

export default index;
