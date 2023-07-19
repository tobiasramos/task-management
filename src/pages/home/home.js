import "./home.css";
import { useState } from "react";
import CreateTask from "../../components/createTask/create-task";
import TaskList from "../../components/taskList/task-list";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  const updateTask = (taskId, updatedTitle, updatedDescription) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, title: updatedTitle, description: updatedDescription }
        : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="home-container">
      <CreateTask onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onUpdateTask={updateTask}
      />
    </div>
  );
};

export default Home;
