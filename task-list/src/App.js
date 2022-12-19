import { useState, useEffect } from "react";
import TaskList from "./components/Tasks/TasksList";
import TasksInput from "./components/Tasks/TasksInput";
import Hourglass from "./components/UI/Spinners/HourGlass";
import classes from "./App.module.css";

const App = () => {
    const [tasks, setNewTask] = useState({});
    const [pending, setPending] = useState(false);
    const [error, setError] = useState("");

    const fetchTasksHandler = async (method = "GET", taskText = "") => {
        try {
            setPending(true);
            setError(null);
            let response = null;

            if (method === "DELETE") {
                response = await fetch(
                    "https://task-list-53682-default-rtdb.europe-west1.firebasedatabase.app/ tasks.json" +
                        taskText +
                        ".json",
                    { method }
                );
            } else {
                response = await fetch(
                    "https://task-list-53682-default-rtdb.europe-west1.firebasedatabase.app/ tasks.json",
                    {
                        method,
                        headers: {
                            "Content-Type":
                                method !== "GET" ? "application/json" : "",
                        },
                        body:
                            method !== "GET"
                                ? JSON.stringify({ title: taskText })
                                : null,
                    }
                );
            }

            if (response.ok) {
                const data = await response.json();
                if (method === "GET") {
                    setNewTask(data);
                } else {
                    fetchTasksHandler();
                }
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
        fetchTasksHandler("POST", enteredText);
    };

    const deleteItemHandler = (taskId) => {
        fetchTasksHandler("DELETE", taskId);
    };

    return (
        <main>
            <section className={classes["task-form"]}>
                <TasksInput onAddTask={addTaskHandler} />
            </section>
            {pending && <Hourglass />}
            <section className={classes["tasks-content"]}>
                {!pending && tasks !== null && error === null && (
                    <TaskList items={tasks} onDeleteItem={deleteItemHandler} />
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
                {!pending && tasks === null && error !== null && (
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
