import "./home.css";
import { useEffect, useState } from "react";
import CreateTask from "../../components/createTask/create-task";
import TaskList from "../../components/taskList/task-list";
import axios from "axios";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("/task")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar tarefas da API:", error);
      });
  }, []);

  const addTask = (task) => {
    axios
      .post("/task", task)
      .then((response) => {
        setTasks([...tasks, response.data]);
      })
      .catch((error) => {
        console.error("Erro ao criar uma tarefa:", error);
      });
  };

  const deleteTask = (taskToDelete) => {
    axios
      .delete(`/task/${taskToDelete.id}`)
      .then(() => {
        const updatedTasks = tasks.filter((task) => task !== taskToDelete);
        setTasks(updatedTasks);
      })
      .catch((error) => {
        console.error("Erro ao excluir a tarefa:", error);
      });
  };

  return (
    <div className="home-container">
      <CreateTask onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
};

export default Home;
