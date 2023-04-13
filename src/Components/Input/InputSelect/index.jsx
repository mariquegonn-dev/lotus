import React from "react";
import styles from "./styles.module.css";

const index = ({ label, desc, name, value, onChange, onClick, children }) => {
  return (
    <>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <p className={styles.desc}>{desc}</p>
      <select
        className={styles.select}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onClick={onClick}
      >
        {children}
      </select>
    </>
  );
};

export default index;
