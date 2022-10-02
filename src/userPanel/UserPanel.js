import React, { createContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

//CSS
import "./CSS/body.css";

//auth from services/google-firebase
import { auth } from "../services/google-firebase/setup";

//components
import Navigation from "./Navigation";
import UserProfile from "./UserProfile";
import UserLogin from "./UserLogin";
import ChangePassword from "./ChangePassword";

const GlobalUser = createContext(null);

function UserPanel() {
  useEffect(() => {
    document.title = "Technocrats | User Panel";
  }, []);

  const [User, setUser] = useState(null);

  auth.onAuthStateChanged((user) => {
    if (user) {
      //Sign In
      setUser(user);
    } else {
      //Sign Out
      setUser(null);
    }
  });

  function logIn() {
    return (
      <div className="userLogIn">
        <UserLogin />
      </div>
    );
  }

  function loggedIn() {
    return (
      <div className="userProfileBox">
        <GlobalUser.Provider value={User.uid}>
          <Router>
            <Navigation />
            <Switch>
              <Route exact path="/userPanel">
                <UserProfile />
              </Route>
              <Route exact path="/userPanel/passwordReset">
                <ChangePassword />
              </Route>
            </Switch>
          </Router>
        </GlobalUser.Provider>
      </div>
    );
  }

  return (
    <Router>
      <div className="userPanel__root">{!User ? logIn() : loggedIn()}</div>
    </Router>
  );
}

export { GlobalUser };
export default UserPanel;
