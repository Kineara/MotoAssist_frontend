import Button from "@mui/material/Button";
import ExistingUsers from "../components/ExistingUsers";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";


const Home = ({existingUsers, userClickHandler}) => {
  

  return (
    <Stack direction="column" spacing={2} alignItems="center">
        <Typography>Select your Profile:</Typography>
        <ExistingUsers existingUsers={existingUsers} userClickHandler={userClickHandler} />
        <Button color="secondary" variant="outlined">
          <Link to="/newUser">Create a New User</Link>
        </Button>
    </Stack>
  );
};

export default Home;
