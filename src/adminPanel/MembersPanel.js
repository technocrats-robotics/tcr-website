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

    /**
     * Generates a table for Role modification
     */
    var YearlyRolesTable = (props) => {
        let rows = [];
        let roles = props.yearly_roles;
        Object.keys(roles).forEach(year => {
            rows.push(
                <Table.Row key={year}>
                    <Table.Cell>{year}</Table.Cell>
                    <Table.Cell>{roles[year]}</Table.Cell>
                </Table.Row>
            );
        });

        // Generate the table
        return (
            <Table unstackable>
            <Table.Header>
                <Table.Row>
                <Table.HeaderCell>Team Year</Table.HeaderCell>
                <Table.HeaderCell>Role</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>{rows}</Table.Body>
            </Table>
        );
    };

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
                                        trigger={<Button basic circular icon='edit outline'/>}
                                        dimmer='blurring'
                                    >
                                        <Header icon='universal access' content='Modify Yearly Roles' />
                                        <Modal.Content>
                                            <YearlyRolesTable yearly_roles={member.roles}/>
                                        </Modal.Content>
                                        <Modal.Actions>
                                            <Button color='red'>
                                            <Icon name='remove' /> No
                                            </Button>
                                            <Button color='green'>
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
