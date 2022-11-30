// import './Greetings.css';

import { useEffect } from "react";

function Greetings(props) {

const message = `Hello, ${props.name}!`;
useEffect(()=>{
document.title = `Greetings to ${props.name}!`
},[props.name])

  return (
    <h1>{message}</h1>
  );
}

export default Greetings;
