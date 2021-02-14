import React from 'react'
import {Menu,Sidebar,Button,Icon, Image } from 'semantic-ui-react'
import {NavLink, useHistory} from 'react-router-dom'
import { render } from '@testing-library/react';
let scrollToOne = () => {
    document.getElementsByClassName('firstPage')[0].scrollIntoView({behavior:'smooth'});    
}
let scrollToTwo = () => {
    document.getElementsByClassName('secondPage')[0].scrollIntoView({behavior:'smooth'});   
}
let scrollToThree = () => {
    document.getElementsByClassName('thirdPage')[0].scrollIntoView({behavior:'smooth'});    
}
let scrollToFour = () => {
    document.getElementsByClassName('fourthPage')[0].scrollIntoView({behavior:'smooth'});
}
let scrollToTeam = () => {
    document.getElementsByClassName('secondAboutPage')[0].scrollIntoView({behavior:'smooth'});
}
let scrollToContactUs = () => {
    document.getElementsByClassName('firstPageContactUs')[0].scrollIntoView({behavior:'smooth'});
}  
let scrollToAboutUs = () => {
    document.getElementsByClassName('firstAboutPage')[0].scrollIntoView({behavior:'smooth'});

}
let jumpToBlogs = (history) => {
    history.push('/blogs');
}
let jumpToGallery = (history) => {
    history.push('/gallery');
}

const SideNavMob = (props) => {
  const history = useHistory();
   return(
     <div>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      className='sidebarAdminPanel'
      direction='right'
      vertical
      visible={props.visibility}
      width='wide'
      secondary
    >
      
      <Menu.Item as='a' onClick={scrollToOne}>
        Home
      </Menu.Item>
      <Menu.Item as='a' onClick={scrollToTwo}>
        Who are we?
      </Menu.Item>
      <Menu.Item as='a' onClick={scrollToThree}>
        Gallery
      </Menu.Item>   
      <Menu.Item as='a' onClick={scrollToAboutUs}>
        About Us
      </Menu.Item>   
      <Menu.Item as='a' onClick={scrollToTeam}>
        Team
      </Menu.Item>    
      <Menu.Item as='a' onClick={scrollToContactUs}>
        Contact Us
      </Menu.Item>     
    </Sidebar>
    </div>
    )
}

export default SideNavMob