import React from "react";

function App() {
  return (
    <div className="container">
      <h1>Counter</h1>
      <span id="value">0</span>
      <div className="btn-group">
        <button className="btn btn-decrease">DECREASE</button>
        <button className="btn btn-reset">RESET</button>
        <button className="btn btn-increase">INCREASE</button>
      </div>
    </div>
  );
}

export default App;
