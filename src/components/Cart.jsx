import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./style/Cart.css";
import { useNavigate } from "react-router-dom";
import { networkRequest } from "../utils/networkRequest";
import { apiAuth } from "../utils/url";

const Cart = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchCart = async () => {
      await networkRequest(`${apiAuth.getCart}/${userId}`, (res) => {
        if (res.cart && res.cart.products) {
          getAdditionalProductData(res.cart.products);
        } else {
          console.error("No cart products found");
        }
      });
    };
    fetchCart();
  }, [userId]);

  const getAdditionalProductData = async (pr) => {
    try {
      const updatedProducts = await Promise.all(
        pr.map(async (product) => {
          const res = await new Promise((resolve, reject) => {
            networkRequest(
              `${apiAuth.getProduct}/${product.productId}`,
              (res) => {
                if (res) {
                  resolve({
                    ...product,
                    name: res.name,
                    price: res.price,
                    image: res.image,
                  });
                } else {
                  reject("Error fetching product data");
                }
              }
            );
          });
          return res;
        })
      );
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error in fetching product details:", error);
    }
  };

  const handleRemove = (id) => {
    console.log("Remove item from cart");
    const newProducts = products.filter((pr) => pr.productId !== id);
    setProducts(newProducts);
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: products });
  };

  return (
    <>
      <NavBar />
      <div className="cart">
        <h1>Your Cart</h1>
        <div>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Size</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.productId}>
                  <td className="cart-product">
                    <img src={product.image} alt={product.name} />
                    <div>
                      <h2>{product.name}</h2>
                      <p>({product.productId})</p>
                    </div>
                  </td>
                  <td>{product.price}</td>
                  <td>L</td>
                  <td>{product.quantity}</td>
                  <td>
                    <button
                      className="remove-from-cart"
                      onClick={() => {
                        handleRemove(product.productId);
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className="total"
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ul>
              <li>Discount</li>
              <li>Delivery</li>
            </ul>
            <ul>
              <li>$0.00</li>
              <li>$20.00</li>
            </ul>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ul>
              <li>Subtotal</li>
              <li>Total</li>
            </ul>
            <ul>
              <li>$260.00</li>
              <li>$280.00</li>
            </ul>
          </div>
        </div>

        <div className="checkout-div">
          <button className="checkout" onClick={handleCheckout}>
            Checkout
          </button>
          <button className="cancel">Cancel</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
