import React from "react";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <span className="logo-text">DC</span>
      </div>
      <div className="navbar-icons">
        <button className="nav-btn" alt="Logo 1">Logo1</button>
        <button className="nav-btn" alt="Logo 2">Logo2</button>
        <button className="nav-btn" alt="Logo 3">Logo3</button>
        <button className="nav-btn" alt="Logo 4">Logo4</button>
      </div>
       <div className="navbar-profile">
        <img src="/guangdang.jpg" alt="Profile" className="profile-img" />
      </div>
    </div>
  );
};

export default NavBar;
