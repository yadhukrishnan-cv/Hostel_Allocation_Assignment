import React from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";

const Hostelchoose = (props) => {
  const history = useHistory();

  let category = "";

  if (props.location.state.data === "boy") {
    category = "B";
  } else {
    category = "G";
  }

  const handleHostel = (e) => {
    console.log(e.target.value);
    history.push({
      pathname: "/chooseFloor",
      state: { data: e.target.value }
    });
  };

  return (
    <div className="hostelChoosing">
      <Header />
      <h1>Choose Your Hostel</h1>
      <section className="hostels">
        <button
          className="hostel-btn"
          onClick={handleHostel}
          value={`${category}1`}
        >
          {`${category}1`}
        </button>
        <button
          className="hostel-btn"
          onClick={handleHostel}
          value={`${category}2`}
        >{`${category}2`}</button>
        <button
          className="hostel-btn"
          onClick={handleHostel}
          value={`${category}3`}
        >{`${category}3`}</button>
        <button
          className="hostel-btn"
          onClick={handleHostel}
          value={`${category}4`}
        >{`${category}4`}</button>
        <button
          className="hostel-btn"
          onClick={handleHostel}
          value={`${category}5`}
        >{`${category}5`}</button>
        <button
          className="hostel-btn"
          onClick={handleHostel}
          value={`${category}6`}
        >{`${category}6`}</button>
      </section>
    </div>
  );
};

export default Hostelchoose;
