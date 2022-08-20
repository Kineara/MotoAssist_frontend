import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"
import Stack from '@mui/material/Stack';

const existingUsers = ({ existingUsers }) => {
  const usernames = existingUsers.map((user) => user.name)


  const userButtons = usernames.map((user) => {
    return (
      <Link to={`/user`}>
        <Button variant="outlined">{user}</Button>
      </Link>
    );
  });

  return (
    <Stack direction="row" spacing={2}>
      {userButtons}
    </Stack>
  );
};

export default existingUsers;
