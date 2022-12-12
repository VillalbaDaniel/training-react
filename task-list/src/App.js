import "./App.module.css";
import { useState } from "react";

const tasks = [
  {
    id: 1,
    text: "morbi non quam",
  },
  {
    id: 2,
    text: "ut dolor morbi vel lectus in quam",
  },
  {
    id: 3,
    text: "morbi non quam nec dui luctus",
  },
];

function TaskForm(props) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewTask(task);
    //último paso
    setTask("");
  };
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="task" value={task} />
        <button>Save</button>
      </form>
    </div>
  );
}

function TaskList(props) {
  return (
    <ul>
      {props.onInitialTasks.map((task) => {
        return <li key={task.id}>{task.text}</li>;
      })}
    </ul>
  );
}

function App() {
  const [updatedTasks, setNewTask] = useState(tasks);

//   console.log(updatedTasks);

  const saveTask = (createdTask) => {
    // console.log(createdTask);
    setNewTask((prevState) => {
      return [
        ...prevState,
        {
          id: Math.ceil(Math.random() * 1000),
          text: createdTask,
        },
      ];
    });
  };

  return (
    <>
      <TaskForm onNewTask={saveTask} />
      <TaskList onInitialTasks={updatedTasks} />
    </>
  );
}

export default App;