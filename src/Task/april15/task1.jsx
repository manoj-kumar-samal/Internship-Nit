import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Register from "./register";
import Navbar from "./navbar";

export default function Task1() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>

    </div>
  )
}