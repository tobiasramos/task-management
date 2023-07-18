import "./home.css";
import { useState } from "react";
import CreateTask from "../components/createTask/create-task";
import TaskList from "../components/taskList/task-list";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div className="home-container">
      <CreateTask onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask}/>
    </div>
  );
};

export default Home;
