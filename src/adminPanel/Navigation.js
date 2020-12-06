import React,{useContext} from 'react'
import {NavLink} from 'react-router-dom'
//CSS
import "./CSS/Navigation.css"

import {auth} from "../services/google-firebase/admin_setup"


function Navigation() {

    const handleSignOut=()=>{
        auth.signOut().then(function() {
            return true;
        }).catch(function(error) {
            return false;
        });
    }

    return (
        <div className="navBar">
            <div className="ui menu inverted">
                <img className="ui tiny image admin__tcrLogo" src="http://www.technocratsrobotics.in/images/logo21.png"></img>
                <div className="header item">
                   <h2>Technocrats Robotics</h2>
                </div>
                <NavLink exact className="nav item" to="/adminPanel/addMembers"> Add Members</NavLink>
                <NavLink exact className="nav item" to="/adminPanel/manageMembers"> Manage Members </NavLink>
                <NavLink exact className="nav item" to="/adminPanel/sendBulkMails">Send Emails </NavLink>
                <NavLink exact className="nav item" to="/adminPanel/makeAnnouncement">Make Announcement </NavLink>    
                <div className="right menu">
                    <div className="item">
                        <div> Welcome Admin !!</div>
                    </div>
                    <div className="item">
                        <div className="ui primary button" onClick={handleSignOut}>Sign Out</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;