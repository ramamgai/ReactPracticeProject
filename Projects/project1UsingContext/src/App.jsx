// App.jsx
import React, { useState } from "react";
import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // Function to add a new todo item
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Function to delete a todo item
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <center className="Container">
      <AppName />
      <AddTodo addTodo={addTodo} />
      <div className="items-container">
        {todos.map((todo, index) => (
          <div key={index}>
            {/* Render each todo item */}
            {index === 0 ? (
              <TodoItem1 todo={todo} deleteTodo={() => deleteTodo(index)} />
            ) : (
              <TodoItem2 todo={todo} deleteTodo={() => deleteTodo(index)} />
            )}
          </div>
        ))}
      </div>
    </center>
  );
}
export default App;
