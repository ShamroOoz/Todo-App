import { useState, useEffect } from "react";
import { useGlobalContext } from "@/context/Globalcontext";
import Main from "@/components/Main";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import Loader from "@/components/Loader";

export default function Home() {
  const { todos } = useGlobalContext();
  const [updatetodo, setupdatetodo] = useState({});

  useEffect(() => {}, [updatetodo]);

  const editTodo = (id) => {
    let editrecord = todos.find((el) => el.id === id);
    setupdatetodo(editrecord);
  };

  return (
    <Main>
      <AddTodo updatetodo={updatetodo} setupdatetodo={setupdatetodo} />
      {todos?.length == 0 && <Loader />}
      {todos?.length > 0 && <TodoList editTodo={editTodo} />}
    </Main>
  );
}
