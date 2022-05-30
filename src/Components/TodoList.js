import React from "react";
import Todo from "./Todo";

export default function TodoList({setTodos, todos, filteredTodos}) {
    const todoElements = filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        )) 
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todoElements}
      </ul>
    </div>
  );
}
