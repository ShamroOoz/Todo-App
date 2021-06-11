import { useState, useEffect } from "react";
import { useGlobalContext } from "@/context/Globalcontext";
import styled from "styled-components";
import { ItemBox } from "./ItemBox";
import { Button } from "./Button";
import Image from "next/image";

const InputCircle = styled(Button)``;

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
  &:focus .input-circle {
    display: flex;
  }
`;

//
const AddTodo = ({ updatetodo }) => {
  const { submitTodo } = useGlobalContext();
  const [inputText, setInputText] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    if (updatetodo) setInputText(updatetodo?.text);
  }, [updatetodo]);

  const submitTodoHandler = async (e) => {
    if (e.key === "Enter" && inputText) {
      e.preventDefault();
      await submitTodo(inputText);
      setInputText("");
    }
  };

  const onInputFocusHandler = () => setIsFocus(true);

  const onInputBlurHandler = () => setIsFocus(false);

  const removeTextHandler = async () => {
    setInputText("");
  };

  return (
    <ItemBox>
      <label className="sr-only" htmlFor="newTodo">
        Add new todo
      </label>
      <TodoInput
        id="newTodo"
        onKeyDown={submitTodoHandler}
        onFocus={onInputFocusHandler}
        onBlur={onInputBlurHandler}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        value={inputText || ""}
        type="text"
        placeholder="Create a new todo..."
        autocomplete="off"
      />
      <InputCircle
        aria-label="Cancel Text"
        isFocus={isFocus}
        onClick={() => removeTextHandler()}
      />
    </ItemBox>
  );
};

export default AddTodo;
