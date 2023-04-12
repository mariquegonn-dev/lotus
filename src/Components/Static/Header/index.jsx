import React from "react";
import styles from "./styles.module.css";
import Logo from "../../../assets/logo.svg";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/" end>
        <img src={Logo} alt="" />
      </NavLink>
      <ul className={styles.nav}>
        <li>
          <NavLink to="caloriasDiarias">Calorias diárias</NavLink>
        </li>
        <li>
          <NavLink to="macronutrientes">Macronutrientes</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default index;
