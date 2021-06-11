import { useState, useEffect } from "react";
import { useGlobalContext } from "@/context/Globalcontext";
import styled from "styled-components";
import { ItemBox } from "./ItemBox";
import { Button } from "./Button";

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
const AddTodo = ({ updatetodo }) => {
  const { submitTodo } = useGlobalContext();
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    if (updatetodo) {
      setInputText(updatetodo?.text);
    }
  }, [updatetodo]);

  const submitTodoHandler = async (e) => {
    if (e.key === "Enter" && inputText) {
      e.preventDefault();
      await submitTodo(inputText);
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
        value={inputText || ""}
        type="text"
        placeholder="Create a new todo..."
        autocomplete="off"
      />
      <Button aria-label="Delete todo">
        <Image
          src="/static/cancel.svg"
          width={100}
          height={100}
          alt="Delete button"
        />
      </Button>
    </ItemBox>
  );
};

export default AddTodo;
