import { useState, useEffect } from "react";
import { useGlobalContext } from "@/context/Globalcontext";
import styled from "styled-components";
import { ItemBox } from "./ItemBox";
import { Button } from "./Button";
import Image from "next/image";

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
    outline: 2px dotted red;
  }
`;

const CancelButton = styled(Button)`
  display: flex;
  justify-content: center;
  background-color: transparent;
  transition: border 0.2s ease, transform 0.2s ease;
  border: ${(p) =>
    p.isFocus ? p.theme.circleBorderHover : p.theme.todoBorder};
  transform: ${(p) => (p.isFocus ? "scale(1.1)" : "scale(1)")};
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
      <CancelButton
        aria-label="Cancel Text"
        isFocus={isFocus}
        onClick={() => removeTextHandler()}
      >
        <Image
          src="/static/cross.svg"
          width={100}
          height={100}
          alt="Cancel button"
        />
      </CancelButton>
    </ItemBox>
  );
};

export default AddTodo;
