import React,{useState} from 'react'

//auth from firebase setup
import {auth} from "../services/google-firebase/setup"

function UserLogin() {

    //state variables for login form
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

     // form submission handling
    function handleSubmission(event) {
        event.preventDefault();
        auth.signInWithEmailAndPassword(userName, password)
        .then((user) => {
            console.log("User Signed in ",user.user.uid);
          return true;
        })
        .catch((error) => {
          return false;
        });
    }

    return (
        <div>
            <form className="ui form" onSubmit={handleSubmission} method="POST">
                <img className="ui medium centered image" src="http://www.technocratsrobotics.in/images/technocrats.png" alt="tcr_logo" />
                <div className="field">
                    <label>Username</label>
                    <input type="text" name="userName" placeholder="@tcr.in" onChange={(event) => setUserName(event.target.value)} required />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" name="Password" placeholder="********" onChange={(event) => setPassword(event.target.value)} required />
                </div>
                <button className="ui button" type="submit">Login</button>
            </form>
        </div>
    )
}


export default UserLogin
