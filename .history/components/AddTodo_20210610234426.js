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
  &:focus .input-circle {
    outline: 2px dotted red;
  }
`;

//
const AddTodo = ({ inputText, setInputText, todos, setTodos }) => {
  const submitTodoHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
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
        onChange={inputTextHandler}
        value={(e) => {
          setInputText(e.target.value);
        }}
        type="text"
        placeholder="Create a new todo..."
        autocomplete="off"
      />
    </ItemBox>
  );
};

export default AddTodo;
