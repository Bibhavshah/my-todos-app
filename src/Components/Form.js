import React from "react";

export default function form({
  setInputText,
  setTodos,
  todos,
  inputText,
  setStatus,
}) {
  function inputHandler(event) {
    setInputText(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: todos.length + 1 },
    ]);
    setInputText("");
  }

  function statusHandler(event) {
    setStatus(event.target.value);
  }

  return (
    <form>
      <input
        value={inputText}
        onChange={inputHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
