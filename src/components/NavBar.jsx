import React from "react";
import "./style/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="left-nav">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </div>
        <div className="right-nav">
          <Link to="/cart">Cart</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
