import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style/Login.css";
import cat from "../Images/catimg2.png";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/user/login",
        formData
      );
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);
        console.log(res);
        navigate("/");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("Login failed. Please try again later.");
    }
  };

  return (
    <>
      <NavBar />
      <div className="login">
        <div className="login-container">
          <form className="login-form" onSubmit={handleLogin}>
            <h1>Login</h1>
            {error && <p className="error">{error}</p>}{" "}
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit">Login</button>
            <Link to="/sign-up">Don't have an Account? Sign up</Link>
            <img className="login-img" src={cat} alt="Cat" />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
