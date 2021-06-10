import React from "react";
import styled, { css } from "styled-components";
import { ItemBox } from "./ItemBox";
import IconCross from "../assets/icon-cross.svg";
import { ImageButton } from "./ImageButton";
import IconCheck from "../assets/icon-check.svg";

const TodoItem = styled(ItemBox)`
  height: 5.3rem;
  box-shadow: none;
  border-radius: 0;
  border-bottom: ${(p) => p.theme.todoBorder};
  transition: border-bottom var(--transition),
    background-color var(--transition);
  @media (min-width: 768px) {
    height: 6.5rem;
    padding: 2.4rem;
  }
`;
const TodoText = styled.p`
  color: ${(p) => p.theme.uncompletedTodoText};
  margin-right: 1.2rem;
  ${(p) =>
    p.completed &&
    css`
      text-decoration: line-through;
      color: ${(p) => p.theme.completedTodoText};
    `};
`;

export const Todo = ({ todos, setTodos, todo }) => {
  const completeTodoHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const deleteTodoHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  return (
    <TodoItem>
      <CircleCheckbox
        aria-label="Complete todo"
        aria-pressed={todo.completed}
        onClick={completeTodoHandler}
        completed={todo.completed}
      >
        {todo.completed && <img src={IconCheck} alt="Check mark" />}
      </CircleCheckbox>
      <TodoText completed={todo.completed}>{todo.text}</TodoText>
      <DeleteButton
        aria-label="Delete todo"
        className="btn-delete"
        onClick={deleteTodoHandler}
      >
        <img src={IconCross} alt="Delete button" />
      </DeleteButton>
    </TodoItem>
  );
};

export default Todo;
