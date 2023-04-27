import React from "react";
import styles from "./Pages.module.css";
import Button from "../Button";
import Input from "../Input/InputSelect";
import SexoImg from "../../assets/png/sexo.png";
import { useSelector, useDispatch } from "react-redux";
import { errorUser, sexoUser, stepUser } from "../../redux/user/actions";

const Sexo = () => {
  const { sexo, step, error } = useSelector(
    (rootReducer) => rootReducer.userReducer
  );

  const dispatch = useDispatch();

  return (
    <div className={`animeLeft ${styles.content}`}>
      <form className={styles.form}>
        <Input
          label="Qual o seu sexo?"
          desc="Especifique o seu sexo."
          name="sexo"
          value={sexo === null ? "" : sexo}
          onChange={({ target }) => {
            dispatch(sexoUser(target.value));
          }}
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
                dispatch(stepUser(step + 1));
                dispatch(errorUser(false));
              }
            } else dispatch(errorUser(true));
          }}
        />
      </form>

      <img className="imgPerfil" src={SexoImg} alt="" />
    </div>
  );
};

export default Sexo;
