import React from "react";
import "./TodoItem.css";
import x from "../../../public/delete.svg";

const TodoItem = (props) => {
  return (
    <li className="TodoItem">
      <p>{props.text}</p>
      <img src={x} alt="delete" />
    </li>
  );
};

export { TodoItem };
