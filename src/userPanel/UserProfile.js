import React,{useContext,useState,useEffect} from 'react'
import {GlobalUser} from "./UserPanel"


import {db} from "../services/google-firebase/setup"

function UserProfile() {

    const user=useContext(GlobalUser);
    const[useDetails,setUserDetails]=useState(null);

    useEffect(() => {
        db.collection('members').doc(user)
        .onSnapshot(function(doc) {
        console.log("Current user: ", doc.data());
    
    })}, [])

    return (
        <div>
            <h1>User Profile Page</h1>
            <p>Under Development !!</p>
            <p> Welcome User id : {user} </p>
            {console.log("Your user is ",user)}
        </div>
    )
}

export default UserProfile
