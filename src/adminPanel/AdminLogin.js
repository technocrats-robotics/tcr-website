import React from 'react'
import {useState} from 'react'

import "./CSS/Login.css"

import { admin_auth } from "../services/google-firebase/setup"
import { admin_email } from '../constants'

function AdminLogin() {
    //state variables
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // If username & password not null
        if (userName && password) {
            // If username is NOT equal to admin_email
            if(userName !== admin_email){
                console.log('Try hacking your college websites!');
                event.target.reset()
                return;
            }
            admin_auth.signInWithEmailAndPassword(userName, password)
            .then((user) => {
                console.log("User Signed In");
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log("Error Code",errorCode);
              console.log("Error Message",errorMessage);
            });
        }
        event.target.reset();
    }

    return (
        <div className="admin__login">
            <div className="admin__loginForm">
                <div>
                    <h1><u>Admin Login</u></h1>
                </div>
                <form className="ui container" onSubmit={handleFormSubmit}>
                    <div className="field">
                        <div className="ui fluid icon input">
                            <input type="text" placeholder="Username *" onChange={(event) => setUsername(event.target.value)} required />
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui fluid icon input">
                            <input type="password" placeholder="Password *" onChange={(event) => setPassword(event.target.value)} required />
                        </div>
                    </div>
                    <div className="field">
                        <button className="ui secondary button" type="submit">Login</button>
                    </div> 
                </form>
            </div>
        </div>
    )
}

export default AdminLogin;