import React from "react";
import Header from "./Header";

const User = (props) => {
  return (
    <div>
    <Header />
      <div className="welcome-page">
        <section className="booked">
          <h1>Welcome {props.name}</h1>
          <p>You have already booked a room</p>
        </section>
        <section className="booked-info">
          <h3>Your room details as Follows:</h3>
          <p>
            Hostel No. <span>{props.block}</span>
          </p>
          <p>
            Room No. <span>{props.roomNo}</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default User;
