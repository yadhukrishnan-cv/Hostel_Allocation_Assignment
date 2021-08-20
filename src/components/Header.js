import React from "react";
import firebase from "firebase";
const Header = () => {
  return (
    <div className="header">
      <p className="brandname">Newton School</p>
      <button className="logout" onClick={() => firebase.auth().signOut()}>
        Logout
      </button>
    </div>
  );
};

export default Header;
