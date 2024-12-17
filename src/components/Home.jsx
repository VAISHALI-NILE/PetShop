import React from "react";
import NavBar from "./NavBar";
import "./style/Home.css";
import bgImg from "../Images/home-page-image.png";
import paw from "../Images/paws.png";
import { Card } from "./Card";
import aboutimg1 from "../Images/about-img1.jpg";
import aboutimg2 from "../Images/about-img2.jpg";
import Footer from "./Footer";

const Home = () => {
  const petProducts1 = [
    {
      id: 1,
      name: "Dog Collar",
      extraInfo: "(Adjustable, Reflective)",
      price: "$12.00",
      description:
        "Durable and adjustable dog collar with reflective straps for safety.",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQoLYqlxBGkL9FFYynKYWKr0sEVDnnKj3tuQ5GVTpmQQjq8pedDq0ttrdjfSXvkGRu4ZTbLN9x6OJdeWpZo-wH1FeAbeSREEj5B5vqZmfQ5aMptAvi-S7MStA&usqp=CAE",
    },
    {
      id: 2,
      name: "Cat Scratching Post",
      extraInfo: "(Sisal Rope, Sturdy Base)",
      price: "$25.00",
      description:
        "Sturdy scratching post for cats, made with high-quality sisal rope.",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTv58BdKq7JNxHNnr31zs0e-jjR7zGJauvLV0KYaxGZKJaLlZt6hm79CTc4e9qIgrD9ANuGfQaNtXbFSmHUJXapF9mciKTKxnuJ6rRMALfZzPgCWXqdjBeJ&usqp=CAE",
    },
    {
      id: 13,
      name: "Dog Sweater",
      extraInfo: "(Warm, Stylish)",
      price: "$20.00",
      description:
        "Warm and stylish sweater for dogs, available in various sizes.",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTkDs9M7zrrq_NKD_fND2eVLNZjKStnm3X90uPWeWaFl53eB2cdnP0hro56leTO6A7jARlgAP42ResvpxgC1--hjJxGHQLSxliKfYsRkr6iFedkxZZV4a1c&usqp=CAE",
    },
  ];

  const petProducts2 = [
    {
      id: 14,
      name: "Cat Tunnel Toy",
      extraInfo: "(Collapsible)",
      price: "$15.00",
      description:
        "Interactive and collapsible tunnel toy for cats to play in.",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQv8Yg-0QecTMEdLLRi5r7VT3-cbJbmA44S1XRLTIUtx0iesnVG81sh1XKdrTg2kE5Ea6we0I-X2VqEJRjssDBM0dRnHUKXFeRZspU1AsDpPXfm-MEdh1l2EA&usqp=CAE",
    },
    {
      id: 15,
      name: "Dog Training Pads",
      extraInfo: "(50 Pack, Leakproof)",
      price: "$30.00",
      description: "Leakproof training pads for puppies and senior dogs.",
      image:
        "https://qpets.in/cdn/shop/files/71U-DCesUyS_21e14c3d-a841-4d6d-8aef-90806464e8af.jpg?v=1732699999&width=1200",
    },
    {
      id: 16,
      name: "Pet Carrier Backpack",
      extraInfo: "(Ventilated, Comfortable)",
      price: "$50.00",
      description:
        "Comfortable and ventilated backpack for carrying small pets.",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT4PMWDOD-ekhiobQZEGFIrJ6I_42FVQ4P8U9j2Oo1Q0HQg5Q6gSdtvcQnZN-AjQrzZsAC8ccI80NsGpktk8yDHohu22kUaB3bav7sG4U52&usqp=CAE",
    },
  ];

  return (
    <>
      <NavBar />

      <div className="home-top">
        <div className="center-text">
          <div className="headline">
            Buy Something Pawsome <img className="paw-img" src={paw} alt="" />
          </div>
          <img className="home-top-img" src={bgImg} alt="" />
        </div>
      </div>

      <div className="highlights">
        <h1>Highlights</h1>
        <div className="products">
          {petProducts1.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
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
          {petProducts2.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
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
          <img className="aboutimg1" src={aboutimg1} alt="" />
          <img className="aboutimg2" src={aboutimg2} alt="" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
