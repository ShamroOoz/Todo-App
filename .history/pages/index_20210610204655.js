import React, { useState, useEffect } from "react";
import Head from "../components/head";
import Main from "../components/Main";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const initialTodos = [
  {
    text: "Complete online JavaScript course",
    completed: true,
    id: 1,
  },
  {
    text: "Jog around the park 3x",
    completed: false,
    id: 2,
  },
  {
    text: "10 minutes meditation",
    completed: false,
    id: 3,
  },
  {
    text: "Read for 1 hour",
    completed: false,
    id: 4,
  },
  {
    text: "Pick up groceries",
    completed: false,
    id: 5,
  },
  {
    text: "Complete Todo App on Frontend Mentor",
    completed: false,
    id: 6,
  },
];

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(initialTodos);

  return (
    <>
      <Head title="Home" />
      <Main>
        <AddTodo
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
      </Main>
    </>
  );
}
