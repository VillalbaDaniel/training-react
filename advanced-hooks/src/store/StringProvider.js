// import './StringProvider.css';
import React, { createContext, useReducer } from "react";
import { initialState, stringReducer } from "../reducers/StringReducer";

export const StringContext = createContext(null);

function StringProvider(props) {
  const [state, dispatch] = useReducer(stringReducer, initialState);

  return (
    <StringContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StringContext.Provider>
  );
}

export default StringProvider;