import { useState, useEffect } from "react";

export const useTodo = () => {
  const [todos, setTodos] = useState([]);

  // Run once when app starts to get todos in local storage
  useEffect(() => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todosLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todosLocal);
    }
  }, []);

  // Save local todos when todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const submitTodo = (inputText) => {
    return setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  const updateTodohandler = (id, text) => {
    console.log(id, text);
    // return setTodos(
    //   todos.map((item) => {
    //     if (item.id === id) {
    //       return {
    //         ...item,
    //         text: text,
    //       };
    //     }
    //     return item;
    //   })
    // );
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return {
    todos,
    updateTodohandler,
    submitTodo,
    deleteTodo,
    completeTodo,
  };
};
