import React, { useState } from "react";
import { Button, Popover, Typography } from "@material-ui/core";

const DeleteTask = ({ task, onDelete }) => {
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
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleOpenPopover}
      >
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
          <Typography>
            Tem certeza que deseja excluir esta tarefa?
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDelete}
          >
            Confirmar
          </Button>
          <Button
            variant="contained"
            color="default"
            onClick={handleClosePopover}
          >
            Não
          </Button>
        </div>
      </Popover>
    </>
  );
};

export default DeleteTask;
