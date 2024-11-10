import React from "react";
import NavBar from "./NavBar";
import "./style/Home.css";
import bgImg from "../Images/home-page-image.png";
import paw from "../Images/paws.png";
import { Card } from "./Card";
import aboutimg1 from "../Images/about-img1.jpg";
import aboutimg2 from "../Images/about-img2.jpg";

const Home = () => {
  return (
    <>
      <NavBar />

      <div className="home-top">
        <div className="center-text">
          <div className="headline">
            Buy Something Pawsome{" "}
            <img style={{ height: "6rem" }} src={paw} alt="" />
          </div>
          <img className="home-top-img" src={bgImg} alt="" />
        </div>
      </div>

      <div className="highlights">
        <h1>Highlights</h1>
        <div className="products">
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <hr />
      <div className="subscribe">
        <div className="subscribe-heading">
          Subscribe to our newsletter{" "}
          <img style={{ height: "2rem" }} src={paw} alt="" />
        </div>
        <div>
          <input type="text" placeholder="vaishalinile@gmail.com" />
          <button>Subscribe</button>
        </div>
      </div>
      <hr />

      <div className="updates">
        <h1>Latest Updates</h1>
        <div className="products">
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className="about">
        <h1>About Us</h1>
        <p>
          <img style={{ height: "2rem" }} src={paw} alt="" />t is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.{" "}
          <img style={{ height: "2rem" }} src={paw} alt="" />
        </p>
        <div className="about-img">
          <img style={{ height: "15rem" }} src={aboutimg1} alt="" />
          <img style={{ height: "20rem" }} src={aboutimg2} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
