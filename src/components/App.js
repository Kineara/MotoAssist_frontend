import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import About from "../routes/About";
import NoPage from "../routes/NoPage";
import DrawerAppBar from "../routes/AppBar";
import UserPage from "../routes/UserPage";
import NewUser from "../routes/NewUser";
import Garage from "../routes/Garage";

export default function App() {
  const [existingUsers, setExistingUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((r) => r.json())
      .then((d) => setExistingUsers(d));
  }, []);

  function userClickHandler(userId) {
    setSelectedUser(userId);
  }

  function vehicleClickHandler(vehicleId) {
    setSelectedVehicle(vehicleId);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DrawerAppBar />}>
          <Route
            index
            element={
              <Home
                existingUsers={existingUsers}
                userClickHandler={userClickHandler}
              />
            }
          />
          <Route path="user" element={<UserPage userId={selectedUser} vehicleClickHandler={vehicleClickHandler}/>} />
          <Route path="newUser" element={<NewUser />} />
          <Route path="garage" element={<Garage vehicleId={selectedVehicle} />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
