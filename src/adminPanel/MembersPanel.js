import React from 'react'
import { useEffect, useState } from 'react'
import "./CSS/Body.css"

//database (firestore) from services
import {db} from '../services/google-firebase/admin_setup'

function MembersPanel() {

    const [details, setDetails] = useState([]);
    

    const roles=["Member","Alumni","HOD","Manager","Team Lead","Captain"];

    const [newRole,setNewRole] = useState('Member');

    useEffect(() => {
        db.collection('members').onSnapshot(snapshot => {
            setDetails(snapshot.docs.map(doc => {
                return doc;
            }))
        })
    },[]);

    // update given field of member with given id to newValue
    function updateValue(field,id,newValue){
        db.collection('members').doc(id).update({[field] : newValue}).then(
            console.log("Done")
        )
    }

    //updateRole
    function updateRole(event,id,name,oldRole){
        event.preventDefault();
        if(newRole===oldRole || newRole===null){
            alert('New Role cannot be same as the current role !!');
            return;
        }
        let decision = window.confirm(`Press OK to change Role of ${name} from ${oldRole} to ${newRole}.`);
        if(decision){
            db.collection('members').doc(id).update({role : newRole}).then(
                alert(`Now ${name} is ${newRole}`)
            )
        } else{
            alert("Please use this Panel with care !!")
        }
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
                        <th>Current Role</th>
                        <th>Update Role</th>
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
                                <td>{member.role}</td>
                                <td>
                                <form>
                                    <select onChange={(event)=>setNewRole(event.target.value)} key={detail.id}>
                                        {
                                            roles.map(role=>{
                                                return <option value={role} key={role}>{role}</option>
                                            })
                                        }
                                    </select>
                                    <button type="submit" onClick={(event)=>updateRole(event,detail.id,member.name,member.role)} key={detail.id}>Update</button>
                                </form>
                                </td>
                                <td className="collapsing">
                                    <div className="ui fitted slider checkbox">
                                        <input type="checkbox" checked={
                                            (member.blogAccess)?(true):(false)
                                        } onChange={()=>{updateValue("blogAccess",detail.id,!member.blogAccess)}}/> <label></label>
                                    </div>
                                </td>
                                <td className="collapsing">
                                <div className="ui fitted slider checkbox">
                                    <input type="checkbox" checked={
                                        (member.isActive)?(true):(false)
                                    } onChange={()=>{updateValue("isActive",detail.id,!member.isActive)}} /> <label></label>
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
