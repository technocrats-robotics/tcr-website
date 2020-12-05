import React from 'react'
import { useEffect, useState } from 'react'
import "./CSS/Body.css"

//database (firestore) from services
import {db} from '../services/google-firebase/setup'

function MembersPanel() {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        db.collection('members').onSnapshot(snapshot => {
            setDetails(snapshot.docs.map(doc => {
                return doc;
            }))
        })
    }, [])

    // update given field of member with given id to newValue
    function updateValue(field,id,currentValue){
        db.collection('members').doc(id).update({[field] : !currentValue}).then(
            console.log("Done")
        )
    }

    return (
        <div className="admin__membersPanel">
            <table className="ui celled definition table" key="table">
                <thead className="full-width" key="thead">
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
                <tbody key="tbody">
                {
                    details.map((detail,index)=>{
                        let member=detail.data();
                        return(    
                            <tr key={index+1}>
                                <td>{index+1}.</td>
                                <td>{member.name}</td>
                                <td>{member.yearOfJoining}</td>
                                <td>{member.branch}</td>
                                <td>{member.username}</td>
                                <td>{member.registeredEmail}</td>
                                <td>-</td>
                                <td className="collapsing">
                                    <div className="ui fitted slider checkbox">
                                        <input type="checkbox" checked={
                                            (member.blogAccess)?(true):(false)
                                        } onChange={()=>{updateValue("blogAccess",detail.id,member.blogAccess)}}/> <label></label>
                                    </div>
                                </td>
                                <td className="collapsing">
                                <div className="ui fitted slider checkbox">
                                    <input type="checkbox" checked={
                                        (member.isActive)?(true):(false)
                                    } onChange={()=>{updateValue("isActive",detail.id,member.isActive)}} /> <label></label>
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
