import React from "react";
import "./style/Card.css";
import img from "../Images/Products/product1.png";
import { useNavigate } from "react-router-dom";

export const Card = ({ product }) => {
  const navigate = useNavigate();
  const handleShopNow = () => {
    console.log(product);
    navigate("/product-details", { state: product });
  };

  return (
    <div className="card">
      <div className="image-card">
        <img
          src={product.image}
          style={{ width: "100%", height: "100%" }}
          alt=""
        />
      </div>
      <div className="card-info">
        <h2>{product.name}</h2>
        <p className="price">{product.price}</p>
        <p className="dis">{product.description}</p>
        <button className="card-btn" onClick={handleShopNow}>
          Shop Now
        </button>
      </div>
    </div>
  );
};
