import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';


const UserPage = ({ userData }) => {

  console.log(userData);
  
  return (
    <Stack direction="column" spacing={2} alignItems="center">
      <h1>User Page</h1>
      <Link to="/">
        <Button color="secondary" variant="outlined">Switch User</Button>
      </Link>
    </Stack>
  );
};

export default UserPage;
