import classes from "./FilterReducer.module.css";
import { useReducer } from "react";

const lorem = [
  "Duis cursus mauris et dapibus dictum.",
  "Duis sit amet urna et ante pretium tempor.",
  "Morbi quis est quis nisl congue condimentum.",
  "Integer rutrum lorem a libero ultricies, at placerat elit interdum.",
  "Sed vulputate elit id diam rhoncus, eu fermentum sem consectetur.",
  "Aliquam rutrum augue id rutrum laoreet.",
  "Praesent pellentesque ipsum sed odio commodo congue.",
  "In sit amet lacus finibus, cursus urna id, faucibus nibh.",
  "Vestibulum ut ipsum commodo, maximus risus ut, eleifend nisi.",
  "In ut augue commodo, vestibulum enim in, ornare nunc.",
];

const initialState = [
  {
    id: 1,
    task: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    done: false,
  },
  {
    id: 2,
    task: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    done: false,
  },
  {
    id: 3,
    task: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    done: true,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.payload];
    case "Remove":
      return state.filter((item) => item.id !== action.payload);
    case "Toggle":
      return state.map((item) =>
        item.id === action.payload ? { ...item, done: !item.done } : item
      );

    default:
      return state;
  }
};

function FilterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNewTask = () => {
    let lastElementPosition = state.length - 1;
    let loremSize = lorem.length - 1;
    //let id = state[lastElementPosition].id + 1;
    let id = lastElementPosition >= 0 ? state[lastElementPosition].id + 1 : 0;

    let newTask =
      //state[Math.floor(Math.random() * (lastElementPosition + 1))].task;
      lorem[Math.floor(Math.random() * (loremSize + 1))];
    let done = Math.floor(Math.random() * 2) === 1 ? true : false;
    const finishedTask = {
      id,
      task: newTask,
      done,
    };

    dispatch({ type: "Add", payload: finishedTask });
  };
  return (
    <div className={classes["tasks-list"]}>
      <h1>To do app</h1>
      <ul>
        {state.map((item) => (
          <li key={item.id}>
            <span className={item.done ? classes.done : ""}>
              {item.task}, id: {item.id}
            </span>
            <div className={classes.actions}>
              <button
                onClick={() => dispatch({ type: "Toggle", payload: item.id })}
                className={classes.toggle}
              >
                Toggle
              </button>
              <button
                onClick={() => dispatch({ type: "Remove", payload: item.id })}
                className={classes.remove}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={handleNewTask} className={classes["new-task"]}>
        Add
      </button>
    </div>
  );
}

export default FilterReducer;