import React,{useState} from 'react'
import "./CSS/changePassword.css"

//chnage password function
import {changePassword} from "../services/google-firebase/utilities"

//success message hook
import Success from '../components/Messages/Success'

//warning message hook
import Warning from '../components/Messages/Warning'

//loading screen hook
import FullPageLoader from '../components/LoadingScreen/FullPageLoader'

function ModalExampleBasic() {
    const [newPassword,setNewPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const [success,setSuccess]=Success();
    const [warning,setWarning]=Warning();
    const [loadingScreen,showLoadingScreen,hideLoadingScreen]=FullPageLoader();
    
    function validatePassword() {
        var regex=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/
        if(regex.test(newPassword)) { 
            if(newPassword!==confirmPassword)
                return 404
            return true
        }
        else return false;
    }

    async function handleSubmit(event){
        event.preventDefault();
        event.target.reset();
        showLoadingScreen();
        if(validatePassword()===true && await changePassword(newPassword)){
            setSuccess("Success !!")
        } else{
            setWarning("Try changing after logging in again !!")
        }
        hideLoadingScreen();
    }

    return (
        <div className="changePassword">
            {loadingScreen}
            <div className="changePassword__box">
                {success}
                {warning}
                <form onSubmit={handleSubmit}>
                    <div className="inputBox">
                        <div className="ui fluid input" data-tooltip="Must contain atleast 8 characters including one UPPERCASE,lowercase,numeric and a special character." data-variation="large" data-position="bottom left">
                            <input type="password"  placeholder="New Password" onChange={(event)=>setNewPassword(event.target.value)} />
                        </div>
                    </div>

                    <div className="inputBox">
                        <div className="ui fluid input">
                            <input type="password" placeholder="Confirm Password" onChange={(event)=>setConfirmPassword(event.target.value)}/>
                        </div>
                    </div>

                    <div className="inputBox">
                        <div className="changePassword__error">
                            {
                                (validatePassword()===false && newPassword!==null && confirmPassword!==null ?("Must contain atleast 8 characters including one UPPERCASE,lowercase,numeric and a special character."):(null))
                            }
                        </div>
                        <div className="changePassword__warning">
                            {
                                (validatePassword()===404 && confirmPassword!==null ?("New Password and Confirmation password do not match."):(null))
                            }
                        </div>
                        <div className="changePassword__success">
                            {
                                (validatePassword()===true?("Verified!! Click on Submit button to change your Password"):(null))
                            }
                        </div>
                    </div>

                    <button type="submit" className="ui button">
                        Submit
                    </button>
                </form>
                

            </div>
        </div>
    )
}

export default ModalExampleBasic