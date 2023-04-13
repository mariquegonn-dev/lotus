import React from "react";
import styles from "./styles.module.css";

const index = ({
  type,
  label,
  desc,
  name,
  value,
  onChange,
  auxiliar,
  ...props
}) => {
  return (
    <>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.auxiliar}>
        <input
          {...props}
          className={styles.input}
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          auxiliar={auxiliar}
        />
        <span>{auxiliar}</span>
      </div>
    </>
  );
};

export default index;
