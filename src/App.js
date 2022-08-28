import React, { useState } from "react";

import "./styles.css";

import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updadeTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            title,
            state
          };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => {
        return !(task.id === id);
      });
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title="To Do"
          onAddTask={addTask}
          taskState="pending"
          tasks={tasks.filter(
            (task) => task.state === "pending"
          )}
          onTaskUpdade={updadeTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="In Progress"
          onAddTask={addTask}
          taskState="in progress"
          tasks={tasks.filter(
            (task) => task.state === "in progress"
          )}
          onTaskUpdade={updadeTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Done"
          onAddTask={addTask}
          taskState="done"
          tasks={tasks.filter(
            (task) => task.state === "done"
          )}
          onTaskUpdade={updadeTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
