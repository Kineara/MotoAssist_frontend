import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom"

const existingUsers = () => {
  const usernames = ["Riley", "Ecco"];

  const userButtons = usernames.map((user) => {
    return (
      <Link to={`/user`}>
        <Button key={user}>{user}</Button>
      </Link>
    );
  });

  return (
    <ButtonGroup size="large" aria-label="users">
      {userButtons}
    </ButtonGroup>
  );
};

export default existingUsers;
