import React, { useState, useEffect } from "react";
import Main from "@/components/Main";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import Loader from "@/components/Loader";

// const initialTodos = [
//   {
//     text: "Complete online JavaScript course",
//     completed: true,
//     id: 1,
//   },
// ];

export default function Home() {
  const [inputText, setInputText] = useState("");
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
    <Main>
      <AddTodo
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      {todos.length == 0 && <Loader />}
      <TodoList todos={todos} setTodos={setTodos} />
    </Main>
  );
}
