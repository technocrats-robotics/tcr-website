import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react'
//CSS
import "./CSS/body.css"


//components
import UserPanelNav from "./UserPanelNav"
import UserProfile from "./UserProfile";
import MyPosts from "./MyPosts";
import WritePost from "./WritePost";

function UserPanel() {
    const user = "Shivansh"; // get this from context api

    //state variables for login form
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    // form submission handling
    function handleSubmit(event) {
        event.preventDefault();
        console.log(userName);
        console.log(password);
    }

    function logIn() {
        return (
            <div className="userLogIn">
                <form className="ui form" onSubmit={handleSubmit} method="POST">
                    <img class="ui medium centered image" src="http://www.technocratsrobotics.in/images/technocrats.png" />
                    <div className="field">
                        <label>Username</label>
                        <input type="text" name="userName" placeholder="@tcr.in" onChange={(event) => setUserName(event.target.value)} required />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="Password" placeholder="********" onChange={(event) => setPassword(event.target.value)} required />
                    </div>
                    <button class="ui button" type="submit">Login</button>
                </form>

            </div>
        )
    }

    function loggedIn() {
        return (
            <div className="userProfileBox">
                <Router>
                    <UserPanelNav />
                    <Switch>
                        <Route exact path="/userPanel">
                            <UserProfile />
                        </Route>
                        <Route exact path="/userPanel/myPosts">
                            <MyPosts />
                        </Route>
                        <Route exact path="/userPanel/writePost">
                            <WritePost />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }


    return (
        <Router>
            {
                (!user) ? logIn() : loggedIn()
            }
        </Router>
    )
}

export default UserPanel
