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
    const [visibleChangePassword,setChangePassword] = useState(true);

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
                            <div>
                                <Menu.Item onClick={handleVisibility} style={{cursor:"pointer"}}>
                                    <Icon name='x'/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Icon name='user' />
                                    <NavLink exact className="nav item" to="/userPanel" onClick={handleVisibility}>My Profile</NavLink>
                                </Menu.Item>
                                {
                                    User && User.blogAccess && (
                                        <Menu.Item >
                                            <Icon name='folder open' />
                                            <NavLink exact className="nav item" to="/userPanel/myPosts" onClick={handleVisibility}> My Posts </NavLink>
                                        </Menu.Item>
                                    )
                                }
                                {
                                    User && User.blogAccess && (
                                        <Menu.Item>
                                            <Icon name='pencil alternate' />
                                            <NavLink exact className="nav item" to="/userPanel/writePost" onClick={handleVisibility}> New Post </NavLink>
                                        </Menu.Item>
                                    )
                                }
                                <Menu.Item as='a'>
                                    <Icon name='sign out alternate' />
                                    <NavLink exact className="nav item" to="/userPanel/passwordReset" onClick={handleVisibility}> Change Password </NavLink>
                                </Menu.Item>

                                <Menu.Item as='a' onClick={handleSignOut}>
                                    <Icon name='sign out alternate' />
                                   Sign Out
                                </Menu.Item>
                            </div>

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
