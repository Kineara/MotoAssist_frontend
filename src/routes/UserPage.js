import React, { useState, useEffect } from "react";
import { useLocation} from 'react-router-dom';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import BasicCard from "../components/Card";
import Typography from "@mui/material/Typography";

const UserPage = () => {
  const location = useLocation();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:9292/users/${location.state}`)
      .then((r) => r.json())
      .then((d) => setUserData(d));
  }, [location.state]);

  function fillGarage() {
    let garage;
    if (userData.vehicles) {
      if (userData.vehicles.length > 0) {
        garage = userData.vehicles.map((vehicle) => {
          return (
            <BasicCard
              vehicleData={vehicle}
              key={vehicle.id}
            />
          );
        });
      } else {
        return <Typography>It's kinda empty in here...</Typography>;
      }
    } else {
      garage = <Typography>Loading Vehicles...</Typography>;
    }
    return garage;
  }

  return (
    <Stack direction="column" spacing={2} alignItems="center">
      <Typography>Hey {userData.name}!</Typography>
      <Typography>Your Vehicles:</Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        {fillGarage()}
      </Stack>
      <Typography>Been out shopping? Add your new ride!</Typography>
      <Link to="/addVehicle" state={userData}>
        <Button color="secondary" variant="outlined">
          Add Vehicle
        </Button>
      </Link>
    </Stack>
  );
};

export default UserPage;
