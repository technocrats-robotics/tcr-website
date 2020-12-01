import React from 'react'
import {NavLink} from "react-router-dom"


//CSS
import "./CSS/UserPanelNav.css"

function UserPanelNav() {
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
            </div>
        </div>
    )
}

export default UserPanelNav
