import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import img from "../Images/Products/product1.png";
import "./style/ProductDetails.css";
import { useLocation } from "react-router-dom";
import { Card } from "./Card";

function ProductDetails() {
  const petProducts = [
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
  const [selectedSize, setSelectedSize] = useState("");
  const location = useLocation();
  const product = location.state;

  const handleSelection = (size) => {
    setSelectedSize(size);
  };

  const handleAddCart = (event) => {
    event.preventDefault();
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }
    const quantity = document.getElementById("quantity").value;
    console.log({ product, size: selectedSize, quantity });
    alert("Product added to cart successfully!");
  };

  return (
    <>
      <NavBar />
      <div style={{ padding: "3rem" }}>
        <h1>Product Details</h1>
        <div className="details-container">
          <div>
            <img src={product.image || img} alt="Product" />
          </div>
          <div className="details">
            <form onSubmit={handleAddCart}>
              <h1>{product.name}</h1>
              <h2>{product.price}</h2>
              <p>{product.description}</p>
              <label htmlFor="">Size:</label>
              <div className="radio-boxes">
                {["Small", "Mid", "Large"].map((size) => (
                  <div
                    key={size}
                    className={`box ${selectedSize === size ? "selected" : ""}`}
                    onClick={() => handleSelection(size)}
                    aria-label={`${size} Size`}
                  >
                    {size}
                  </div>
                ))}
              </div>
              <div>
                <label htmlFor="quantity">Quantity:</label>
                <select name="quantity" id="quantity">
                  {[1, 2, 3].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <button type="submit" className="add" onClick={handleAddCart}>
                  Add To Cart
                </button>
                <button type="submit" className="buy">
                  Buy Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <hr />
      <div style={{ padding: "3rem" }}>
        <h2>Similar Products</h2>
        <div className="similar-products">
          {petProducts.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;
