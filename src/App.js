import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  let color = count > 0 ? "green" : count < 0 ? "red" : "black";

  return (
    <div className="container">
      <h1>Counter</h1>
      <span style={{ color }} id="value">
        {count}
      </span>
      <div className="btn-group">
        <button onClick={decreaseCount} className="btn btn-decrease">
          DECREASE
        </button>
        <button onClick={resetCount} className="btn btn-reset">
          RESET
        </button>
        <button onClick={increaseCount} className="btn btn-increase">
          INCREASE
        </button>
      </div>
    </div>
  );
}

export default App;
