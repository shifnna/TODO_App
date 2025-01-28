import React, { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]); // Store todos
  const [input, setInput] = useState(""); // Store input value

  const addTodo = () => {
    if (input) {
      setTodos([...todos, input]); // Add new todo to the list
      setInput(""); // Clear input field
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index)); // Remove the todo by index
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter a new task"/>
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}> {todo} <button onClick={() => deleteTodo(index)}>Delete</button> </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;

// A **unique Todo** in React refers to a task in a Todo list that is assigned a unique identifier (ID) 
// to ensure each task can be individually tracked, added, and deleted.