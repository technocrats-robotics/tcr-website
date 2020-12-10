import React from 'react'
import { useEffect, useState } from 'react'
import { Button, Header, Modal, Table, Dropdown } from 'semantic-ui-react'
import "./CSS/Body.css"

//database (firestore) from services
import { admin_db } from '../services/google-firebase/setup'
import Member from '../services/google-firebase/models/members/member';
import Role from '../services/google-firebase/models/members/role'

import Success from '../components/Messages/Success'
import Warning from '../components/Messages/Warning'

function Memberdivel() {

    // State variables
    const [details, setDetails] = useState([]);
    
    //messages
    const[success,showSuccess]=Success();
    const[warning,showWarning]=Warning();

    useEffect(() => {
        document.title="Admin Panel | Manage Members"

        admin_db.collection(Member.collectionName).onSnapshot(snapshot => {
            setDetails(snapshot.docs.map(doc => {
                return doc;
            }))
        })
    },[]);

    /**
     * Generates a table for Role modification
     */
    var YearlyRolesTable = (props) => {
        let rows = [];
        let yearly_roles = props.yearly_roles;
        let roleOptions = [];
        Object.values(Role).forEach(role => {
            roleOptions.push({
                key: role,
                text: role,
                value: role,
            });
        });
        Object.keys(yearly_roles).forEach(year => {
            rows.push(
                <Table.Row key={year}>
                    <Table.Cell>{year}</Table.Cell>
                    <Table.Cell>
                        <Dropdown
                            options={roleOptions} 
                            placeholder='Select Role'
                            defaultValue={yearly_roles[year]}
                            onChange={(e,data) => {
                                // console.log(data.value); // Debugging
                                // Modify role in database
                                let selectedMember = new Member(props.mid);
                                selectedMember.updateMemberDetail('roles.'+year,data.value)
                                .then((status) => {
                                    // TODO: Remove console logs & replace with messages
                                    if(status) showSuccess('Role Modified');
                                    else showWarning('Something went wrong!');
                                });
                            }}
                        />
                    </Table.Cell>
                </Table.Row>
            );
        });

        // Generate the table
        return (
            <div>
                {success}
                {warning}
                <Table unstackable>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell>Team Year</Table.HeaderCell>
                    <Table.HeaderCell>Role</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>{rows}</Table.Body>
                </Table>
            </div>
        );
    };

    return (
        <div className="admin__memberdivel">
            <table className="ui definition table" key="table">
                <thead className="full-width cardMainHead" key="thead">
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
                            <tr className='cardMainBody' key={index+1}>
                                <td className='cardCount'><div className='captions'>Sno</div><div className='captionContent'>{index+1}</div></td>
                                <td className='cardData'><div className='captions'>Name</div><div className='captionContent'>{member.name}</div></td>
                                <td className='cardData'><div className='captions'>Year Of Joining</div><div className='captionContent'>{member.yearOfJoining}</div></td>
                                <td className='cardData'><div className='captions'>Branch</div><div className='captionContent'>{member.branch}</div></td>
                                <td className='cardData'><div className='captions'>Department</div><div className='captionContent'>{member.username}</div></td>
                                <td className='cardData'><div className='captions'>Email</div><div className='captionContent'>{member.registeredEmail}</div></td>
                                <td><div className='captions'>Role</div>
                                <div className='captionContent'>
                                    <Modal
                                        closeIcon
                                        trigger={<Button basic circular icon='edit outline'/>}
                                        dimmer='blurring'
                                    >
                                        <Header icon='universal access' content='Modify Yearly Roles' />
                                        <Modal.Content>
                                            <YearlyRolesTable yearly_roles={member.roles} mid={detail.id}/>
                                        </Modal.Content>
                                    </Modal>
                                    {currentRole}
                                    </div>
                                </td>
                                <td className="collapsing">
                                <div className='captions'>Blog Access</div>
                                    <div className="ui fitted slider checkbox">
                                        <input type="checkbox" checked={
                                            (member.blogAccess)?(true):(false)
                                        } onChange={()=>{
                                            let selectedMember = new Member(detail.id);
                                            selectedMember.updateMemberDetail('blogAccess', !member.blogAccess);
                                        }}/> <label></label>
                                    </div>
                                </td>
                                <td className="collapsing">
                                <div className='captions'>Profile Status</div>
                                <div className="ui fitted slider checkbox">
                                    <input type="checkbox" checked={
                                        (member.isActive)?(true):(false)
                                    } onChange={()=>{
                                        let selectedMember = new Member(detail.id);
                                        selectedMember.updateMemberDetail('blogAccess', !member.blogAccess);
                                    }} /> <label></label>
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

export default Memberdivel;

/**
 * References:
 * https://stackoverflow.com/questions/13751166/javascript-uncaught-referenceerror-keys-is-not-defined
 */
