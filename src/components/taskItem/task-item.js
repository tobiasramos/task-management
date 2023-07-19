import { useState } from "react";
import "./task-item.css";
import { Button, Popover, Typography, TextField } from "@material-ui/core";

const TaskItem = ({ task, onDelete, onUpdate }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({
    title: task.title,
    description: task.description,
  });

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

  const handleEdit = () => {
    setIsEditing(true);
    handleClosePopover();
  };

  const handleSave = () => {
    if (
      updatedTask.title.trim() === "" ||
      updatedTask.description.trim() === ""
    ) {
      alert("Por favor, preencha todos os campos antes de salvar.");
      return;
    }

    onUpdate(task.id, updatedTask.title, updatedTask.description);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUpdatedTask({
      title: task.title,
      description: task.description,
    });
  };

  const handleChange = (e) => {
    setUpdatedTask((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="item-container">
      {isEditing ? (
        <>
          <TextField
            name="title"
            value={updatedTask.title}
            onChange={handleChange}
          />
          <TextField
            name="description"
            value={updatedTask.description}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" onClick={handleSave}>
            Salvar
          </Button>
          <Button variant="contained" color="default" onClick={handleCancel}>
            Cancelar
          </Button>
        </>
      ) : (
        <>
          <h3>{updatedTask.title}</h3>
          <p>{updatedTask.description}</p>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleOpenPopover}
          >
            Deletar
          </Button>
          <Button variant="contained" color="primary" onClick={handleEdit}>
            Editar
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
      )}
    </div>
  );
};

export default TaskItem;
