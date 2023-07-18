import "./home.css";
import { useState } from "react";
import CreateTask from "../components/createTask/create-task";
import TaskList from "../components/taskList/task-list";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="home-container">
      <CreateTask onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Home;
