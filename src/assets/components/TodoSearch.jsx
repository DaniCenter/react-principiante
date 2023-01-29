import React from "react";
import "./TodoSearch.css";

const TodoSearch = () => {
  function inputChange(event) {
    console.log(event.target.value);
  }

  return <input className="TodoSearch" placeholder="Buscar tarea" type="text" onChange={inputChange} />;
};

export { TodoSearch };
