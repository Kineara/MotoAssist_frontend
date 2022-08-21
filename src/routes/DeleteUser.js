import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const DeleteUser = () => {
  const [selectedUser, setSelectedUser] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  function handleChange(event) {
    setSelectedUser(event.target.value);
  }

  function handleSubmit(event) {
    fetch(`http://localhost:9292/users/${selectedUser}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => navigate("/"));
  }

  return (
    <Stack direction="column" spacing={2} alignItems="center">
      <Typography>Select a Profile to Delete</Typography>
      <Box sx={{ minWidth: 240 }}>
        <FormControl fullWidth>
          <InputLabel id="userSelectLabel">Select a User</InputLabel>
          <Select
            labelId="userSelectLabel"
            id="userSelect"
            value={selectedUser}
            label="User"
            onChange={handleChange}
          >
            {location.state.map((user) => {
              return (
                <MenuItem value={user.id} key={user.id}>
                  {user.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => handleSubmit()}
      >
        Delete
      </Button>
    </Stack>
  );
};

export default DeleteUser;
