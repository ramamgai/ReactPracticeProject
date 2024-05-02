import React from "react";

function CurrentTime() {
  let time = new Date();
  return (
    <p>
      This is the current time: {time.toLocaleTimeString()} -{""}
      {time.toLocaleDateString()}
    </p>
  );
}

export default CurrentTime;
