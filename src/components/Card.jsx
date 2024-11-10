import React from "react";
import "./style/Card.css";
import product from "../Images/Products/product1.png";
export const Card = () => {
  return (
    <div className="card">
      <div className="image-card">
        <img src={product} style={{ width: "100%", height: "100%" }} alt="" />
      </div>
      <div className="card-info">
        <h2>Product Name(extra info)</h2>
        <p className="price">$25.00</p>
        <p className="dis">Discription nsdvcsdh</p>
        <button className="card-btn">Shop Now</button>
      </div>
    </div>
  );
};
