import React,{useState} from 'react'
import {Transition} from 'semantic-ui-react'

function Warning() {

    const[display,toggleDisplay]=useState(false);
    const[warning,setWarning]=useState("Something went Wrong !!");

    const item=()=>{
        return(
            <div>
                <Transition.Group animation="fade up" duration="700">
                    <div className="ui warning message">
                        <div className="header">
                            {warning}
                        </div>
                    </div>  
                </Transition.Group>           
            </div>
        )
    }
    
    return [
        (display)?item():null,
        (message)=>{
            setWarning(message);
            toggleDisplay(true);  // show the message 
            setTimeout(()=>{      // toggle the state after 3 sec., which disappers the warning
                toggleDisplay(false);
            },3000);
        }
    ]
}

export default Warning
