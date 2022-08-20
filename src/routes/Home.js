import Button from '@mui/material/Button';
import ExistingUsers from '../components/ExistingUsers';


const Home = () => {
  return (
    <>
    <h1>Home</h1>
    <div>
    <ExistingUsers />
    </div>

    <div>
    <Button color="secondary" variant="outlined">Create a New User</Button>
    </div>
    </>
  )
};

export default Home;