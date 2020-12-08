import React,{useState} from 'react'
import {Transition} from 'semantic-ui-react'

function Success() {

    const[display,toggleDisplay]=useState(false);
    const[success,setSuccess]=useState("Success !!");

    const item=()=>{
        return(
            <div>
                <Transition.Group animation="fade up" duration="700">
                    <div className="ui success message">
                        <div className="header">
                            {success}
                        </div>
                    </div>  
                </Transition.Group>           
            </div>
        )
    }
    
    return [
        (display)?item():null,
        (message)=>{
            setSuccess(message);
            toggleDisplay(true);  // show the message 
            setTimeout(()=>{      // toggle the state after 3 sec., which disappers the success
                toggleDisplay(false);
            },3000);
        }
    ]
}

export default Success
