import React, { useContext, useState, useEffect } from 'react'
import { GlobalUser } from "./UserPanel"
import { Icon } from 'semantic-ui-react'

import { db } from "../services/google-firebase/setup"

//CSS
import "./CSS/UserProfile.css"

//success Message
import Success from '../components/Messages/Success'
import Warning from '../components/Messages/Success'
import Member from '../services/google-firebase/models/members/member'

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
            {
                dpLink: dpLink || userDetails.dpLink,
                social_media: {
                    github: github || userDetails.social_media.github,
                    instagram: instagram || userDetails.social_media.instagram,
                    linkedIn: linkedIn || userDetails.social_media.linkedIn
                },
                about: {
                    experience: experience || userDetails.about.experience,
                    misc: misc || userDetails.about.misc
                }
            }).then(
                // display success message 
                showSuccess("Your Profile is updated Successfully!!"),
            ).catch((error) => {
                // display error message
                showWarning("Something went wrong!! Please try Again..")
            })
    }


    const defaultDpLink = 'https://wordsmith.org/words/images/avatar2_large.png';

    const roles = (yearly_roles) => {
        let currentRole = Member.getCurrentRole(yearly_roles);
        return (
            <p className="ui blue label" style={{ margin: "3px", width: "100px", textAlign: "center" }}>
                {currentRole[0]}<br></br>
                {currentRole[1]}
            </p>
        );
    }

    return (
        <div className="userProfile">

            {
                (userDetails) ? (
                    <div className="ui grid userProfile__display">
                        <div className="sixteen wide mobile sixteen wide tablet sixteen wide computer column">
                            <div className="dpBox">
                                <img className="medium ui circular image" src={userDetails.dpLink || defaultDpLink} alt={defaultDpLink} />
                            </div>

                            <div className="inputBox userProfile__displayText">
                                <h3>{userDetails.name}</h3>
                            </div>

                            <div className="display__roles">
                                {roles(userDetails.roles)}
                            </div>

                        </div>

                        <div className="sixteen wide mobile sixteen wide tablet sixteen wide computer column">

                            <div className="ui grid">
                                <div className="sixteen wide column">
                                    <div className="ui stackable two column grid">
                                        <div className="column">
                                            <div className="userProfile__fields">
                                                <div className="userProfile__label">Email: </div>
                                                <div className="userProfile__ans">{userDetails.registeredEmail}</div>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="userProfile__fields">
                                                <div className="userProfile__label">Department : </div>
                                                <div className="userProfile__ans">{userDetails.branch}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ui stackable two column grid">
                                        <div className="column">
                                            <div className="userProfile__fields">
                                                <div className="userProfile__label">Year Of Joining : </div>
                                                <div className="userProfile__ans">{userDetails.yearOfJoining}</div>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="userProfile__fields">
                                                <div className="userProfile__label">Blog Access : </div>
                                                <div className="userProfile__ans">{(userDetails.blogAccess) ? ("Yes") : ("No")} </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="inputBox">
                                        <div className="ui fluid labeled input">
                                            <div className="ui label">
                                                <Icon name="picture" size="large" />
                                            </div>
                                            <input type="url" defaultValue={userDetails.dpLink} placeholder="Provide a valid link for your DP." onChange={(event) => setDpLink(event.target.value)} required />
                                        </div>
                                    </div>

                                    <div className="userProfile__socialMedia">
                                    <div className="ui stackable three column grid">
                                        <div className="column">
                                            <div className="inputBox2">
                                                <div className="ui fluid labeled input">
                                                    <div className="ui label">
                                                        <Icon name="github square" size="large" />
                                                    </div>
                                                    <input type="text" defaultValue={userDetails.social_media.github} placeholder="Github Username (optional)" onChange={(event) => setGithub(event.target.value)} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="column">
                                            <div className="inputBox2">
                                                <div className="ui fluid labeled input">
                                                    <div className="ui label">
                                                        <Icon name="instagram" size="large" />
                                                    </div>
                                                    <input type="text" defaultValue={userDetails.social_media.instagram} placeholder="Instagram Username (optional)" onChange={(event) => setInstagram(event.target.value)} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="column">
                                            <div className="inputBox2">
                                                <div className="ui fluid labeled input">
                                                    <div className="ui label">
                                                        <Icon name="linkedin" size="large" />
                                                    </div>
                                                    <input type="text" defaultValue={userDetails.social_media.linkedIn} placeholder="LinkedIn Username (optional)" onChange={(event) => setLinkedIn(event.target.value)} />
                                                </div>
                                            </div>
                                        </div>
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
                    </div>
                ) : (<h1>Loading..</h1>)
            }
        </div >
    )
}

export default UserProfile
