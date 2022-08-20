import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import NoPage from "./routes/NoPage";
import DrawerAppBar from "./routes/AppBar";
import UserPage from "./routes/UserPage";
import NewUser from "./routes/NewUser";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DrawerAppBar />}>
          <Route index element={<Home />} />
          <Route path="user" element={<UserPage />} />
          <Route path="newUser" element={<NewUser />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
