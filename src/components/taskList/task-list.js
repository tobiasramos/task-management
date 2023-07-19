import { List } from "@material-ui/core";
import TaskItem from "../taskItem/task-item";

const TaskList = ({ tasks, onDeleteTask, onUpdateTask }) => {
  const handleUpdateTask = (taskId, updatedTitle, updatedDescription) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: updatedTitle, description: updatedDescription } : task
    );
    onUpdateTask(updatedTasks);
  };

  return (
    <List className="list-container">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onUpdate={handleUpdateTask}
        />
      ))}
    </List>
  );
};

export default TaskList;
