import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const NewUser = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
      }),
    })
      .then((r) => r.json())
      .then(() => navigate("/"));
  };

  return (
    <Stack direction="column" spacing={2} alignItems="center">
      <form onSubmit={handleSubmit}>
        <Stack direction="column" spacing={2} alignItems="center">
          <Typography>What do you go by?</Typography>
          <TextField
            id="username"
            label="enter a username"
            value={username}
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button variant="outlined" type="submit">
            Create Profile
          </Button>
        </Stack>
      </form>
      <Button variant="outlined" color="secondary">
        <Link to="/">Return to Homepage</Link>
      </Button>
    </Stack>
  );
};

export default NewUser;
