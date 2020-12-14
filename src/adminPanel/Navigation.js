import React,{useState} from 'react'

import { Image, Icon, Button  } from "semantic-ui-react";
//CSS
import "./CSS/Navigation.css"

import { admin_auth } from "../services/google-firebase/setup"
import SideNav from './SideNav';

function Navigation() { 
    const [sidebarVisibility, setsidebarVisibility] = useState(0);
    

    const handleSignOut=()=>{
        admin_auth.signOut().then(function() {
            return true;
        }).catch(function(error) {
            return false;
        });
    }
    const toggleSidebar=()=>{
        setsidebarVisibility(!sidebarVisibility)
    }
    
   return (<div>
            <div className="ui inverted segment fluid">
            <div className="ui menu inverted secondary">
                <Image className="admin__tcrLogo" size='small' src={process.env.PUBLIC_URL + '/TCRBanner.png'} />
                <div className="header item computer only">
                   <h2 className='tcrTitle'>Technocrats Robotics</h2>
                </div>
                {/* <NavLink exact className="nav item" to="/adminPanel/addMembers"> Add Members</NavLink>
                <NavLink exact className="nav item" to="/adminPanel/manageMembers"> Manage Members </NavLink>
                <NavLink exact className="nav item" to="/adminPanel/sendBulkMails">Send Emails </NavLink>
                <NavLink exact className="nav item" to="/adminPanel/makeAnnouncement">Make Announcement </NavLink>     */}
                <div className="right menu computer only">
                    <div className="item">
                        <div className="ui primary button" onClick={handleSignOut}>Sign Out</div>
                    </div>
                    <div className="item">
                    <Button onClick={toggleSidebar} color='red' icon>
                        <Icon name='align justify' />
                    </Button>
                    </div>
                    
                <SideNav visibility={sidebarVisibility} visibilityToggle={toggleSidebar}></SideNav>
                </div>
            </div>
            </div>
            </div>
    )
}

export default Navigation;