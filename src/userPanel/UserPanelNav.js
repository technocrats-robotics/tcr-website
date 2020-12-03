import React from 'react'
import {NavLink} from "react-router-dom"


//auth from services/google-firebase
import {auth} from "../services/google-firebase/setup"

//CSS
import "./CSS/UserPanelNav.css"

function UserPanelNav() {

    const handleSignOut=()=>{
        auth.signOut().then(function() {
            return true;
        }).catch(function(error) {
            return false;
        });
    }

    return (
        <div class="ui massive menu">
            <div class="ui inverted secondary pointing menu">
            <img class="ui medium image" src="http://www.technocratsrobotics.in/images/technocrats.png" alt="logo"/>
                <div className="item">
                    <NavLink activeClassName="active_link" exact to='/userPanel' >@ My Profile</NavLink>
                </div>
                <div className="item">
                    <NavLink activeClassName="active_link" exact to='/userPanel/myPosts' > $ My Posts</NavLink>
                </div>
                <div className="item">
                    <NavLink activeClassName="active_link" exact to='/userPanel/writePost' > ++ New Post</NavLink>
                </div>
                <div class="right item">
                    <div class="item">
                        <div class="ui primary button" onClick={handleSignOut}>Sign Out</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPanelNav
