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

  const submitTodo = (inputText) => {
    return setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
  };

  return (
    <globalContext.Provider value={{ todos, setTodos, submitTodo }}>
      {children}
    </globalContext.Provider>
  );
}

export const useTodo = () => {
  return useContext(globalContext);
};
