import React from "react";
import check from "../../img/check.svg";
import "./CreateTodoButton.css";

const CreateTodoButton = ({ onCreate }) => {
  return (
    <button type="button" className="CreateTodoButton" onClick={onCreate}>
      <img src={check} alt="check" />
    </button>
  );
};

export { CreateTodoButton };
