import React, { useContext, useState, useEffect } from 'react'
import { GlobalUser } from "./UserPanel"


import { db } from "../services/google-firebase/setup"

//CSS
import "./CSS/UserProfile.css"

//success Message
import Success from '../components/Messages/Success'
import Warning from '../components/Messages/Success'

function UserProfile() {

    // global user
    const user = useContext(GlobalUser);

    useEffect(() => {
        // change title of document on loading page
        document.title = "User Panel | User Profile"
        
        //fetch details of current user from firestore
        db.collection('members').doc(user)
        .onSnapshot(function (doc) {
        setUserDetails(doc.data())
        })

    }, [user])
    
    // user details fetched from firestore
    const [userDetails, setUserDetails] = useState(null);

    // state variables for input fields
    const [dpLink, setDpLink] = useState(null);
    const [github, setGithub] = useState(null);
    const [instagram, setInstagram] = useState(null);
    const [linkedIn, setLinkedIn] = useState(null);
    const [experience, setExperience] = useState(null);
    const [misc, setMisc] = useState(null);

    //message hooks
    const [success, showSuccess] = Success();
    const [warning, showWarning] = Warning(); 

    const handleSubmit = (event) => {
        event.preventDefault();
        // update given field of member with given id to newValue

        /* if the current field is changed then take the updated value else the 
        * corresponding state varible should be null so take value already available in database.  
        */

        db.collection('members').doc(user).update(
            { dpLink: dpLink || userDetails.dpLink, 
            social_media: { github: github || userDetails.social_media.github, 
            instagram: instagram || userDetails.social_media.instagram,
            linkedIn: linkedIn || userDetails.social_media.linkedIn }, 
            about: { experience: experience || userDetails.about.experience, 
            misc: misc || userDetails.about.misc } }).then(

            // display success message 
            showSuccess("Your Profile is updated Successfully!!"),
        ).catch((error) => {
            // display error message
            showWarning("Something went wrong!! Please try Again..")
        })
    }


    const defaultDpLink = 'https://wordsmith.org/words/images/avatar2_large.png';

    return (
        <div className="userProfile">

            {
                (userDetails) ? (
                    <div className="ui internally celled grid">
                        <div className="row">
                            <div className="three wide column">
                                <p>Display Picture</p>
                            </div>
                            <div className="thirteen wide column">
                                Fields ( Contact Admin if there's any discrepancy in first 4 fields )
                        </div>
                        </div>
                        <div className="row">
                            <div className="three wide column">
                                <div className="dpBox">
                                    <img className="medium ui image" src={userDetails.dpLink || defaultDpLink} />
                                </div>
                                <div className="inputBox">
                                    <h3><b><u>Name:</u></b> {userDetails.name}</h3>
                                </div>
                            </div>
                            <div className="thirteen wide column">
                                <div className="inputBox">
                                    <div className="ui fluid disabled labeled input">
                                        <div className="ui label">
                                            Registered Email
                                    </div>
                                        <input type="text" value={userDetails.registeredEmail} />
                                    </div>
                                </div>
                                <div className="inputBox">

                                    <div className="ui fluid disabled labeled input">
                                        <div className="ui label">
                                            Current Role
                                    </div>
                                        <input type="text" value={userDetails.role} />
                                    </div>
                                </div>
                                <div className="inputBox">

                                    <div className="ui fluid disabled labeled input">
                                        <div className="ui label">
                                            Year of Joining
                                    </div>
                                        <input type="text" value={userDetails.yearOfJoining} />
                                    </div>
                                </div>
                                <div className="inputBox">

                                    <div className="ui fluid disabled labeled input">
                                        <div className="ui label">
                                            Department
                                    </div>
                                        <input type="text" value={userDetails.branch} />
                                    </div>
                                </div>
                                <div className="inputBox">

                                    <div className="ui fluid disabled labeled input">
                                        <div className="ui label">
                                            Blog Access
                                    </div>
                                        <input type="text" value={(userDetails.blogAccess) ? ("Yes") : ("No")} />
                                    </div>
                                </div>
                                <div className="inputBox">

                                    <div className="ui fluid labeled input">
                                        <div className="ui label">
                                            DP Link
                                    </div>
                                        <input type="url" defaultValue={userDetails.dpLink} placeholder="Provide a valid link for your DP." onChange={(event) => setDpLink(event.target.value)} required />
                                    </div>
                                </div>
                                <div className="inputBox">
                                    <div className="ui fluid labeled input">
                                        <div className="ui label">
                                            Github Username
                                    </div>
                                        <input type="text" defaultValue={userDetails.social_media.github} placeholder="Github Username (optional)" onChange={(event) => setGithub(event.target.value)} />
                                    </div>
                                </div>
                                <div className="inputBox">

                                    <div className="ui fluid labeled input">
                                        <div className="ui label">
                                            Instagram Username
                                    </div>
                                        <input type="text" defaultValue={userDetails.social_media.instagram} placeholder="Instagram Username (optional)" onChange={(event) => setInstagram(event.target.value)} />
                                    </div>
                                </div>
                                <div className="inputBox">

                                    <div className="ui fluid labeled input">
                                        <div className="ui label">
                                            LinkedIn Username
                                    </div>
                                        <input type="text" defaultValue={userDetails.social_media.linkedIn} placeholder="LinkedIn Username (optional)" onChange={(event) => setLinkedIn(event.target.value)} />
                                    </div>
                                </div>
                                <div className="inputBox">

                                    <div className="ui fluid labeled input">
                                        <div className="ui label">
                                            Experience
                                    </div>
                                        <input defaultValue={userDetails.about.experience} placeholder="Achievement (if Any)" onChange={(event) => setExperience(event.target.value)} />
                                    </div>
                                </div>
                                <div className="inputBox">

                                    <div className="ui fluid labeled input">
                                        <div className="ui label">
                                            Miscellaneous
                                    </div>
                                        <input defaultValue={userDetails.about.misc} placeholder="Miscellaneous (if Any)" onChange={(event) => setMisc(event.target.value)} />
                                    </div>
                                </div>
                                <button type="submit" className="ui button" onClick={handleSubmit}>
                                    Submit
                                </button>
                                <div className="userProfile__message">{success}{warning}</div>
                            </div>
                        </div>

                    </div>
                ) : (<h1>Loading..</h1>)
            }
        </div>
    )
}

export default UserProfile
