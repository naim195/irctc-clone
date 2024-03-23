import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Booklist from "./components/Booklist";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import Payment from "./components/Payment";
import "@fontsource/roboto/500.css";

function App() {
  const location = useLocation();
  const hideNavBarFor = ["/login", "/register", "/"];
  console.log(location);

  return (
    <div className="main">
      {!hideNavBarFor.includes(location.pathname) && <NavBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/booklist" element={<Booklist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
