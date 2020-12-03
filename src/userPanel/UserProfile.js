import React,{useContext} from 'react'
import {User} from "./UserLogin"

function UserProfile() {

    const user=useContext(User);

    return (
        <div>
            <h1>User Profile Page</h1>
            <p>Under Development !!</p>
            <p> Welcome {user} </p>
            {console.log("Your user is ",user)}
        </div>
    )
}

export default UserProfile
