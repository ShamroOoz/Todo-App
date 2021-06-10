import { useTodo } from "@/context/Globalcontext";
import styled from "styled-components";
import Todo from "./Todo";

const TodoListContainer = styled.div`
  margin-top: 1.6rem;
  width: 100%;
  max-width: 54rem;
  background-color: ${(p) => p.theme.todoBg};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
`;

const TodoList = () => {
  const { todos, setTodos } = useTodo();
  return todos.map((todo) => (
    <TodoListContainer key={todo.id}>
      <Todo todos={todos} setTodos={setTodos} key={todo.id} todo={todo} />
    </TodoListContainer>
  ));
};

export default TodoList;
