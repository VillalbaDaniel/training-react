import classes from  './CounterReducer.module.css';

function CounterReducer() {

    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
    <button className={classes["button-add"]}>Add 1</button>
    <button className={classes["button-delete"]}>Delete 1</button>
    <span className={classes["span"]}></span>
    </div>
  );
}

export default CounterReducer;
