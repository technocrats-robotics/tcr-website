import React from 'react'


//CSS
import "./CSS/UserPanelNav.css"

function UserPanelNav() {
    return (
        <div class="ui massive menu">
            <div class="ui inverted secondary pointing menu">
            <img class="ui medium image" src="http://www.technocratsrobotics.in/images/technocrats.png"></img>
                <a class="item">
                    @ My Profile
                </a>
                <a class="item">
                    $ My Posts
                </a>
                <a class="active item">
                    ++ New Post
                </a>
            </div>
        </div>
    )
}

export default UserPanelNav
