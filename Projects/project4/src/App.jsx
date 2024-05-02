import React, { useState } from "react";
import styles from "./App.module.css";
import Display from "./Components/Display";
import Buttons from "./Components/Buttons";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = (buttonName) => {
    let newInputValue = inputValue;
    if (buttonName === "=") {
      // Evaluate the expression if "=" is clicked
      try {
        newInputValue = eval(inputValue).toString();
      } catch (error) {
        newInputValue = "Error";
      }
    } else if (buttonName === "c") {
      // Clear the input field if "C" is clicked
      newInputValue = "";
    } else {
      // Append the button name to the input field
      newInputValue += buttonName;
    }
    setInputValue(newInputValue);
  };

  return (
    <div className={styles.calculator}>
      <Display value={inputValue} />
      <Buttons onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
