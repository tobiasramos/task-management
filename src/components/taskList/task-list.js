import React from "react";

import { List } from "@material-ui/core";
import TaskItem from "../taskItem/task-item";

const TaskList = ({ tasks }) => {
  return (
    <List>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </List>
  );
};

export default TaskList;
