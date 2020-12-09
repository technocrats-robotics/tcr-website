import React from 'react'
import {useState} from 'react'

import "./CSS/Login.css"

import { admin_auth } from "../services/google-firebase/setup"
import { admin_email } from '../constants'

//loading screen hook
import FullPageLoader from "../components/LoadingScreen/FullPageLoader"

//waring message hook 
import Warning from "../components/Messages/Warning" //(autmatically disappers after 3000 ms)

function AdminLogin() {
    //state variables
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loadingScreen,showLoadingScreen,hideLoadingScreen] = FullPageLoader();
    const [warning,showWarning] = Warning();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // If username & password not null
        if (userName && password) {
            // If username is NOT equal to admin_email
            showLoadingScreen();
            if(userName !== admin_email){
                showWarning('Try hacking your college websites!');
                event.target.reset()
                hideLoadingScreen();
                return;
            }
            admin_auth.signInWithEmailAndPassword(userName, password)
            .then((user) => {
                console.log("User Signed In");
                hideLoadingScreen();
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              showWarning('Invalid Credentials!');
              hideLoadingScreen();
              console.log("Error Code",errorCode);
              console.log("Error Message",errorMessage);
            });
        }
        event.target.reset();
    }

    return (
        <div className="admin__login">
            <div className="admin__loginForm">
                {warning}
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
            {loadingScreen}
        </div>
    )
}

export default AdminLogin;