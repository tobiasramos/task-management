import { useState } from "react";
import "./task-item.css";
import { Button, Popover, Typography } from "@material-ui/core";

const TaskItem = ({ task, onDelete }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleOpenPopover = () => {
    setPopoverOpen(true);
  };

  const handleClosePopover = () => {
    setPopoverOpen(false);
  };

  const handleDelete = () => {
    onDelete(task);
    handleClosePopover();
  };
  return (
    <div className="item-container">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <Button variant="contained" color="secondary" onClick={handleOpenPopover}>
        Deletar
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
        <div className="popover-content">
          <Typography>Tem certeza que deseja excluir esta tarefa?</Typography>
          <Button variant="contained" color="secondary" onClick={handleDelete}>
            Confirmar
          </Button>
          <Button variant="contained" color="primary" onClick={handleClosePopover}>
            Não
          </Button>
        </div>
      </Popover>
    </div>
  );
};

export default TaskItem;
