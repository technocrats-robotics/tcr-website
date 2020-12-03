import React,{useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import AdminLogin from "./AdminLogin"
import Navigation from "./Navigation"
import MembersPanel from './MembersPanel';
import AddMembers from './AddMembers';
import SendMails from './SendMails';
import MakeAnnouncement from './MakeAnnouncements'


// firebase auth
import {auth} from "../services/google-firebase/setup"

//CSS
import "./CSS/Body.css"


function AdminPanel() {

    const[User,setUser]=useState(null);

    auth.onAuthStateChanged((user) => {
        if (user) {
          console.log(user);
          setUser(user);
        } else {
          console.log("User Is not logged In");
          setUser(user);
        }
    });

    const loggedIn = () => {
        return (
            <div className="admin__panel">
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
            </div>
        )
    }

    const logIn = () => {
        return <AdminLogin />
    }

    return (
        <Router>
            {(!User) ? logIn() : loggedIn()}
        </Router>
    )
}

export default AdminPanel
