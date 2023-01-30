import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import slide from "../img/slide.webp";
const defaultTodos = [
  { text: "Jugar lolsito", completed: true },
  { text: "Estudiar", completed: false },
  { text: "Preparar la comida", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const [completedTodos, setCompletedTodos] = React.useState(defaultTodos.filter((todo) => todo.completed).length);
  let totalTodos = todos.length;

  if (searchValue.length > 0) {
    setTodos(todos.filter((todo) => todo.text.toLowerCase().includes(searchValue.toLowerCase())));
  }

  function onComplete(event) {
    const elementText = event.target.parentElement;
    elementText.classList.toggle("TodoItem--True");
    const todoCheck = defaultTodos.find((todo) => todo.text.toLowerCase() === elementText.childNodes[0].innerText.toLowerCase());
    todoCheck.completed = todoCheck.completed ? false : true;
    todoCheck.completed ? setCompletedTodos(completedTodos + 1) : setCompletedTodos(completedTodos - 1);
  }

  function onDelete(event) {
    const elementText = event.target.parentElement;
    setTodos(todos.filter((todos) => todos.text.toLowerCase() !== elementText.childNodes[0].innerText.toLowerCase()));
    if (completedTodos > 0) {
      setCompletedTodos(completedTodos - 1);
    }
  }

  return (
    <React.Fragment>
      <img src={slide} alt="slide" />
      <div>
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />

        <form className="form">
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
          <CreateTodoButton />
        </form>

        <TodoList>
          {todos.map((todo) => (
            <TodoItem
              text={todo.text}
              key={todo.text}
              completed={todo.completed}
              onComplete={(event) => onComplete(event)}
              onDelete={(event) => onDelete(event)}
            />
          ))}
        </TodoList>
      </div>
    </React.Fragment>
  );
}

export default App;
