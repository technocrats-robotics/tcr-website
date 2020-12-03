import React from 'react'
import { useState } from 'react'

// mail service (email,data) => email as string and data as object
import { sendEmail } from '../services/mail/sendEmail'

function AddMembers() {

    // dropdown menu parameters
    const Departments = ["Programming", "Electrical", "Mechanical", "Management"];
    let currentYear = new Date().getFullYear();
    const yearOfJoining = () => {
        let arr = []
        for (let i = currentYear; i >= 2013; i--) {
            arr.push(i);
        }
        return arr;
    }

    //state variables
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState(Departments[0]);
    const [yoj, setYoj] = useState(currentYear);


    //alert appears after form submission
    function showStatus(status) {
        alert(status);
    }


    //form submit handling
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (firstName && lastName && email && department && yoj) {

            // send credentials as object 
            let data={
                username:"shivansh@tcr.in", // pull this from create new user function
                password:"shivansh"         // pull this from create new user function 
            }
            
            if (sendEmail(email,data)) showStatus(`Credentials sent successfully to ${email}`);
            else showStatus("Some error occured please try again!! (maybe wrong email id)");
            
        } else {
            showStatus("Some mandatory information is missing!!");
        }
    }

    //component..
    return (
        <div className="admin__addMembers">
            <div className="admin__addMembersForm">
                <div>
                    <h1><u>Add New Member</u></h1>
                </div>
                <form class="ui container" onSubmit={handleFormSubmit}>
                    <div class="field">
                        <div class="ui fluid icon input">
                            <input type="text" placeholder="First Name *" onChange={(event) => setFirstName(event.target.value)} required />
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui fluid icon input">
                            <input type="text" placeholder="Last Name *" onChange={(event) => setLastName(event.target.value)} required />
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui fluid icon input">
                            <input type="text" placeholder="Email *" onChange={(event) => setEmail(event.target.value)} required />
                        </div>
                    </div>    
                        <div class="field">
                            <select class="ui fluid selection dropdown" onChange={(event) => setDepartment(event.target.value)} required>
                                {
                                    Departments.map((department) => {
                                        return <option value={department}>{department}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div class="field">
                            <select class="ui fluid selection dropdown" onChange={(event) => setYoj(event.target.value)} required>
                                {
                                    yearOfJoining().map((year) => {
                                        return <option value={year}>{year}</option>
                                    })
                                }
                            </select>
                        </div>
                       <div class="field">
                            <button class="ui secondary button" type="submit">Add</button>
                    </div> 
                </form>
            </div>
        </div>
    )
}

export default AddMembers
