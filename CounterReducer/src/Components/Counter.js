import { useReducer } from "react";

import { initialState, counterReducer } from "../reducers/counterReducer";

const buttonStyle = {
  backgroundColor: "dodgerblue",
  margin:"2em",
  padding: "1em",
  color: "white",
  borderRadius: ".25rem",
};

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);


  return (
    <div>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        style={buttonStyle}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        style={buttonStyle}
      >
        Decrement
      </button>
      <span style={{ ...buttonStyle, display: "block", width: "30%" }}>
        {state}
      </span>
    </div>
  );
}

export default Counter;
