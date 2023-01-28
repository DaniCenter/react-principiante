import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const todos = [
  { text: "Jugar lolsito", completed: false },
  { text: "Estudiar", completed: false },
  { text: "Preparar la comida", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <img src="../../../public/slide.webp" alt="slide" />
      <div>
        <TodoCounter />

        <form className="form">
          <TodoSearch />
          <CreateTodoButton />
        </form>

        <TodoList>
          {todos.map((todo) => (
            <TodoItem text={todo.text} key={todo.text} />
          ))}
        </TodoList>
      </div>
    </React.Fragment>
  );
}

export default App;
