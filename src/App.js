import { useState } from "react";
import "./App.css";
import TaskForm from "./components/taskForm/task-form";
import TaskList from "./components/taskList/task-list";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  return (
    <div className="App">
      <h1>Minhas Tarefas</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
