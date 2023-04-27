import React from "react";
import styles from "./Pages.module.css";
import ObjetivoImg from "../../assets/png/objetivo.png";
import Button from "../Button";
import Input from "../Input/InputSelect";
import { useDispatch, useSelector } from "react-redux";
import { errorUser, objetivoUser, stepUser } from "../../redux/user/actions";

const Objetivo = () => {
  const { step, objetivo, error } = useSelector(
    (rootReducer) => rootReducer.userReducer
  );
  const dispatch = useDispatch();

  return (
    <div className={`animeLeft ${styles.content}`}>
      <form className={styles.form}>
        <Input
          name="objetivo"
          label="Qual o seu objetivo?"
          desc="Especifique o seu objetivo abaixo."
          value={objetivo === null ? "" : objetivo}
          onChange={({ target }) => dispatch(objetivoUser(target.value))}
          onClick={({ target }) => {
            objetivo !== null ? (target[0].disabled = "true") : null;
          }}
        >
          <option>Selecione</option>
          <option value="perder">Perder Peso</option>
          <option value="manter">Manter Peso</option>
          <option value="ganhar">Ganhar Peso</option>
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
              dispatch(stepUser(step - 1));
            }}
          />

          <Button
            text="RESULT"
            onClick={(e) => {
              e.preventDefault();
              if (objetivo !== null) {
                if (step !== 7) {
                  dispatch(stepUser(step + 1));
                  dispatch(errorUser(false));
                }
              } else dispatch(errorUser(true));
            }}
          />
        </div>
      </form>

      <img className="imgPerfil" src={ObjetivoImg} alt="" />
    </div>
  );
};

export default Objetivo;
