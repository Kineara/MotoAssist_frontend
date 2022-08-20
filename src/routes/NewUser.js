import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';


const NewUser = () => {
  return (
    <Stack direction="column" spacing={2} alignItems="center">
      <h1>New User Page</h1>
      <Button variant="outlined" color="secondary">
        <Link to="/">Return to Homepage</Link>
      </Button>
    </Stack>
  );
};

export default NewUser;
