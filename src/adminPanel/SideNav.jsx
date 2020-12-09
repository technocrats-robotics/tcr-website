import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

const SideNav = (props) => (
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible={props.visibility}
      width='thin'
    >
      <Menu.Item as='a'>
      <NavLink exact className="nav item" to="/adminPanel/addMembers"> Add Members</NavLink>
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='gamepad' />
        Games
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='camera' />
        Channels
      </Menu.Item>
    </Sidebar>
)

export default SideNav