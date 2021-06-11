import { useState, useEffect } from "react";
import { useGlobalContext } from "@/context/Globalcontext";
import styled from "styled-components";
import { ItemBox } from "./ItemBox";
import { Button } from "./Button";
import Image from "next/image";

const ButtonCross = styled(Button)``;

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
      if (JSON.stringify(updatetodo) === "{}") {
        await submitTodo(inputText);
      }
      setInputText("");
    }
  };

  const onInputFocusHandler = () => setIsFocus(true);

  const removeTextHandler = async () => {
    console.log("called");
    setInputText("");
    setIsFocus(false);
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
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        value={inputText || ""}
        type="text"
        placeholder="Create a new todo..."
        autocomplete="off"
      />
      {isFocus && (
        <ButtonCross
          aria-label="Cancel Text"
          onClick={() => removeTextHandler()}
        >
          <Image
            src="/static/cross.svg"
            width={100}
            height={100}
            alt="Delete button"
          />
        </ButtonCross>
      )}
    </ItemBox>
  );
};

export default AddTodo;
