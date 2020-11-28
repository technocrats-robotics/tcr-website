import React from 'react'
import { useState } from 'react'


import axios from "axios";

//generate profile_credentials
// import profile_credentials from ".../services/mail/messages/profile_credentials.js"

// // email service 
// import send_email from ".../services/mail/sendEmail.js"


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
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState(Departments[0]);
    const [yoj, setYoj] = useState(currentYear);

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        if(name&&email&&department&&yoj){
            console.log("Name ",name);
            console.log("Email ",email);
            console.log("Name ",department);
            console.log("Year Of Joining ",yoj);

            axios({
                method: 'post',
                url: 'https://tcr-mail-utility.herokuapp.com/',
                data: {
                  firstName: 'Fred',
                  lastName: 'Flintstone'
                }
              }).then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
            });

            //credentails generated email_content 
            // let email_content=profile_credentials(name,department,yoj)
        } else{
            console.log("Some mandatory information missing!!");
        }
    }

    return (
        <div className="admin__addMembers">
            <div className="admin__addMembersForm">
                <form onSubmit={handleFormSubmit}>
                    <div class="ui form">
                        <div class="two fields">
                            <div class="field">
                                <label>Name</label>
                                <input type="text" placeholder="First Name" onChange={(event) => setName(event.target.value)} required/>
                            </div>
                            <div class="field">
                                <label>Email</label>
                                <input type="text" placeholder="Email" onChange={(event) => setEmail(event.target.value)} required/>
                            </div>
                        </div>
                        <div class="two fields">
                            <div class="field">
                                <label>Department</label>
                                <select class="ui dropdown" onChange={(event) => setDepartment(event.target.value)} required>
                                    {
                                        Departments.map((department) => {
                                            return <option value={department}>{department}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div class="field">
                                <label>Year Of Joining</label>
                                <select class="ui dropdown" onChange={(event) => setYoj(event.target.value)} required>
                                    {
                                        yearOfJoining().map((year) => {
                                            return <option value={year}>{year}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <button class="ui secondary button" type="submit">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddMembers
