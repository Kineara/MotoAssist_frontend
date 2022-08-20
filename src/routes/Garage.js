import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TaskCard from "../components/TaskCard";

const Garage = ({ vehicle, onVehicleDataChange }) => {
  //const vehicleId = vehicle;
  //console.log(vehicle);
  const [vehicleId, setVehicleId] = useState(vehicle);
  const [vehicleData, setVehicleData] = useState();
  useEffect(() => {
    if (vehicle !== undefined) {
      fetch(`http://localhost:9292/vehicles/${vehicleId}`)
        .then((r) => r.json())
        .then((d) => setVehicleData(d));
    }
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
      .then((d) => onVehicleDataChange(d.id))
      .then((d) => setVehicleData(d));
  }

  function getVehicleById() {
    console.log(vehicleData)
    if (vehicleData !== undefined) {
      return (
        <Stack direction="column" alignItems="center" spacing={2}>
          <Typography>
            <em>{vehicleData.nickname}</em>
          </Typography>
          <Typography>{`${vehicleData.year} ${vehicleData.make} ${vehicleData.model}`}</Typography>
          <Typography>{`Owned since ${vehicleData.owned_since}`}</Typography>
          <Typography>Upcoming Maintenance:</Typography>
          <Stack direction="row" spacing={2}>
            {vehicleData.tasks.map((task) => {
              return (
                <TaskCard
                  taskData={task}
                  taskCompletedClickHandler={taskCompletedClickHandler}
                  key={task.id}
                />
              );
            })}
          </Stack>
        </Stack>
      );
    } else {
      return <Typography>Loading Vehicle Info...</Typography>;
    }
  }

  return (
    <Stack direction="column" alignItems="center" spacing={2}>
      {getVehicleById()}
      <Link to="/user">
        <Button variant="outlined" color="secondary">
          Back to Your Vehicles
        </Button>
      </Link>
    </Stack>
  );
};

export default Garage;
