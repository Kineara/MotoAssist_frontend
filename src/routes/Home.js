import Button from "@mui/material/Button";
import ExistingUsers from "./ExistingUsers";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <div>
        <ExistingUsers />
      </div>

      <div>
        <Button color="secondary" variant="outlined">
          <Link to="/newUser">Create a New User</Link>
        </Button>
      </div>
    </>
  );
};

export default Home;
