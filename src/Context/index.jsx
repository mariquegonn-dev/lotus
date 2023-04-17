import React, { createContext } from "react";
import Sexo from "../Components/Pages/Sexo";
import Idade from "../Components/Pages/Idade";
import Altura from "../Components/Pages/Altura";
import Peso from "../Components/Pages/Peso";
import AtividadeFisica from "../Components/Pages/AtividadeFisica";
import Objetivo from "../Components/Pages/Objetivo";
import Resultado from "../Components/Pages/Resultado";
import { CustomerContext } from "./createAppContext";

export const CustomerProvider = ({ children }) => {
  const [data, setData] = React.useState({
    step: 0,
    sexo: null,
    idade: "",
    altura: "",
    peso: "",
    atividadeFisica: null,
    objetivo: null,
  });

  const [error, setError] = React.useState(false);

  const handleContent = () => {
    switch (data.step) {
      case 0:
        return <Sexo />;
      case 1:
        return <Idade />;
      case 2:
        return <Altura />;
      case 3:
        return <Peso />;
      case 4:
        return <AtividadeFisica />;
      case 5:
        return <Objetivo />;
      case 6:
        return <Resultado />;
      default:
        return <Sexo />;
    }
  };

  function handleData(key, value) {
    setData({
      ...data,
      [key]: value,
    });
  }

  return (
    <CustomerContext.Provider
      value={{ handleContent, handleData, data, error, setError }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
