import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import AdminLogin from "./AdminLogin"
import Navigation from "./Navigation"
import MembersPanel from './MembersPanel';
import AddMembers from './AddMembers';
import SendMails from './SendMails';
import MakeAnnouncement from './MakeAnnouncements'




//CSS
import "./CSS/Body.css"

function adminPanel() {

    const user = null // get this from context api

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
            {(!user) ? logIn() : loggedIn()}
        </Router>
    )
}

export default adminPanel
