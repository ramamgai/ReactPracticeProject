import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItems from "./Components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Pizza",
      dueDate: "4/26/2024",
    },
    {
      name: "Goto College",
      dueDate: "4/26/2024",
    },
    {
      name: "Like",
      dueDate: "4/26/2024",
    },
  ];
  return (
    <center className="Container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems} />
    </center>
  );
}
export default App;
