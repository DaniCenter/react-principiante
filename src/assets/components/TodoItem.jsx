import React from "react";
import "./TodoItem.css";
import x from "../../../public/delete.svg";
import xx from "../../../public/check2.svg";

const TodoItem = (props) => {
  return (
    <li className={`TodoItem ${props.completed ? "TodoItem--True" : ""}`}>
      <p>{props.text}</p>
      <img src={x} alt="delete" />
      <img src={xx} alt="check2" />
    </li>
  );
};

export { TodoItem };
