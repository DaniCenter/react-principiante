import React from "react";
import xx from "../../img/check2.svg";
import x from "../../img/delete.svg";
import "./TodoItem.css";

const TodoItem = (props) => {
  return (
    <li className={`TodoItem ${props.completed ? "TodoItem--True" : ""}`}>
      <p>{props.text}</p>
      <img src={x} alt="delete" onClick={props.onDelete} />
      <img src={xx} alt="check2" onClick={props.onComplete} />
    </li>
  );
};

export { TodoItem };
