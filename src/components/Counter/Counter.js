import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [counter, setCounter] = useState(0);

  const Increment = () => {
    setCounter(counter + 1);
  };
  const Decrement = () => {
    setCounter(counter - 1);
  };
  const Reset = () => {
    setCounter(0);
  };

  return (
    <div className="all-counter"><div className="counter-container">
      <button className="btn-counter" onClick={() => Increment()}>+</button>
      <br />
      <h1 className="h1-counter">{counter}</h1>
      <br />
      <button className="btn-counter" onClick={() => Decrement()}>-</button>
      <br />
      <button className="btn-counter" onClick={() => Reset()}>Reset</button>
    </div></div>
  );
};

export default Counter;
