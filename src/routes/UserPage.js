import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import BasicCard from "../components/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "grey.100",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

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
          return <BasicCard vehicleData={vehicle} handleDelete={handleDelete} key={vehicle.id} />;
        });
      } else {
        return <Typography>It's kinda empty in here...</Typography>;
      }
    } else {
      garage = <Typography>Loading Vehicles...</Typography>;
    }
    return garage;
  }

  function handleDelete(vehicleId) {
    fetch(`http://localhost:9292/vehicles/${vehicleId}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((d) => setUserData(d));
  }

  return (
    <Stack direction="column" spacing={2} alignItems="center">
      <Typography>Hey {userData.name}!</Typography>
      <Typography>Your Vehicles:</Typography>
      <Box
        sx={{ display: "flex", flexWrap: "wrap", p: 1, m: 1, maxWidth: 700, justifyContent: "space-evenly", gap: "30px" }}
      >
        {fillGarage()}
      </Box>
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
