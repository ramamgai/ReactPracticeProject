import TodoItem from "./TodoItem";
function TodoItems({ todoItems }) {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.duedate}></TodoItem>
      ))}
    </div>
  );
}
export default TodoItems;
