// AddTodo.jsx
import React, { useRef } from "react";

function AddTodo({ addTodo }) {
  const textRef = useRef(null);
  const dateRef = useRef(null);
  const successMessageRef = useRef(null);

  // Function to handle adding a new todo item
  const handleAddTodo = (event) => {
    event.preventDefault();
    const text = textRef.current.value.trim();
    const date = dateRef.current.value.trim();
    if (text !== "" && date !== "") {
      addTodo({
        text,
        date,
      });
      textRef.current.value = "";
      dateRef.current.value = "";
      successMessageRef.current.innerText = "Item added successfully";
      setTimeout(() => {
        successMessageRef.current.innerText = "";
      }, 2000); // Hide success message after 2 seconds
    }
  };

  return (
    <div className="container text-center">
      <form className="row" onSubmit={handleAddTodo}>
        <div className="col-6">
          <input type="text" placeholder="Type Todo Here" ref={textRef} />
        </div>
        <div className="col-4">
          <input type="date" ref={dateRef} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success item-button">
            Add
          </button>
        </div>
      </form>
      <p ref={successMessageRef}></p>
    </div>
  );
}
export default AddTodo;
