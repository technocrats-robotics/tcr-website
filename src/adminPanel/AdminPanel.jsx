import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import AdminLogin from "./AdminLogin";
import Navigation from "./Navigation";
import MembersPanel from "./MembersPanel";
import AddMembers from "./AddMembers";
import SendMails from "./SendMails";
import MakeAnnouncement from "./MakeAnnouncements";

// firebase auth
import { admin_auth } from "../services/google-firebase/setup";

//CSS
import "./CSS/Body.css";

function AdminPanel() {
  const [User, setUser] = useState(null);

  useEffect(() => {
    document.title = "Technocrats | Admin Panel";
  }, []);

  admin_auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  const loggedIn = () => {
    return (
      <div className="admin__panel">
        {User ? (
          <Router>
            <Navigation />
            <Switch>
              <Route exact path="/adminPanel">
                <MembersPanel />
              </Route>
              <Route exact path="/adminPanel/manageMembers">
                <MembersPanel />
              </Route>
              <Route exact path="/adminPanel/addMembers">
                <AddMembers />
              </Route>
              <Route exact path="/adminPanel/sendBulkMails">
                <SendMails />
              </Route>
              <Route exact path="/adminPanel/makeAnnouncement">
                <MakeAnnouncement />
              </Route>
            </Switch>
          </Router>
        ) : (
          <h1>Access Denied !!</h1>
        )}
      </div>
    );
  };

  const logIn = () => {
    return <AdminLogin />;
  };

  return (
    <Router>
      <div className="adminPanel__root">{!User ? logIn() : loggedIn()}</div>
    </Router>
  );
}

export default AdminPanel;
