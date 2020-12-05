import React, { useContext, useState, useEffect } from 'react'
import { GlobalUser } from "./UserPanel"


import { db } from "../services/google-firebase/setup"

//CSS
import "./CSS/UserProfile.css"

function UserProfile() {

    const user = useContext(GlobalUser);
    const [userDetails, setUserDetails] = useState(null);

    const[dpLink,setDpLink]=useState(null);
    const[github,setGithub]=useState(null);
    const[instagram,setInstagram]=useState(null);
    const[linkedIn,setLinkedIn]=useState(null);
    const[experience,setExperience]=useState(null);
    const[misc,setMisc]=useState(null);

    useEffect(() => {
        db.collection('members').doc(user)
            .onSnapshot(function (doc) {
                setUserDetails(doc.data())
            })
    }, [user])

    

    const handleSubmit=(event)=>{
        event.preventDefault();

        // update given field of member with given id to newValue
        function updateValue(){
            db.collection('members').doc(user).update({dpLink : dpLink, social_media:{github:github,instagram:instagram,linkedIn:linkedIn},about:{experience:experience,misc:misc }}).then(
                console.log("Done")
            ).catch((error)=>{
                console.log("error ",error);
            })
        }
        updateValue()
        alert('Profile Updated !!')
    }



    const defaultDpLink = 'https://wordsmith.org/words/images/avatar2_large.png'
    const defaultFieldAns = 'Not Available'

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
                                    <h3><b><u>Name:</u></b> {userDetails.name || defaultFieldAns}</h3>
                                </div>
                            </div>
                            <div className="thirteen wide column">
                                <div className="inputBox">
                                    <div className="ui fluid disabled labeled input">
                                        <div className="ui label">
                                            Registered Email
                                    </div>
                                        <input type="text" value={userDetails.registeredEmail || defaultFieldAns} />
                                    </div>
                                </div>
                                <div className="inputBox">

                                    <div className="ui fluid disabled labeled input">
                                        <div className="ui label">
                                            Current Role
                                    </div>
                                        <input type="text" value={userDetails.role || defaultFieldAns} />
                                    </div>
                                </div>
                                <div className="inputBox">

                                    <div className="ui fluid disabled labeled input">
                                        <div className="ui label">
                                            Year of Joining
                                    </div>
                                        <input type="text" value={userDetails.yearOfJoining || defaultFieldAns} />
                                    </div>
                                </div>
                                <div className="inputBox">

                                    <div className="ui fluid disabled labeled input">
                                        <div className="ui label">
                                            Department
                                    </div>
                                        <input type="text" value={userDetails.branch || defaultFieldAns} />
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
                                        <input type="url"  placeholder={userDetails.dpLink || "Provide a valid link for your DP."} onChange={(event)=>setDpLink(event.target.value)} required/>
                                    </div>
                                </div>
                                <div className="inputBox">
                                    <div className="ui fluid labeled input">
                                        <div className="ui label">
                                            Github Username
                                    </div>
                                        <input type="text" placeholder={userDetails.social_media.github||"Github Username (optional)"} onChange={(event)=>setGithub(event.target.value)}  />
                                    </div>
                                </div>
                                <div className="inputBox">

                                    <div className="ui fluid labeled input">
                                        <div className="ui label">
                                            Instagram Username
                                    </div>
                                        <input type="text" placeholder={userDetails.social_media.instagram ||"Instagram Username (optional)"} onChange={(event)=>setInstagram(event.target.value)}/>
                                    </div>
                                </div>
                                <div className="inputBox">

                                    <div className="ui fluid labeled input">
                                        <div className="ui label">
                                            LinkedIn Username
                                    </div>
                                        <input type="text" placeholder={userDetails.social_media.linkedIn || "LinkedIn Username (optional)"} onChange={(event)=>setLinkedIn(event.target.value)}/>
                                    </div>
                                </div>
                                <div className="inputBox">

                                    <div className="ui fluid labeled input">
                                        <div className="ui label">
                                            Experience
                                    </div>
                                        <input placeholder={userDetails.about.experience||"Achievement (if Any)" }onChange={(event)=>setExperience(event.target.value)}/>
                                    </div>
                                </div>
                                <div className="inputBox">

                                    <div className="ui fluid labeled input">
                                        <div className="ui label">
                                            Miscellaneous
                                    </div>
                                        <input placeholder={userDetails.about.misc||"Miscellaneous (if Any)" } onChange={(event)=>setMisc(event.target.value)} />
                                    </div>
                                </div>
                                <button type="submit" className="ui button" onClick={handleSubmit}>
                                    Submit
                                </button>
                            </div>
                        </div>
                        
                    </div>
                ) : (<h1>Loading...</h1>)
            }
        </div>
    )
}

export default UserProfile
