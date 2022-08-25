import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PublicNavbar from "./components/PublicNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BASE } from "./utils";

function App() {
  // return (
  //   <div className="App">
  //     <PublicNavbar />
  //     <div className="main-container">
  //       <HomePage />
  //     </div>
  //   </div>
  // );

  return (
    <BrowserRouter>
      <PublicNavbar />
      <div className="main-container">
        <Routes>
          <Route path={BASE} element={<HomePage />} />
          <Route path={BASE + "login"} element={<Login />} />
          <Route path={BASE + "register"} element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
