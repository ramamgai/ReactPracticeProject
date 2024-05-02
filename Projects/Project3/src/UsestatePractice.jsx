import React, { useState } from "react";

function UsestatePractice() {
  // Step 1: Initialize state with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Step 2: Access the current state value */}
      <p>Count: {count}</p>
      {/* Step 3: Update the state value */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default UsestatePractice;
