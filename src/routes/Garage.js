import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TaskCard from "../components/TaskCard";

const Garage = ({ vehicleId }) => {
  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/vehicles/${vehicleId}`)
      .then((r) => r.json())
      .then((d) => setVehicleData(d));
  }, [vehicleId]);

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
    .then((d) => setVehicleData(task.vehicle_Id))
  }



  function getVehicleById() {
    let vehicle;
    if (vehicleData.tasks) {
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
      vehicle = <Typography>Loading Vehicle Info...</Typography>;
    }
    return vehicle;
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
