import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const AddVehicle = () => {
  const location = useLocation();
  const currentUser = location.state.id
  const navigate = useNavigate();

  const [vehicleName, setVehicleName] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehiclePurchaseDate, setVehiclePurchaseDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:9292/vehicles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nickname: vehicleName,
        year: vehicleYear,
        make: vehicleMake,
        model: vehicleModel,
        vehicle_type: vehicleType,
        user_id: currentUser,
        owned_since: vehiclePurchaseDate,
      }),
    })
      .then((r) => r.json())
      .then(() => navigate("/user", {state: currentUser}));
  }

  return (
    <Stack direction="column" spacing={2} alignItems="center">
      <form onSubmit={handleSubmit}>
        <Stack direction="column" spacing={2} alignItems="center">
          <Typography>Tell us about your ride!</Typography>
          <TextField
            id="name"
            label="Vehicle Nickname"
            value={vehicleName}
            variant="outlined"
            onChange={(e) => setVehicleName(e.target.value)}
          />
          <TextField
            id="year"
            label="Vehicle Year"
            value={vehicleYear}
            variant="outlined"
            onChange={(e) => setVehicleYear(e.target.value)}
          />
          <TextField
            id="make"
            label="Vehicle Make"
            value={vehicleMake}
            variant="outlined"
            onChange={(e) => setVehicleMake(e.target.value)}
          />
          <TextField
            id="model"
            label="Vehicle Model"
            value={vehicleModel}
            variant="outlined"
            onChange={(e) => setVehicleModel(e.target.value)}
          />
          <TextField
            id="type"
            label="Vehicle Type (i.e. Motorcycle)"
            value={vehicleType}
            variant="outlined"
            onChange={(e) => setVehicleType(e.target.value)}
          />
          <TextField
            id="purchaseDate"
            label="Date Purchased"
            value={vehiclePurchaseDate}
            variant="outlined"
            onChange={(e) => setVehiclePurchaseDate(e.target.value)}
          />
          <Button
            variant="outlined"
            type="submit"
          >
            Add Vehicle
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default AddVehicle;
