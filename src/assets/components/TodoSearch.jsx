import React from "react";
import "./TodoSearch.css";

const TodoSearch = () => {
  return <textarea className="TodoSearch" placeholder="Tarea a realizar... (Solo 80 caracteres)" type="text" maxLength="80" />;
};

export { TodoSearch };
