import { useGlobalContext } from "@/context/Globalcontext";
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

const TodoList = ({ editTodo }) => {
  const { todos } = useGlobalContext();
  return todos.map((todo) => (
    <TodoListContainer key={todo.id}>
      <Todo key={todo.id} todo={todo} editTodo={editTodo} />
    </TodoListContainer>
  ));
};

export default TodoList;
