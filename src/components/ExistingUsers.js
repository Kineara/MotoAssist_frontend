import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";

const existingUsers = ({ existingUsers, userClickHandler }) => {
  const userButtons = existingUsers.map((user) => {
    return (
      <Link to={`/user`} key={user.id}>
        <Button
          value={user.id}
          onClick={(event) => userClickHandler(event.target.value)}
          variant="outlined"
        >
          {user.name}
        </Button>
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
