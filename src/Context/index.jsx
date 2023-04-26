import React from "react";
import { CustomerContext } from "./createAppContext";

export const CustomerProvider = ({ children }) => {
  const [error, setError] = React.useState(false);

  return (
    <CustomerContext.Provider value={{ error, setError }}>
      {children}
    </CustomerContext.Provider>
  );
};
