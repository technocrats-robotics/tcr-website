import React, {useEffect,useContext,useState } from 'react'
import { Menu, Sidebar, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

//auth from services/google-firebase
import { auth } from "../services/google-firebase/setup"

// db from local firebase setup
import { db } from "../services/google-firebase/setup"

//GlobalUser from context
import { GlobalUser } from "./UserPanel"

function Navigation() {


    const [visible, setVisible] = useState(false);

    const handleVisibility = () => {
        setVisible(!visible)
    }

    const user = useContext(GlobalUser);
    //User state variable for local use
    const [User, setUser] = useState(user);

    useEffect(() => {
        db.collection('members').doc(user)
            .onSnapshot(function (doc) {
                setUser(doc.data());
            })
    }, [user])

    const handleSignOut = () => {
        auth.signOut().then(function () {
            return true;
        }).catch(function (error) {
            return false;
        });
    }

    return (
        <div>
            {
                (visible) ? (
                    <div>
                        <Sidebar
                            as={Menu}
                            animation='overlay'
                            icon='labeled'
                            inverted
                            direction='left'
                            vertical
                            visible={visible}
                            width='thin'
                        >
                            
                                <Menu.Item style={{cursor:"pointer"}}>
                                    <Icon name='x' onClick={handleVisibility}/>
                                </Menu.Item>
                                <Menu.Item>
                                    <NavLink exact className="nav item" to="/userPanel" onClick={handleVisibility}>
                                    <Icon name='user' />My Profile</NavLink>
                                </Menu.Item>
                                {
                                    User && User.blogAccess && (
                                        <Menu.Item >
                                            <NavLink exact className="nav item" to="/userPanel/myPosts" onClick={handleVisibility}>
                                            <Icon name='folder open' /> My Posts </NavLink>
                                        </Menu.Item>
                                    )
                                }
                                {
                                    User && User.blogAccess && (
                                        <Menu.Item>
                                            <NavLink exact className="nav item" to="/userPanel/writePost" onClick={handleVisibility}>
                                            <Icon name='pencil alternate' /> New Post </NavLink>
                                        </Menu.Item>
                                    )
                                }
                                <Menu.Item>
                                    <NavLink exact className="nav item" to="/userPanel/passwordReset" onClick={handleVisibility}> 
                                    <Icon name='sign out alternate' />Change Password </NavLink>
                                </Menu.Item>

                                <Menu.Item onClick={handleSignOut}>
                                    <Icon name='sign out alternate' />
                                   Sign Out
                                </Menu.Item>
                                
                                <Menu.Item>
                                    <NavLink className="nav item" to="/" onClick={handleVisibility}> 
                                    <Icon name='home' />Home </NavLink>
                                </Menu.Item>

                        </Sidebar>
                    </div>
                ) : (
                        <button className="ui red icon button" onClick={handleVisibility} style={{ position: "absolute", left: "8px", top: "8px", background: "rgb(208,25,25)", cursor: "pointer" }}>
                                <i className="align left icon"></i>
                        </button>
                    )
            }
        </div>
    )
}

export default Navigation
