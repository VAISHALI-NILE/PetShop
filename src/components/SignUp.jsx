import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style/SignUp.css";
import cat from "../Images/sign-up-img.png";
import NavBar from "./NavBar";
import Footer from "./Footer";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    address: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Handle form submission
  const handleSignUp = async (event) => {
    event.preventDefault();

    // Check if password and confirmPassword match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      // Send the sign-up request
      const res = await axios.post("http://localhost:5000/user/sign-up", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.number,
        address: formData.address,
      });

      // On success, show success message and clear error
      setError(""); // Clear previous error
      alert("Sign up successful");
    } catch (error) {
      // If there's an error, display it
      setError("Error during sign-up. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="sign-up">
        <form className="sign-up-form" onSubmit={handleSignUp}>
          <h1>Sign Up</h1>

          {/* Display error message if any */}
          {error && <div className="error-message">{error}</div>}

          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            placeholder="Phone number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">Sign Up</button>

          <Link to="/login">Already have an Account? Login</Link>
        </form>
        <img className="sign-up-img" src={cat} alt="Sign Up Illustration" />
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
