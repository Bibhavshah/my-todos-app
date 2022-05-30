import React from "react";

export default function Todo({ setTodos, todos, text, todo }) {
  function deleteHandler() {
    setTodos(todos.filter((el) => el.id !== todo.id));
    //console.log(todo);
  }

  function completeHandler() {
    setTodos(
      todos.map((el) =>
        el.id === todo.id ? { ...el, completed: !el.completed } : el
      )
    );
  }
  return (
    <div className="todo">
      <li className={`todo-items ${todo.completed ? "completed" : " "}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
