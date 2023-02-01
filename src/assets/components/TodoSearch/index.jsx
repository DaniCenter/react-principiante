import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
    return searchValue;
  };
  return <input className="TodoSearch" placeholder="Buscar tarea..." type="text" onChange={onSearchValueChange} />;
}

export { TodoSearch };
