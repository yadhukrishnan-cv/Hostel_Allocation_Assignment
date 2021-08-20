import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import User from "./components/User";
import Welcome from "./components/Welcome";
import Hostelchoose from "./components/Hostelchoose";
import FloorSelection from "./components/FloorSelection";
import Success from "./components/Success";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};

const Routes = () => {
  const [user, setUser] = useState(false);

  const [existingData, setExistingData] = useState(null);

  useEffect(() => {
    const authObserver = firebase
      .auth()
      .onAuthStateChanged((user) => setUser(!!user));

    return () => authObserver();
  }, []);

  useEffect(() => {
    if (!!user) {
      const checkPreviousData = () => {
        let data = localStorage.getItem(firebase.auth().currentUser.email);
        if (data === null) {
          setExistingData(null);
        } else {
          let obj = JSON.parse(data);
          setExistingData(() => {
            return { ...obj };
          });
        }
      };

      checkPreviousData();
    }
  }, [user]);

  if (!user) {
    return (
      <div className="App">
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  } else {
    if (!!existingData) {
      return <User {...existingData} />;
    } else {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/user" component={User} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/chooseHostel" component={Hostelchoose} />
            <Route exact path="/chooseFloor" component={FloorSelection} />
            <Route exact path="/success" component={Success} />
          </Switch>
        </Router>
      );
    }
  }
};

export default Routes;
