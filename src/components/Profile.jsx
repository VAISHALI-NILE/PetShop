import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Profile = () => {
  return (
    <>
      <NavBar />
      <div>
        <div>Hello , User</div>
        <div className="profile-list"></div>
        <div></div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
