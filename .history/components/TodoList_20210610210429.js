import React from "react";
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

  @media (min-width: 768px) {
    margin-top: 2.2rem;
  }
`;

const TodoList = ({ todos, setTodos }) => {
  return todos.map((todo) => (
    <TodoListContainer key={todo.id}>
      <Todo todos={todos} setTodos={setTodos} key={todo.id} />
    </TodoListContainer>
  ));
};

export default TodoList;
