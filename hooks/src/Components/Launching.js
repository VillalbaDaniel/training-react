import "./Launching.css";
import { useState, useEffect } from "react";

function Launching() {
  const [count, setCount] = useState(10);
  useEffect(() => {
    document.title = `CountDown to  Launching!`;
    if (count !== 0) {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      }else {
    }
  });

  return (
    <div>
      <h1>Rocket Launching - NASA Mars</h1>
      <h2>Ignition Sequence Start</h2>
        <p className="p-style">All Enginers runnig. Lift off!!</p>
      <span className="countDown">
      {count}
      </span>
    </div>
  );
}

export default Launching;
