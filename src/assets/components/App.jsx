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
  let [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  if (searchValue.length > 0) {
    todos = todos.filter((todo) => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
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
            <TodoItem text={todo.text} key={todo.text} completed={todo.completed} />
          ))}
        </TodoList>
      </div>
    </React.Fragment>
  );
}

export default App;
