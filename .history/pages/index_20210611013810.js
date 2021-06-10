import { useGlobalContext } from "@/context/Globalcontext";
import Main from "@/components/Main";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import Loader from "@/components/Loader";

export default function Home() {
  const { todos } = useGlobalContext();
  return (
    <Main>
      <AddTodo />
      {todos.length == 0 && <Loader />}
      {todos.length > 0 && <TodoList />}
    </Main>
  );
}
