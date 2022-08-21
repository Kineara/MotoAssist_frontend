import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";

const ExistingUsers = ({ existingUsers }) => {
  const userButtons = existingUsers.map((user) => {
    const userId = user.id;
    return (
      <Link to={`/user`} key={user.id} state={userId}>
        <Button variant="outlined">{user.name}</Button>
      </Link>
    );
  });

  return (
    <Stack direction="row" spacing={2}>
      {userButtons}
    </Stack>
  );
};

export default ExistingUsers;
