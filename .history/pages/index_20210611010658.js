import React, { useState } from "react";
import { useTodo } from "@/context/Globalcontext";
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
  const { todos, setTodos, submitTodo } = useTodo();

  return (
    <Main>
      <AddTodo } submitTodo={submitTodo} />
      {todos.length == 0 && <Loader />}
      <TodoList todos={todos} setTodos={setTodos} />
    </Main>
  );
}
