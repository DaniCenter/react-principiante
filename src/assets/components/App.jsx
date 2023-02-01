import React from "react";
import { AppUI } from "./AppUI";

let defaultTodos = [
  { text: "Jugar lolsito", completed: true },
  { text: "Estudiar", completed: false },
  { text: "Preparar la comida", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const [completedTodos, setCompletedTodos] = React.useState(defaultTodos.filter((todo) => todo.completed).length);
  let totalTodos = todos.length;

  React.useEffect(() => {
    if (searchValue.length > 0) {
      setTodos(defaultTodos.filter((todo) => todo.text.toLowerCase().includes(searchValue.toLowerCase())));
    } else {
      setTodos(defaultTodos);
    }
  }, [searchValue]);

  React.useEffect(() => {
    setCompletedTodos(todos.filter((todo) => todo.completed).length);
  }, [todos]);
  function onComplete(event) {
    const elementText = event.target.parentElement;
    elementText.classList.toggle("TodoItem--True");
    const todoCheck = defaultTodos.find((todo) => todo.text.toLowerCase() === elementText.childNodes[0].innerText.toLowerCase());
    todoCheck.completed = todoCheck.completed ? false : true;
    todoCheck.completed ? setCompletedTodos(completedTodos + 1) : setCompletedTodos(completedTodos - 1);
  }

  function onDelete(event) {
    const elementText = event.target.parentElement;
    defaultTodos = defaultTodos.filter((todos) => todos.text.toLowerCase() !== elementText.childNodes[0].innerText.toLowerCase());
    setTodos(defaultTodos.filter((todo) => todo.text.toLowerCase().includes(searchValue.toLowerCase())));
    if ([...elementText.classList].includes("TodoItem--True")) {
      setCompletedTodos(completedTodos - 1);
    }
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
