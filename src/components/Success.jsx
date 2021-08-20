import React from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";

const Success = (props) => {
  const history = useHistory();

  const handleClose = () => {
    history.push({
      pathname: "/"
    });
  };

  return (
    <div className="modal-head">
      <Header />
      <div className="modal">
        <section className="booked">
          <h1>Success</h1>
          <p>Your room has been successfully booked</p>
        </section>
        <section className="booked-info">
          <h3>Your room details:</h3>
          <p>
            Hostel No. <span>{props.location.state.hostel}</span>
          </p>
          <p>
            Room No. <span>{props.location.state.room}</span>
          </p>
        </section>

        <button className="close-btn" onClick={handleClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Success;
