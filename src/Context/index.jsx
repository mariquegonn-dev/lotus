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
    step: 1,
    sexo: null,
    idade: "",
    altura: "",
    peso: "",
    atividadeFisica: null,
    objetivo: null,
  });

  const [error, setError] = React.useState(false);

  const StepsArray = [1, 2, 3, 4, 5, 6, 7];

  const handleContent = () => {
    switch (data.step) {
      case 1:
        return <Sexo />;
      case 2:
        return <Idade />;
      case 3:
        return <Altura />;
      case 4:
        return <Peso />;
      case 5:
        return <AtividadeFisica />;
      case 6:
        return <Objetivo />;
      case 7:
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
      value={{ handleContent, handleData, data, StepsArray, error, setError }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
