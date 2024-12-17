import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Card } from "./Card";
import "./style/Products.css";
import Footer from "./Footer";
import { networkRequest } from "../utils/networkRequest";
import { apiAuth } from "../utils/url";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await networkRequest(apiAuth.getProducts, (res) => {
          console.log(res);
          setProducts(res);
        });
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <NavBar />
      <div className="products-container">
        <h1>Our Products</h1>
        <div className="product-grid">
          {products.map((product) => {
            return <Card key={product._id} product={product} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
