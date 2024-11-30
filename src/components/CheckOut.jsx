import React, { useState } from "react";
import "./style/CheckOut.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
function CheckOut() {
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
  return (
    <>
      <NavBar />
      <div className="checkout-page">
        <form className="checkout-form">
          <div>
            <h2>Personal Details</h2>

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />
            <br />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />
            <br />

            <input type="text" name="phone" placeholder="Phone" required />
            <br />

            <input type="email" name="email" placeholder="Email" required />
            <br />
          </div>
          <hr />
          <div>
            <h2>Address</h2>

            <input type="text" name="address" placeholder="Address" required />
            <br />
            <input type="text" name="city" placeholder="City" required />
            <br />

            <select name="state" required>
              <option value="MH">Maharashtra</option>
              <option value="GOA">Goa</option>
              <option value="DH">Delhi</option>
            </select>
            <br />
            <input type="text" name="zip" placeholder="Zip" required />
            <br />
          </div>
          <hr />
          <div>
            <h2>Payment Method</h2>
            <select name="paymentMethod" required>
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Cash">Cash</option>
            </select>
          </div>
        </form>
        <div className="cart-summary">
          <h2>Cart Summary</h2>
          {products.map((product) => {
            return (
              <div className="cart">
                <img src={product.image} alt="" />
                <div>
                  <h3>{product.name}</h3>
                  <p>Price: {product.price}</p>
                  <p>Quantity: {product.quantity}</p>
                  <p>Size: {product.size}</p>
                </div>
                <button>X</button>
              </div>
            );
          })}
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ul>
              <li>Shipping Cost</li>
              <li>Total Cost</li>
            </ul>
            <ul>
              <li>$20.00</li>
              <li>$280.00</li>
            </ul>
          </div>
          <button className="place-order">Place Order</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CheckOut;
