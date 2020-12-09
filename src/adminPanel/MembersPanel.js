import React from 'react'
import { useEffect, useState } from 'react'
import { Button, Header, Icon, Modal, Table } from 'semantic-ui-react'
import "./CSS/Body.css"

//database (firestore) from services
import { admin_db } from '../services/google-firebase/setup'
import Member from '../services/google-firebase/models/members/member';

function MembersPanel() {

    // State variables
    const [details, setDetails] = useState([]);
    const [modalOpen, setModalOpen] = React.useState(false)


    useEffect(() => {
        document.title="Admin Panel | Manage Members"

        admin_db.collection(Member.collectionName).onSnapshot(snapshot => {
            setDetails(snapshot.docs.map(doc => {
                return doc;
            }))
        })
    },[]);

    // update given field of member with given id to newValue
    function updateValue(field,id,newValue){
        admin_db.collection(Member.collectionName).doc(id).update({[field] : newValue}).then(
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
                        <th>Current Role</th>
                        <th>Blog Access</th>
                        <th>Profile Status</th>
                    </tr>
                </thead>
                <tbody key="tbody">
                {
                    details.map((detail,index)=>{
                        let member = detail.data();
                        let currentRole = Member.getCurrentRole(member.roles);
                        return(    
                            <tr key={index+1}>
                                <td>{index+1}.</td>
                                <td>{member.name}</td>
                                <td>{member.yearOfJoining}</td>
                                <td>{member.branch}</td>
                                <td>{member.username}</td>
                                <td>{member.registeredEmail}</td>
                                <td>
                                    <Modal
                                        closeIcon
                                        open={modalOpen}
                                        trigger={<Button basic circular icon='edit outline'/>}
                                        onClose={() => setModalOpen(false)}
                                        onOpen={() => setModalOpen(true)}
                                        dimmer='blurring'
                                    >
                                        <Header icon='universal access' content='Modify Yearly Roles' />
                                        <Modal.Content>
                                        <table class="ui unstackable table">
                                            <thead class="">
                                                <tr class="">
                                                    <th class="">Year</th>
                                                    <th class="">Role</th>
                                                </tr>
                                            </thead>
                                            <tbody class="">
                                                <tr class="">
                                                    <td class="">2018</td>
                                                    <td class="">Approved</td>
                                                </tr>
                                                <tr class="">
                                                    <td class="">2018</td>
                                                    <td class="">Approved</td>
                                                </tr>
                                                <tr class="">
                                                    <td class="">2018</td>
                                                    <td class="">Approved</td>
                                                </tr>
                                                <tr class="">
                                                    <td class="">2018</td>
                                                    <td class="">Approved</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </Modal.Content>
                                        <Modal.Actions>
                                            <Button color='red' onClick={() => setModalOpen(false)}>
                                            <Icon name='remove' /> No
                                            </Button>
                                            <Button color='green' onClick={() => setModalOpen(false)}>
                                            <Icon name='checkmark' /> Yes
                                            </Button>
                                        </Modal.Actions>
                                    </Modal>
                                    {currentRole}
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

export default MembersPanel;

/**
 * References:
 * https://stackoverflow.com/questions/13751166/javascript-uncaught-referenceerror-keys-is-not-defined
 */
