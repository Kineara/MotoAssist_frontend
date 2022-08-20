import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const NewUser = () => {
  return (
    <>
      <h1>New User Page</h1>
      <Button variant="outlined" color="secondary">
        <Link to="/">Return to Homepage</Link>
      </Button>
    </>
  );
};

export default NewUser;
