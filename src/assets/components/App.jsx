import React from "react";
import { AppUI } from "./AppUI";

function App() {
  let localStorageTodos;
  if (localStorage.getItem("TODOS_V1")) {
    localStorageTodos = JSON.parse(localStorage.getItem("TODOS_V1"));
  } else {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    localStorageTodos = [];
  }
  const [todos, setTodos] = React.useState(localStorageTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const [completedTodos, setCompletedTodos] = React.useState(localStorageTodos.filter((todo) => todo.completed).length);
  let totalTodos = todos.length;

  React.useEffect(() => {
    if (searchValue.length > 0) {
      setTodos(localStorageTodos.filter((todo) => todo.text.toLowerCase().includes(searchValue.toLowerCase())));
    } else {
      setTodos(localStorageTodos);
    }
  }, [searchValue]);

  React.useEffect(() => {
    setCompletedTodos(todos.filter((todo) => todo.completed).length);
  }, [todos]);

  function saveTodos() {
    localStorage.setItem("TODOS_V1", JSON.stringify(localStorageTodos));
  }

  function onComplete(event) {
    const elementText = event.target.parentElement;
    elementText.classList.toggle("TodoItem--True");
    const todoCheck = localStorageTodos.find((todo) => todo.text.toLowerCase() === elementText.childNodes[0].innerText.toLowerCase());
    todoCheck.completed = todoCheck.completed ? false : true;
    todoCheck.completed ? setCompletedTodos(completedTodos + 1) : setCompletedTodos(completedTodos - 1);
    saveTodos();
  }

  function onDelete(event) {
    const elementText = event.target.parentElement;
    localStorageTodos = localStorageTodos.filter((todos) => todos.text.toLowerCase() !== elementText.childNodes[0].innerText.toLowerCase());
    setTodos(localStorageTodos.filter((todo) => todo.text.toLowerCase().includes(searchValue.toLowerCase())));
    if ([...elementText.classList].includes("TodoItem--True")) {
      setCompletedTodos(completedTodos - 1);
    }
    saveTodos();
  }

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      todos={todos}
      onComplete={onComplete}
      onDelete={onDelete}
    />
  );
}

export default App;
