import React from "react";
import check from "../../../public/check.svg";
import "./CreateTodoButton.css";

const CreateTodoButton = () => {
  return (
    <button type="button" className="CreateTodoButton">
      <img src={check} alt="check" />
    </button>
  );
};

export { CreateTodoButton };
