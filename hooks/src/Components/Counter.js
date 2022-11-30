
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const handlePlusOne = () =>{
        setCount(count +1)
    }
    const handleMultFive = () =>{
        setCount(count *5)
    }
    const handleMinusOne = () =>{
        setCount(count -1)
    }
    const handleReset = () =>{
        setCount(count - count)
    }
    const handleDivideByHundred = () => {
        if (count !== 0) {
          setCount(count / 100);
        } else {
          alert("Division of 0 not allowed");
        }
      }

  return (
    <div>
        <h2>You clicked {count} times</h2>
        <button onClick={handlePlusOne}>Click me +1</button><br></br>
        <button onClick={handleMultFive}>Click me *5</button><br></br>
        <button onClick={handleMinusOne}>Click me -1</button><br></br>
        <button onClick={handleDivideByHundred}>Click me /100</button><br></br>
        <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
