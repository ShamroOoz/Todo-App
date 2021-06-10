import React, { useState } from "react";
import styled from "styled-components";
import { ItemBox } from "./ItemBox";

const TodoInput = styled.input`
  width: 90%;
  background-color: ${(p) => p.theme.todoBg};
  border: none;
  outline: none;
  font-family: inherit;
  font-size: var(--font-size-primary);
  color: ${(p) => p.theme.newTodoTypingText};
  caret-color: ${(p) => p.theme.activeFilterText};
  transition: background-color var(--transition);
  &::placeholder {
    color: ${(p) => p.theme.newTodoPlaceholderText};
  }
`;

//
const AddTodo = ({ todos, setTodos, submitTodo }) => {
  const [inputText, setInputText] = useState("");

  const submitTodoHandler = async (e) => {
    if (e.key === "Enter" && inputText) {
      e.preventDefault();
      await submitTodo();
      setInputText("");
    }
  };

  return (
    <ItemBox>
      <label className="sr-only" htmlFor="newTodo">
        Add new todo
      </label>
      <TodoInput
        id="newTodo"
        onKeyDown={submitTodoHandler}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        value={inputText}
        type="text"
        placeholder="Create a new todo..."
        autocomplete="off"
      />
    </ItemBox>
  );
};

export default AddTodo;
