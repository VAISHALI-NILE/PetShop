import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./style/Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Dog Collar",
      extraInfo: "(Adjustable, Reflective)",
      price: "$12.00",
      quantity: 1,
      size: "L",
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
      quantity: 1,
      size: "L",
      description:
        "Sturdy scratching post for cats, made with high-quality sisal rope.",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTv58BdKq7JNxHNnr31zs0e-jjR7zGJauvLV0KYaxGZKJaLlZt6hm79CTc4e9qIgrD9ANuGfQaNtXbFSmHUJXapF9mciKTKxnuJ6rRMALfZzPgCWXqdjBeJ&usqp=CAE",
    },
    {
      id: 3,
      name: "Pet Bed",
      extraInfo: "(Soft, Washable)",
      price: "$40.00",
      quantity: 1,
      size: "L",
      description: "Comfortable and washable pet bed for dogs and cats.",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQUl-DUeg0QwUERsXDvdgosLgh2w-TsUot0BiM2zdujE3R-Qebzl26UorY9UmynvtbUBRNrrnQZT8vyjV9lfH1xMh6nnrd_B-HmzCLdkaXlft9V_0wpDN4hhMM&usqp=CAE",
    },
  ]);
  const handleRemove = (id) => {
    console.log("Remove item from cart");
    const newProducts = products.filter((pr) => {
      return pr.id !== id;
    });
    setProducts(newProducts);
  };
  const handleCheckout = () => {
    navigate("/checkout");
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
                <tr key={product.id}>
                  <td className="cart-product">
                    <img src={product.image} alt={product.name} />
                    <div>
                      <h2>{product.name}</h2>
                      <p>{product.extraInfo}</p>
                    </div>
                  </td>
                  <td>{product.price}</td>
                  <td>{product.size}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <button
                      className="remove-from-cart"
                      onClick={() => {
                        handleRemove(product.id);
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
