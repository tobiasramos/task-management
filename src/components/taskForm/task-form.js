import "./task-form.css";
import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextField
        className="textField"
        label="Título"
        value={title}
        onChange={handleTitleChange}
        required
      />
      <TextField
        className="textField"
        label="Descrição"
        value={description}
        onChange={handleDescriptionChange}
        required
      />
      <Button
        className="btn-add"
        type="submit"
        variant="contained"
        color="primary"
      >
        Adicionar Tarefa
      </Button>
    </form>
  );
};

export default TaskForm;
