import React, { createContext } from "react";

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [data, setData] = React.useState({
    step: 1,
    sexo: null,
    idade: "",
    altura: "",
    peso: "",
    atividadeFisica: null,
    objetivo: null,
  });

  function handleData(key, value) {
    setData({
      ...data,
      [key]: value,
    });
  }

  return (
    <CustomerContext.Provider value={{ handleData, data }}>
      {children}
    </CustomerContext.Provider>
  );
};
