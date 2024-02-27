import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Booklist from "./components/Booklist";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import Payment from "./components/Payment";

function App() {
  return (
    <div className="main">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about us" element={<AboutUs />} />
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
