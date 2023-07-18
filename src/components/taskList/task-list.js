import React from "react";
import { List } from "@material-ui/core";
import TaskItem from "../taskItem/task-item";

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <List>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDeleteTask} />
      ))}
    </List>
  );
};

export default TaskList;
