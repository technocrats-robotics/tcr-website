import React,{useState} from 'react'

//auth from firebase setup
import {auth} from "../services/google-firebase/setup"

//loading screen
import FullPageLoader from '../components/LoadingScreen/FullPageLoader'

//waring message hook 
import Warning from "../components/Messages/Warning" //autmatically disappers the warning after 3000 ms


function UserLogin() {

    //state variables for login form
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loadingScreen,showLoadingScreen,hideLoadingScreen] = FullPageLoader();
    const [warning,showWarning] = Warning();

     // form submission handling
    function handleSubmission(event) {
        event.preventDefault();
        event.target.reset();
        showLoadingScreen();
        console.log("Submitting..");
        auth.signInWithEmailAndPassword(userName, password)
        .then((user) => {
            hideLoadingScreen();
            return true;
        })
        .catch((error) => {
            showWarning("Invalid Username or Password !!");
            hideLoadingScreen();
            return false;
        });
    }

    return (
        <div>
            <div className="userLogin__displayMessage">
            {warning}
            </div>
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
            {loadingScreen}
        </div>
    )
}


export default UserLogin
