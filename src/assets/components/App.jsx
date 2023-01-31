import React from "react";
import slide from "../img/slide.webp";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
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
