import React from "react";
import slide from "../img/slide.webp";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

function AppUI({ completedTodos, totalTodos, searchValue, setSearchValue, todos, onComplete, onDelete }) {
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

export { AppUI };
