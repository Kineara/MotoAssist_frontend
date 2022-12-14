import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TaskCard from "../components/TaskCard";

const Garage = () => {
  const location = useLocation();
  const [vehicleData, setVehicleData] = useState(location.state);
  const [vehicleTasks, setVehicleTasks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/vehicles/${vehicleData.id}/tasks`)
      .then((r) => r.json())
      .then((d) => setVehicleTasks(d));
  }, [vehicleData]);

  function taskCompletedClickHandler(task) {
    fetch(`http://localhost:9292/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !task.completed,
      }),
    })
      .then((r) => r.json())
      .then((d) => setVehicleTasks(d));
  }

  function taskDeleteClickHandler(task) {
    fetch(`http://localhost:9292/tasks/${task.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((d) => setVehicleTasks(d));
  }

  function renderVehicleData() {
    if (vehicleData) {
      return (
        <Stack direction="column" alignItems="center" spacing={2}>
          <Typography>
            <em>{vehicleData.nickname}</em>
          </Typography>
          <Typography>{`${vehicleData.year} ${vehicleData.make} ${vehicleData.model}`}</Typography>
          <Typography>{`Owned since ${vehicleData.owned_since}`}</Typography>
        </Stack>
      );
    } else {
      return <Typography>Loading Vehicle Info...</Typography>;
    }
  }

  function renderVehicleTasks() {
    if (vehicleTasks.length > 0) {
      return (
        <Stack direction="column" spacing={2} alignItems="center">
          <Typography>Upcoming Maintenance:</Typography>
          <Stack direction="row" spacing={2}>
            {vehicleTasks.map((task) => {
              return (
                <TaskCard
                  taskData={task}
                  key={task.id}
                  taskCompletedClickHandler={taskCompletedClickHandler}
                  taskDeleteClickHandler={taskDeleteClickHandler}
                />
              );
            })}
          </Stack>
        </Stack>
      );
    } else {
      return (
        <Stack direction="column" spacing={2} alignItems="center">
          <Typography>No upcoming maintenance! Lucky you.</Typography>
        </Stack>
      );
    }
  }

  return (
    <Stack direction="column" alignItems="center" spacing={2}>
      {renderVehicleData()}
      {renderVehicleTasks()}
      <Link to={"/addTask"} state={vehicleData}>
        <Button variant="outlined">Schedule some Maintenance</Button>
      </Link>
      <Link to={"/user"} state={vehicleData.user_id}>
        <Button variant="outlined" color="secondary">
          Back to Your Vehicles
        </Button>
      </Link>
    </Stack>
  );
};

export default Garage;
