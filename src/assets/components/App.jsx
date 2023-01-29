import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import slide from "../img/slide.webp";
const todos = [
  { text: "Jugar lolsito", completed: true },
  { text: "Estudiar", completed: false },
  { text: "Preparar la comida", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <img src={slide} alt="slide" />
      <div>
        <TodoCounter />

        <form className="form">
          <TodoSearch />
          <CreateTodoButton />
        </form>

        <TodoList>
          {todos.map((todo) => (
            <TodoItem text={todo.text} key={todo.text} completed={todo.completed} />
          ))}
        </TodoList>
      </div>
    </React.Fragment>
  );
}

export default App;
