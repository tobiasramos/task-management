import "./home.css";
import { useState } from "react";
import TaskForm from "../components/taskForm/task-form";
import TaskList from "../components/taskList/task-list";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  return (
    <div className="home-container">
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Home;
