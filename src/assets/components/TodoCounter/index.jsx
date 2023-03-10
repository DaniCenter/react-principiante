import React from "react";
import "./TodoCounter.css";

const TodoCounter = ({ completedTodos, totalTodos }) => {
  return (
    <h2 className="TodoCounter">
      Has completado {completedTodos} de {totalTodos} TODO
    </h2>
  );
};

export { TodoCounter };
