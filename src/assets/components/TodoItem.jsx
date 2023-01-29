import React from "react";
import "./TodoItem.css";
import x from "../img/delete.svg";
import xx from "../img/check2.svg";

const TodoItem = (props) => {
  function onDelete() {
    alert(`Eliminaste la tarea: ${props.text}`);
  }

  return (
    <li className={`TodoItem ${props.completed ? "TodoItem--True" : ""}`}>
      <p>{props.text}</p>
      <img src={x} alt="delete" onClick={onDelete} />
      <img src={xx} alt="check2" onClick={props.onComplete} />
    </li>
  );
};

export { TodoItem };
