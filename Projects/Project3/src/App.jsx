import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./Components/ErrorMessage";
import VehicleItems from "./Components/VehicleItems";
import UsestatePractice from "./UsestatePractice";
import UsestatePractice2 from "./UsestatePractice2";

function App() {
  return (
    <div>
      <ErrorMessage />
      <VehicleItems />
      <UsestatePractice></UsestatePractice>
      <UsestatePractice2></UsestatePractice2>
    </div>
  );
}

export default App;
