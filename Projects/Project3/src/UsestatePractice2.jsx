import React, { useState } from "react";

function UsestatePractice2() {
  // Step 1: Initialize state with an empty array
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      // Step 3: Update the state value by adding a new todo
      setTodos([...todos, inputValue]);
      setInputValue(""); // Clear the input field after adding todo
    }
  };

  const handleInputChange = (event) => {
    // Update the inputValue state with the value of the input field
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Add a new todo"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {/* Step 2: Access the current state value */}
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsestatePractice2;
