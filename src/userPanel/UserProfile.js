import React,{useContext,useState,useEffect} from 'react'
import {GlobalUser} from "./UserPanel"


import {db} from "../services/google-firebase/setup"

function UserProfile() {

    const user=useContext(GlobalUser);
    const[userDetails,setUserDetails]=useState(null);

    useEffect(() => {
        db.collection('members').doc(user)
        .onSnapshot(function(doc) {
        setUserDetails(doc.data());    
    })},[user])


    return (
        <div>
            <h1>User Profile Page</h1>
            <p>Under Development !!</p>
            <p> Welcome User : {userDetails && userDetails.name} </p>
        </div>
    )
}

export default UserProfile
