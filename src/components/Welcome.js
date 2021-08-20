import React from "react";
import girl from "../images/girl.jpg";
import boy from "../images/boy.jpg";
import { useHistory } from "react-router";

import Header from "./Header";

const Welcome = () => {
  const history = useHistory();

  const handleCard1 = () => {
    history.push({
      pathname: "/chooseHostel",
      state: { data: "girl" }
    });
  };
  const handleCard2 = () => {
    history.push({
      pathname: "/chooseHostel",
      state: { data: "boy" }
    });
  };

  return (
    <div className="App">
      <Header />
      <h1>Choose Your Hostel</h1>
      <div className="cards">
        <div className="card1" onClick={handleCard1}>
          <div>
            <img src={girl} alt="Girl" />
            <p>Girls Hostel</p>
          </div>
        </div>
        <div className="card1" id="card2" onClick={handleCard2}>
          <div>
            <img src={boy} alt="boy" />
            <p>Boys Hostel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
