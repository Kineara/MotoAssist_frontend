import Button from "@mui/material/Button";
import ExistingUsers from "../components/ExistingUsers";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';

const Home = ({existingUsers, userClickHandler}) => {
  

  return (
    <Stack direction="column" spacing={2} alignItems="center">
        <div>Select your Profile:</div>
        <ExistingUsers existingUsers={existingUsers} userClickHandler={userClickHandler} />
        <Button color="secondary" variant="outlined">
          <Link to="/newUser">Create a New User</Link>
        </Button>
    </Stack>
  );
};

export default Home;
