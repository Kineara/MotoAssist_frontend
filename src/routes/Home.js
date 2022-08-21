import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ExistingUsers from "../components/ExistingUsers";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";


const Home = () => {
  const [existingUsers, setExistingUsers] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((r) => r.json())
      .then((d) => setExistingUsers(d));
  }, []);

  return (
    <Stack direction="column" spacing={2} alignItems="center">
        <Typography>Select your Profile:</Typography>
        <ExistingUsers existingUsers={existingUsers} />
        <Button color="secondary" variant="outlined">
          <Link to="/newUser">Create a New User</Link>
        </Button>
        <Button color="secondary" variant="outlined">
          <Link to="/deleteUser" state={existingUsers}>Delete a User</Link>
        </Button>
    </Stack>
  );
};

export default Home;
