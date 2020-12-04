import React,{useEffect,useContext,useState} from 'react'
import {NavLink} from "react-router-dom"


//auth from services/google-firebase
import {auth} from "../services/google-firebase/setup"

// db from local firebase setup
import {db} from "../services/google-firebase/setup"

//GlobalUser from context
import {GlobalUser} from "./UserPanel"

//CSS
import "./CSS/UserPanelNav.css"

function UserPanelNav() {

    const user=useContext(GlobalUser);
    //User state variable for local use
    const[User,setUser]=useState(user);

    useEffect(() => {
        db.collection('members').doc(user)
        .onSnapshot(function(doc) {
        setUser(doc.data());    
    })},[user])

    const handleSignOut=()=>{
        auth.signOut().then(function() {
            return true;
        }).catch(function(error) {
            return false;
        });
    }

    return (
        <div className="ui massive menu">
            <div className="ui inverted secondary pointing menu">
            <img className="ui medium image" src="http://www.technocratsrobotics.in/images/technocrats.png" alt="logo"/>
                <div className="item">
                    <NavLink activeClassName="active_link" exact to='/userPanel' >@ My Profile</NavLink>
                </div>
                {
                    User && User.blogAccess &&( 
                            <div className="item">
                                <NavLink activeClassName="active_link" exact to='/userPanel/myPosts' > $ My Posts</NavLink>
                            </div>
                    ) 
                }
                {
                    User && User.blogAccess && (
                            <div className="item">
                                <NavLink activeClassName="active_link" exact to='/userPanel/writePost' > ++ New Post</NavLink>
                            </div>
                    )
                }
                <div className="right menu">
                    <div className="item">
                        <div className="ui primary button" onClick={handleSignOut}>Sign Out</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPanelNav
