import React, { useEffect, useState } from "react";
import "./style/Profile.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { networkRequest } from "../utils/networkRequest";
import { apiAuth } from "../utils/url";

const Profile = () => {
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    // Redirect if userId is missing
    if (!userId) {
      setRedirect(true);
      return;
    }

    // Fetch data (user, orders, products)
    const fetchData = async () => {
      try {
        // Fetch User Data
        await networkRequest(`${apiAuth.getUser}/${userId}`, (res) =>
          setUser(res)
        );

        // Fetch Orders
        await networkRequest(`${apiAuth.getOrders}/${userId}`, (res) =>
          setOrders(res.orders)
        );

        // Fetch Products
        await networkRequest(`${apiAuth.getProducts}`, (res) => {
          setProducts(res);
          console.log(res);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]);

  // Redirect if necessary
  if (redirect) {
    window.location.href = "/login";
    return null;
  }

  // Loading state
  if (!user || Object.keys(user).length === 0) {
    return <p>Loading user data...</p>;
  }

  const handleEditDetails = () =>
    alert("Edit Details functionality coming soon!");
  const handleChangePassword = () =>
    alert("Change Password functionality coming soon!");
  const handleLogout = () => {
    localStorage.removeItem("userId");
    window.location.href = "/login";
  };

  return (
    <>
      <NavBar />
      <div className="profile-page">
        <h1>My Profile</h1>

        {/* User Information */}
        <section className="user-info">
          <h2>Personal Details</h2>
          <div className="info-item">
            <strong>Name:</strong> {user.name}
          </div>
          <div className="info-item">
            <strong>Email:</strong> {user.email}
          </div>
          <div className="info-item">
            <strong>Phone:</strong> {user.phone}
          </div>
          <div className="info-item">
            <strong>Address:</strong> {user.address}
          </div>
          <button className="edit-btn" onClick={handleEditDetails}>
            Edit Details
          </button>
        </section>
        <hr />

        {/* Order History */}
        <section className="order-history">
          <h2>Order History</h2>
          {orders.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Products</th>
                  <th>Date of Delivery</th>
                  <th>Status</th>
                  <th>Total Amount</th>
                  <th>Payment Method</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>
                      {order.products &&
                        order.products.map((productItem) => {
                          const product = products?.find(
                            (p) => p._id === productItem.productId
                          );
                          return product ? (
                            <span key={productItem.productId}>
                              {product.name},{" "}
                            </span>
                          ) : (
                            <span key={productItem.productId}>
                              Product Not Found
                            </span>
                          );
                        })}
                    </td>
                    <td>{order.dateOfDelivery}</td>
                    <td>{order.status}</td>
                    <td>{order.totalAmount}</td>
                    <td>{order.paymentMethod}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No orders found!</p>
          )}
        </section>

        <hr />

        {/* Account Settings */}
        <section className="account-settings">
          <h2>Account Settings</h2>
          <button className="settings-btn" onClick={handleChangePassword}>
            Change Password
          </button>
          <button className="settings-btn" onClick={handleLogout}>
            Log Out
          </button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
