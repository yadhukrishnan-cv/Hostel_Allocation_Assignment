import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import firebase from "firebase";
import Header from "./Header";

const FloorSelection = (props) => {
  let hostelBlock = props.location.state.data;

  const [roomNumber, setRoomNumber] = useState("");

  const [tester, setTester] = useState(false);

  const history = useHistory();

  const handleSelection = (e) => {
    setRoomNumber(e.target.value);

    if (tester === false) {
      e.target.style.backgroundColor = "gray";
    } else {
      e.target.style.backgroundColor = "#9bd79b";
    }
    setTester(!tester);
  };
  let hostelData = {
    block: hostelBlock,
    roomNo: roomNumber,
    name: firebase.auth().currentUser.displayName
  };
  let email = firebase.auth().currentUser.email;
  localStorage.setItem(email, JSON.stringify(hostelData));

  const handleBooking = () => {
    history.push({
      pathname: "/success",
      state: { hostel: hostelBlock, room: roomNumber }
    });
  };

  return (
    <div className="floors-select">
      <Header />
      <h1>Choose a Floor</h1>
      <select name="floor" id="floor">
        <option value="floor1">floor 1</option>
        <option value="floor2">floor 2</option>
        <option value="floor3">floor 3</option>
        <option value="floor4">floor 4</option>
        <option value="floor5">floor 5</option>
      </select>

      <section className="floors">
        <div className="row">
          <button onClick={handleSelection} value="1">
            1
          </button>
          <button onClick={handleSelection} value="2">
            2
          </button>
          <button onClick={handleSelection} value="3">
            3
          </button>
          <button onClick={handleSelection} value="4">
            4
          </button>
        </div>
        <div className="row">
          <button id="btn-10" onClick={handleSelection} value="10">
            10
          </button>
          <button onClick={handleSelection} value="5">
            5
          </button>
        </div>
        <div className="row">
          <button onClick={handleSelection} value="9">
            9
          </button>
          <button onClick={handleSelection} value="8">
            8
          </button>
          <button onClick={handleSelection} value="7">
            7
          </button>
          <button onClick={handleSelection} value="6">
            6
          </button>
        </div>
      </section>

      {tester ? (
        <button className="book-btn" onClick={handleBooking}>
          {" "}
          Book Room
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default FloorSelection;
