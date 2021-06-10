import Head from "../components/head";
import Main from "../components/Main";

const initialTodos = [
  {
    text: "Complete online JavaScript course",
    completed: true,
    id: 1,
  },
  {
    text: "Jog around the park 3x",
    completed: false,
    id: 2,
  },
  {
    text: "10 minutes meditation",
    completed: false,
    id: 3,
  },
  {
    text: "Read for 1 hour",
    completed: false,
    id: 4,
  },
  {
    text: "Pick up groceries",
    completed: false,
    id: 5,
  },
  {
    text: "Complete Todo App on Frontend Mentor",
    completed: false,
    id: 6,
  },
];

export default function Home() {
  return (
    <>
      <Head title="Home" />
      <Main>
        <AddTodo
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
      </Main>
    </>
  );
}
