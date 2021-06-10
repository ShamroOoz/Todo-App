import React, { useState, useEffect, useContext, createContext } from "react";

const globalContext = createContext();

export function ProvideTodo({ children }) {
  const [todos, setTodos] = useState([]);

  // Run once when app starts to get todos in local storage
  useEffect(() => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todosLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todosLocal);
    }
  }, []);

  // Save local todos when todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <globalContext.Provider value={`sham`}>{children}</globalContext.Provider>
  );
}

export const useTodo = () => {
  return useContext(globalContext);
};
