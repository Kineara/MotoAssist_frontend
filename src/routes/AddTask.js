import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const AddTask = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskCategory, setTaskCategory] = useState('');
  const [taskDue, setTaskDue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:9292/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: taskName,
        description: taskDescription,
        category: taskCategory,
        date_due: taskDue,
        vehicle_id: location.state.id
      }),
    })
      .then((r) => r.json())
      .then(() => navigate("/garage", {state: location.state}));
  }

  return (
    <Stack direction="column" spacing={2} alignItems="center">
      <form onSubmit={handleSubmit}>
        <Stack direction="column" spacing={2} alignItems="center">
          <Typography>Add a Maintenance Task</Typography>
          <TextField
            id="name"
            label="Task Name"
            value={taskName}
            variant="outlined"
            onChange={(e) => setTaskName(e.target.value)}
          />
          <TextField
            id="description"
            label="Task Description"
            value={taskDescription}
            variant="outlined"
            onChange={(e) => setTaskDescription(e.target.value)}
          />
          <TextField
            id="category"
            label="Task Category"
            value={taskCategory}
            variant="outlined"
            onChange={(e) => setTaskCategory(e.target.value)}
          />
          <TextField
            id="due"
            label="Date Due"
            value={taskDue}
            variant="outlined"
            onChange={(e) => setTaskDue(e.target.value)}
          />
          <Button
            variant="outlined"
            type="submit"
          >
            Schedule
          </Button>
        </Stack>
      </form>
    </Stack>
  )
}

export default AddTask;