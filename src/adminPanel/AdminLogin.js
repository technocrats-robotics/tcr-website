import React from 'react'
import {useState} from 'react'

import "./CSS/Login.css"

function AdminLogin() {

    //state variables
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (userName && password) {
            //login 
        }
    }

    return (
        <div className="admin__login">
            <div className="admin__loginForm">
                <div>
                    <h1><u>Admin Login</u></h1>
                </div>
                <form class="ui container" onSubmit={handleFormSubmit}>
                    <div class="field">
                        <div class="ui fluid icon input">
                            <input type="text" placeholder="Username *" onChange={(event) => setUsername(event.target.value)} required />
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui fluid icon input">
                            <input type="password" placeholder="Password *" onChange={(event) => setPassword(event.target.value)} required />
                        </div>
                    </div>
                    <div class="field">
                        <button class="ui secondary button" type="submit">Login</button>
                    </div> 
                </form>
            </div>
        </div>
    )
}

export default AdminLogin