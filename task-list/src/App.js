import { useEffect, useState } from "react";
import TaskList from "./components/Tasks/TasksList";
import TasksInput from "./components/Tasks/TasksInput";
import classes from "./App.module.css";
import HourGlass from "./components/UI/Spinners/HourGlass";

const BASE_URL = "https://task-list-53682-default-rtdb.europe-west1.firebasedatabase.app/"

const App = () => {
  const [tasks, setNewTask] = useState({});
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const fetchTasksHandler = async (
    method = "GET",
    task = { id: "", text: "" }
  ) => {
    try {
      setPending(true);
      setError(null);

      let response = null;

      if (method === "DELETE") {
        response = await fetch(
          BASE_URL + "tasks/"+
            task.id +
            ".json",
          { method }
        );
      } else if (method === "PATCH") {
        response = await fetch(
          BASE_URL + "tasks/"+
            task.id +
            ".json",
          {
            method,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: task.text }),
          }
        );
      } else {
        response = await fetch(
          BASE_URL + "tasks.json",
          {
            method,
            headers: {
              "Content-Type": method !== "GET" ? "application/json" : "",
            },
            body: method !== "GET" ? JSON.stringify({ title: task.text }) : null,
          }
        );
      }

      // console.log(response);

      if (response.ok) {
        const data = await response.json();
        if (method === "GET") {
          setNewTask(data);
        } else {
          fetchTasksHandler();
        }
        // setNewTask(data);
        // console.log(data);
      }
    } catch (error) {
      setError({
        message: error.message || "Something went wrong",
      });
    }

    setPending(false);
  };

  useEffect(() => {
    fetchTasksHandler();
  }, []);

  const addTaskHandler = (enteredText) => {
    fetchTasksHandler("POST", { text: enteredText });
  };

  const deleteItemHandler = (taskId) => {
    fetchTasksHandler("DELETE", { id: taskId });
  };

  const updateItemHandler = (taskId, taskText) => {
    fetchTasksHandler("PATCH", { id: taskId, text: taskText });
  };

  return (
    <main>
      <section className={classes["task-form"]}>
        <TasksInput onAddTask={addTaskHandler} />
      </section>
      {pending === true && <HourGlass />}
      <section className={classes["tasks-content"]}>
        {!pending && tasks !== null && error === null && (
          <TaskList
            items={tasks}
            onDeleteItem={deleteItemHandler}
            onEditItem={updateItemHandler}
          />
        )}
        {!pending && tasks === null && !error && (
          <h2
            style={{
              textAlign: "center",
              padding: "1em",
              border: "1px solid #339900",
              backgroundColor: "#99cc33",
            }}
          >
            No tasks availables. Add one?
          </h2>
        )}
        {!pending && error !== null && (
          <h2
            style={{
              textAlign: "center",
              padding: "1em",
              border: "1px solid #339900",
              backgroundColor: "#99cc33",
            }}
          >
            {error.message}
          </h2>
        )}
      </section>
    </main>
  );
};

export default App;
