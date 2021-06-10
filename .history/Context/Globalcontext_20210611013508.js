import React, {  useContext, createContext } from "react";

const globalContext = createContext();

export function ProvideTodo({ children }) {
 

  return (
    <globalContext.Provider
      value={ }
    >
      {children}
    </globalContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(globalContext);
};
