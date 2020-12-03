import React,{createContext} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react'

//CSS
import "./CSS/body.css"

//auth from services/google-firebase
import {auth} from "../services/google-firebase/setup"


//components
import UserPanelNav from "./UserPanelNav"
import UserProfile from "./UserProfile";
import UserLogin from "./UserLogin"
import MyPosts from "./MyPosts";
import WritePost from "./WritePost";

const GlobalUser=createContext(null);

function UserPanel() {

    const[User,setUser]=useState(null);
    
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
                <UserLogin/>
            </div>
        )
    }

    function loggedIn() {

        return (
                <div className="userProfileBox">
                    <GlobalUser.Provider value={User.uid}>
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
                    </GlobalUser.Provider>
                </div>
        )
    }

    return (
        <Router>
            {
                (!User) ? logIn() : loggedIn()
            }
        </Router>
    )
}

export {GlobalUser}
export default UserPanel