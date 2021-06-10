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
  const { todos } = useTodo();

  return (
    <Main>
      <AddTodo />
      {todos.length == 0 && <Loader />}
      <TodoList />
    </Main>
  );
}
