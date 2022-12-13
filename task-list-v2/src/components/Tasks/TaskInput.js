import classes from './TaskInput.module.css';
import {useState} from "react";
import Button from "../UI/Buttons/Button.js";

function TaskInput(props) {
    const [value, setValue] = useState("");
    const [fullfilled, setIsFullfilled] = useState(true);
    const inputChangeHandler = e => {
        if (e.target.value.trim().length > 0) {
            setIsFullfilled(true);
        }
        setValue(e.target.value);
    }
    const submitHandler = e => {
        e.preventDefault();
        if (value.trim().length === 0) {
            setIsFullfilled(false);
            return 
        }
        props.onAddTask(value);
        setValue("");
    }

    return (
    <form onSubmit={submitHandler}>
        <div className={`${classes["form-control"]} ${!fullfilled && classes["not-fullfilled"]}` }>
            <label><h2>Post a Task</h2></label>
            <input type="text" onChange={inputChangeHandler} value={value} />
        </div>
        <Button type="submit">Save</Button>
    </form>
  );
}

export default TaskInput;
