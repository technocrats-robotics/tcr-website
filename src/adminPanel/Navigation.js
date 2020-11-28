import React from 'react'

//CSS
import "./CSS/Navigation.css"

function Navigation() {

    const handleSignOut=()=>{
        console.log("Clicked Admin Logout")
    }

    return (
        <div className="navBar">
            <div class="ui menu inverted">
                <img class="ui tiny image admin__tcrLogo" src="http://www.technocratsrobotics.in/images/logo21.png"></img>
                <div class="header item">
                   <h2>Technocrats Robotics</h2>
                </div>
                <a class="item" href="/adminPanel/addMembers"> Add Members</a>
                <a class="item" href="/adminPanel/manageMembers"> Manage Members </a>
                <a class="item" href="/adminPanel/sendBulkMails"> Send Bulk Emails </a>
                <a class="item" href="/adminPanel/makeAnnouncement"> Make Announcement </a>
                <div class="right menu">
                    <div class="item">
                        <div class="ui primary button" onClick={handleSignOut}>Sign Out</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation
