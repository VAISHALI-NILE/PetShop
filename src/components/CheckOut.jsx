import React, { useEffect, useState } from "react";
import "./style/CheckOut.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { networkRequest } from "../utils/networkRequest";
import { apiAuth } from "../utils/url";
import Swal from "sweetalert2";

function CheckOut() {
  const location = useLocation();
  const [productsRow, setProductsRow] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [user, setUser] = useState();
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [address2, setAddress2] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zip, setZip] = useState();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUser = async () => {
      await networkRequest(`${apiAuth.getUser}/${userId}`, (res) => {
        setUser(res);
      });
    };
    fetchUser();
  }, [userId]);

  useEffect(() => {
    if (location.state?.product) {
      setProductsRow([location.state.product]); // Assuming location.state.product is a single product
    } else {
      setProductsRow(location.state); // Assuming location.state is an array of products
    }
  }, [location.state]);

  useEffect(() => {
    // Calculate total cost after products are updated
    calculateTotal(productsRow);
  }, [productsRow]); // Run every time products change

  const calculateTotal = (productsRow) => {
    // Calculate total using reduce to sum the price of all products
    const total = productsRow.reduce(
      (acc, product) => acc + parseFloat(product.price),
      0
    );
    setTotalAmount(total + 20); // Add shipping cost of $20
  };

  const handlePlaceOrder = async () => {
    const address = address2 + " " + city + " " + state + " " + zip;

    const products = productsRow.map((product) => ({
      productId: product.productId,
      quantity: product.quantity,
      size: product.size,
    }));
    await networkRequest(
      apiAuth.createOrder,
      (res) => {
        console.log(res);
        Swal.fire({
          title: "Order Placed Successfully!",
          text: `Your order has been placed with a total of $${totalAmount}. Thank you for shopping with us!`,
          icon: "success",
          confirmButtonText: "OK",
        });
        setProductsRow([]);
        navigate(-1);
      },
      "post",
      { userId, products, totalAmount, address, paymentMethod }
    );
  };
  return (
    <>
      <NavBar />
      <div className="checkout-page">
        <form className="checkout-form">
          {user ? (
            <div className="user-data">
              <h2>Personal Details</h2>
              <h3 className="info-item">
                <strong>Name:</strong> {user.name}
              </h3>
              <h3 className="info-item">
                <strong>Email:</strong> {user.email}
              </h3>
              <h3 className="info-item">
                <strong>Phone:</strong> {user.phone}
              </h3>
              <button className="update-btn">Update Details</button>
            </div>
          ) : (
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
          )}
          <hr />
          <div>
            <h2>Address</h2>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
              required
            />
            <br />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <br />
            <select
              name="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            >
              <option value="MH">Maharashtra</option>
              <option value="GOA">Goa</option>
              <option value="DH">Delhi</option>
            </select>
            <br />
            <input
              type="text"
              name="zip"
              placeholder="Zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              required
            />
            <br />
          </div>
          <hr />
          <div>
            <h2>Payment Method</h2>
            <select
              name="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="cash">Cash</option>
              <option value="upi">UPI</option>
              <option value="card">Card</option>
            </select>
          </div>
        </form>

        <div className="cart-summary">
          <h2>Cart Summary</h2>
          {productsRow.map((product) => (
            <div className="cart" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p>Price: {product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Size: {product.size}</p>
              </div>
              <button>X</button>
            </div>
          ))}
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ul>
              <li>Shipping Cost</li>
              <li>Total Cost</li>
            </ul>
            <ul>
              <li>$20.00</li>
              <li>${totalAmount}</li> {/* Display the calculated total */}
            </ul>
          </div>
          <button className="place-order" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CheckOut;
