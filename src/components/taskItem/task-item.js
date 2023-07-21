import { useState } from "react";
import "./task-item.css";
import { Button, TextField } from "@material-ui/core";
import DeleteTask from "../deleteTask/delete-task";

const TaskItem = ({ task, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ title: task.title, description: task.description });
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleSaveChanges = () => {
    if (editedTask.title.trim() === "" || editedTask.description.trim() === "") {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    task.title = editedTask.title;
    task.description = editedTask.description;
    setIsEditing(false);
    setError(null);
  };

  return (
    <div className="item-container">
    {!isEditing ? (
      <>
        <h3>{task.title}</h3>
        <p className="description">{task.description}</p>
        <div className="btns">
          <DeleteTask task={task} onDelete={onDelete} />
          <Button onClick={() => setIsEditing(true)} variant="contained" color="primary">
            Edit
          </Button>
        </div>
      </>
    ) : (
      <div className="edit-form">
      <TextField
        label="Título"
        name="title"
        value={editedTask.title}
        onChange={handleInputChange}
        fullWidth
        error={error && editedTask.title.trim() === ""}
      />
      <TextField
        label="Descrição"
        name="description"
        value={editedTask.description}
        onChange={handleInputChange}
        fullWidth
        multiline
        error={error && editedTask.description.trim() === ""}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="btns">
        <Button onClick={handleSaveChanges} variant="contained" color="primary">
          Save
        </Button>
        <Button onClick={() => setIsEditing(false)} variant="outlined" color="secondary">
          Cancel
        </Button>
      </div>
    </div>
    )}
  </div>
);
};

export default TaskItem;