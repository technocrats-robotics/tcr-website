import React,{useContext,useState,useEffect} from 'react'

import {GlobalUser} from "./UserPanel"

//db from local firebase setup
import {db} from "../services/google-firebase/setup"

function MyPosts() {
    //uid from context
    const user=useContext(GlobalUser);
    //after fetching user's information from firestore
    const[User,setUser]=useState(false);

    useEffect(() => {
        db.collection('members').doc(user)
        .onSnapshot(function(doc) {
        setUser(doc.data());    
    })},[user]);

    return (
        <div>
        {
            (User && User.blogAccess)?(
                <div>Success</div>
            ):(
                <h1>Access Denied!!</h1>
            )
        }
        </div>
    )
}

export default MyPosts
