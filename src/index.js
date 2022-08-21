import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import About from "./routes/About";
import NoPage from "./routes/NoPage";
import UserPage from "./routes/UserPage";
import NewUser from "./routes/NewUser";
import Garage from "./routes/Garage";
import DeleteUser from "./routes/DeleteUser";
import AddVehicle from "./routes/AddVehicle";
import AddTask from "./routes/AddTask";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="user" element={<UserPage />} />
          <Route path="newUser" element={<NewUser />} />
          <Route path="deleteUser" element={<DeleteUser />} />
          <Route path="garage" element={<Garage />} />
          <Route path="addVehicle" element={<AddVehicle />} />
          <Route path="addTask" element={<AddTask />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
