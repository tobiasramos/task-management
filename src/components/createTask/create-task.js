import { Button, Popover } from "@material-ui/core";
import TaskForm from "../taskForm/task-form";
import { useState } from "react";

const CreateTask = ({ onAddTask }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleOpenPopover = () => {
    setPopoverOpen(true);
  };

  const handleClosePopover = () => {
    setPopoverOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpenPopover} variant="contained" color="primary">
        Crie uma tarefa
      </Button>
      <Popover
        open={popoverOpen}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <TaskForm
          onAddTask={(task) => {
            onAddTask(task);
            handleClosePopover();
          }}
        />
      </Popover>
    </div>
  );
};

export default CreateTask;
