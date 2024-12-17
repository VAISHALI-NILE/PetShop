import React, { useEffect, useState } from "react";
import "./style/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setLoggedIn(true);
    }
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // This function will toggle the state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="nav-bar">
        <div className="left-nav">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </div>
        <div className="center">
          <i class="fas fa-search search-icon"></i>
          <input type="text" className="search" placeholder="Search" />
        </div>
        {loggedIn ? (
          <div className="right-nav">
            <Link to="/cart">Cart</Link>
            <Link to="/profile">Profile</Link>
          </div>
        ) : (
          <div className="right-nav">
            <Link to="/login">Log In</Link>
          </div>
        )}
      </div>
      <div className="toggle-navbar">
        <div className="top-of-toggle">
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
          <i class="fas fa-search search-icon"></i>
          <input type="text" className="search" placeholder="Search" />
        </div>
        <div className={`sub-nav ${isMenuOpen ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>

          {loggedIn ? (
            <>
              <Link to="/cart">Cart</Link>
              <Link to="/profile">Profile</Link>
            </>
          ) : (
            <Link to="/login">Log In</Link>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
