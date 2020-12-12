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
     direction='left'
     width=' very wide'
     inverted
     color='red'
     visible={props.visibility}
     >

     </Sidebar>
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
    >
      
      <Menu.Item as='a' onClick={scrollToOne}>
        Home
      </Menu.Item>
      <Menu.Item as='a' onClick={scrollToTwo}>
        Who are we?
      </Menu.Item>
      <Menu.Item as='a' onClick={scrollToThree}>
        Images Matrix
      </Menu.Item> 
      <Menu.Item as='a' onClick={scrollToThree}>
        Testinomials
      </Menu.Item>   
      <Menu.Item as='a' onClick={scrollToAboutUs}>
        About Technocrats
      </Menu.Item>   
      <Menu.Item as='a' onClick={scrollToTeam}>
        Team Leads
      </Menu.Item>  
      <Menu.Item as='a' onClick={()=>history.push("/Team")}>
        Complete Team  <Icon size='mini' name='external' color='blue'></Icon>
      </Menu.Item>  
      <Menu.Item as='a' onClick={()=>history.push("/Gallery")}>
        Gallery  <Icon size='mini' name='external' color='blue'></Icon>
      </Menu.Item>  
      <Menu.Item as='a' onClick={scrollToContactUs}>
        Contact Us
      </Menu.Item>     
    </Sidebar>
    </div>
    )
}

export default SideNavMob