import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <p className="count-display">{count}</p>
      <div className="button-group">
        <button onClick={increment} className="btn increment">+</button>
        <button onClick={decrement} className="btn decrement">-</button>
      </div>
    </div>
  );
};

export default Counter;