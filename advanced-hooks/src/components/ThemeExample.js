// import './App.css';
import { useContext, createContext, useReducer } from "react";
import { MyContext } from "./CountContext";

const initialState = {
  light: {
    textColor: "#000",
    bgColor: "#f6f8fa",
  },
  dark: {
    textColor: "#fff",
    bgColor: "#222",
  },
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT":
      state = initialState.light;
      break;
    case "DARK":
      state = initialState.dark;

      break;

    default:
      throw new Error("No action available");
  }
  return state;
};

const ThemeContext = createContext(initialState);

function App() {
  return (
    <ThemeContext.Provider value={initialState}>
      <Toolbar></Toolbar>
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div
      style={{
        backgroundColor: "#ededed",
        display: "flex",
        justifyContent: "center",
        padding: "2em 0",
        borderRadius: ".4rem",
      }}
    >
      <ThemedButton></ThemedButton>
    </div>
  );
}
function ThemedButton() {
  const theme = useContext(ThemeContext);
  const [state, dispatch] = useReducer(themeReducer, theme.light);
 

  return (
    <button onClick={() => state === theme.light ? dispatch({type:"DARK"}): dispatch({type:"LIGHT"})}
      style={{
        backgroundColor: state.bgColor,
        color: state.textColor,
        padding: "1em 2em",
        borderRadius: ".5rem",
        fontSize: "1.4rem",
      }}
    >
      I am styled by theme context!
    </button>
  );
}
export default App;
