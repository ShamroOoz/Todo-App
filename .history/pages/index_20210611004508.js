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
