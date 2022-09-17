import React, { useState } from "react";

//auth from firebase setup
import { auth } from "../services/google-firebase/setup";

//loading screen
import FullPageLoader from "../components/LoadingScreen/FullPageLoader";

//waring message hook
import Warning from "../components/Messages/Warning"; //autmatically disappers the warning after 3000 ms

import "./CSS/UserLogin.css";

function UserLogin() {
  //state variables for login form
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loadingScreen, showLoadingScreen, hideLoadingScreen] =
    FullPageLoader();
  const [warning, showWarning] = Warning();

  // form submission handling
  function handleSubmission(event) {
    event.preventDefault();
    event.target.reset();
    showLoadingScreen();
    console.log("Submitting..");
    auth
      .signInWithEmailAndPassword(userName, password)
      .then((user) => {
        hideLoadingScreen();
        return true;
      })
      .catch((error) => {
        showWarning("Invalid Username or Password !!");
        hideLoadingScreen();
        return false;
      });
  }

  return (
    <div className="userLoginForm">
      <div className="userLoginform__root">
        <div className="userLogin__displayMessage">{warning}</div>
        <form className="ui form" onSubmit={handleSubmission} method="POST">
          <img
            className="ui medium centered image"
            src={process.env.PUBLIC_URL + "/TCRBanner.png"}
          />

          <div className="inputBox">
            <div className="ui fluid input">
              <input
                type="text"
                name="userName"
                placeholder="@tcr.in"
                onChange={(event) => setUserName(event.target.value)}
                required
              />
            </div>
          </div>
          <div className="inputBox">
            <div className="ui fluid input">
              <input
                type="password"
                name="Password"
                placeholder="********"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
          </div>

          <button className="ui button" type="submit">
            Login
          </button>
        </form>
        {loadingScreen}
      </div>
    </div>
  );
}

export default UserLogin;
