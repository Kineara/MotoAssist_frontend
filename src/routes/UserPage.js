import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const UserPage = () => {
  return (
    <>
      <h1>User Page</h1>
      <Link to="/">
        <Button color="secondary" variant="outlined">Switch User</Button>
      </Link>
    </>
  );
};

export default UserPage;
