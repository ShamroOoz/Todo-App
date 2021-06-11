import Image from "next/image";
import { useGlobalContext } from "@/context/Globalcontext";
import styled, { css } from "styled-components";
import { ItemBox } from "./ItemBox";

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
  display: block;
  text-transform: capitalize;
  ${(p) =>
    p.completed &&
    css`
      text-decoration: line-through;
      color: ${(p) => p.theme.completedTodoText};
    `};
`;
const Buttoncontainer = styled.div`
  margin-left: auto;
`;
const DeleteButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  display: inline-flex;
  width: 1.18rem;
  min-width: 1.18rem;
  height: 1.18rem;
  transition: transform var(--transition);
  @media (min-width: 768px) {
    width: 1.77rem;
    height: 1.77rem;
  }
  &:hover {
    transform: scale(1.2);
  }
`;

const CircleCheckbox = styled.button`
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 1.2rem;
  cursor: pointer;
  border: ${(p) => p.theme.todoBorder};
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border 0.2s ease, transform 0.2s ease;
  &:hover {
    border: ${(p) => p.theme.circleBorderHover};
    transform: scale(1.1);
    ${(p) =>
      p.completed &&
      css`
        border: none;
      `};
  }
  ${(p) =>
    p.completed &&
    css`
      background: ${(p) => p.theme.circleBg};
      border: none;
    `};
  /* Check icon */
  > Image {
    display: block;
    width: 0.725rem;
    height: 0.5rem;
    @media (min-width: 768px) {
      width: 0.87rem;
      height: 0.6rem;
    }
  }
`;

export const Todo = ({ todo }) => {
  const { deleteTodo, completeTodo } = useGlobalContext();

  return (
    <TodoItem>
      <CircleCheckbox
        aria-label="Complete todo"
        aria-pressed={todo.completed}
        onClick={() => completeTodo(todo.id)}
        completed={todo.completed}
      >
        {todo.completed && (
          <Image
            src="/static/tick.svg"
            width={100}
            height={100}
            alt="Check mark"
          />
        )}
      </CircleCheckbox>
      <TodoText completed={todo.completed}>{todo.text}</TodoText>
      <Buttoncontainer>
        <button>Edit</button>
        <DeleteButton
          aria-label="Delete todo"
          onClick={() => deleteTodo(todo.id)}
        >
          <Image
            src="/static/cancel.svg"
            width={100}
            height={100}
            alt="Delete button"
          />
        </DeleteButton>
      </Buttoncontainer>
    </TodoItem>
  );
};

export default Todo;
