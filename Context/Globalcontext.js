import React, { useContext, createContext } from "react";
import { useTodo } from "@/Hooks/useTodo";

const globalContext = createContext();

export function ProvideTodo({ children }) {
  const data = useTodo();
  return (
    <globalContext.Provider value={data}>{children}</globalContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(globalContext);
};
