import React from 'react'
import { useEffect, useState } from 'react'
import "./CSS/Body.css"

//database (firestore) from services
import db from '../services/google-firebase/utilities'

function MembersPanel() {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        db.collection('members').onSnapshot(snapshot => {
            setDetails(snapshot.docs.map(doc => {
                return doc;
            }))
        })
    }, [])

    return (
        <div class="admin__membersPanel">
            <table class="ui celled definition table">
                <thead class="full-width">
                    <tr>
                        <th>Count</th>
                        <th>Name</th>
                        <th>Y.O.J</th>
                        <th>Department</th>
                        <th>User Name @tcr.in</th>
                        <th>Registered Email Id</th>
                        <th>Role</th>
                        <th>Blog Access</th>
                        <th>Profile Status</th>
                    </tr>
                </thead>
                <tbody>
                {
                    details.map((detail,index)=>{
                        console.log(detail.id)
                        let member=detail.data();
                        return(    
                            <tr>
                                <td>{index+1}.</td>
                                <td>{member.name}</td>
                                <td>{member.yearOfJoining}</td>
                                <td>{member.branch}</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td class="collapsing">
                                    <div class="ui fitted slider checkbox">
                                        <input type="checkbox" checked={
                                            (member.blogAccess)?(true):(false)
                                        } onChange={(event)=>event.target.value} /> <label></label>
                                    </div>
                                </td>
                                <td class="collapsing">
                                <div class="ui fitted slider checkbox">
                                    <input type="checkbox" checked={
                                        (member.isActive)?(true):(false)
                                    } /> <label></label>
                                </div>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default MembersPanel
