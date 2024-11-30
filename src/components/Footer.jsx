import React from "react";
import "./style/Footer.css";
import logo from "../Images/Logo/1.png";
import insta from "../Images/icons/instagram-logo.png";
import tweet from "../Images/icons/twitter.png";
import facebook from "../Images/icons/facebook.png";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="sub-footer">
        <div className="logo-socials">
          <img className="logo" src={logo} alt="" />
          <ul>
            <li>
              <img className="socials" src={insta} alt="" />
            </li>
            <li>
              <img className="socials" src={tweet} alt="" />
            </li>
            <li>
              <img className="socials" src={facebook} alt="" />
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Blog</li>
            <li>FAQ's</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms And Conditions</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Rope Leads</li>
            <li>Rope Collar</li>
            <li>Collar Tags</li>
            <li>Cable Knits</li>
            <li>Dog Toys</li>
          </ul>
        </div>
        <div className="mail-form">
          <h2>Sign Up For Our Mailing List</h2>
          <form action="" className="send-mail-from">
            <input type="email" placeholder="Enter Your Email" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <p style={{ padding: "0.5rem 5rem", color: "gray" }}>
        Developed By Vaishali Nile &copy; Copyright 2024
      </p>
    </div>
  );
};

export default Footer;
