import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    filterTodoHandler();
    saveLocalStorage();
  }, [todos, status]);

  function filterTodoHandler() {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => !todo.completed));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  function saveLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function getLocalStorage() {
    const todo = JSON.parse(localStorage.getItem("todos"));
    if (todo) {
      setTodos(todo);
    }
  }
  return (
    <div className="App">
      <header className="header">Bibhav's To-do App</header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
