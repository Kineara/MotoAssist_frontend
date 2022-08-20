import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import BasicCard from "../components/Card";
import Typography from "@mui/material/Typography";

const UserPage = ({ userId }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    //if (userId !== null) {
    fetch(`http://localhost:9292/users/${userId}`)
      .then((r) => r.json())
      .then((d) => setUserData(d));
    //}
  }, [userId]);

  function fillGarage() {
    let garage;
    if (userData.vehicles) {
      if (userData.vehicles.length > 0) {
        garage = userData.vehicles.map((vehicle) => {
          return <BasicCard vehicleData={vehicle} key={vehicle.id} />;
        });
      } else {
        return <Typography>It's kinda empty in here...</Typography>
      }
    } else {
      garage = <div>Loading Vehicles...</div>;
    }
    return garage;
  }

  return (
    <Stack direction="column" spacing={2} alignItems="center">
      <Typography>Hey {userData.name}!</Typography>
      <div>Your Garage:</div>
      <Stack direction="row" spacing={2} alignItems="center">
        {fillGarage()}
      </Stack>
      <Typography>Been out shopping? Add your new ride!</Typography>
      <Link to="/">
        <Button color="secondary" variant="outlined">
          Add Vehicle
        </Button>
      </Link>
    </Stack>
  );
};

export default UserPage;
