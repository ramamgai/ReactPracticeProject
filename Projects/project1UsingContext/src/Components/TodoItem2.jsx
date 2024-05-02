import React, { useState } from "react";

function TodoItem2({ todo, deleteTodo }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = () => {
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    setShowConfirmation(false);
    deleteTodo();
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{todo.text}</div>
        <div className="col-4">{todo.date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger item-button"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
      {showConfirmation && (
        <div>
          Are you sure you want to delete item "{todo.text}"?
          <button onClick={confirmDelete}>Yes</button>
          <button onClick={cancelDelete}>No</button>
        </div>
      )}
    </div>
  );
}
export default TodoItem2;
