import React from "react";
import ClockHeading from "./Components/ClockHeading";
import ClockSlogan from "./Components/ClockSlogan";
import CurrentTime from "./Components/CurrentTime";
import NewCurrentTime from "./Components/NewCurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
      <NewCurrentTime></NewCurrentTime>
    </div>
  );
}

export default App;
