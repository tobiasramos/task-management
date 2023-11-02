import { List } from "@material-ui/core";
import TaskItem from "../taskItem/task-item";

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <List className="list-container">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDeleteTask} />
      ))}
    </List>
  );
};

export default TaskList;
