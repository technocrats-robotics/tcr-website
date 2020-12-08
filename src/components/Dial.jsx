import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';

import { Image, Grid, Header, Icon, List  } from "semantic-ui-react";

export default function Dial() {
    
    const history = useHistory();

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
    let jumpToBlogs = () => {
        history.push('/blogs');
    }
    let jumpToGallery = () => {
        history.push('/gallery');
    }
    React.useEffect(()=>{
        let menus = document.getElementsByClassName("Menu");
        let dial = document.getElementsByClassName('Dial')[0];
        let subMenus = document.getElementsByClassName("subMenus");

        let zoomDialLeave = () => {
            dial.style.zoom = "0.8";        
        }
        let zoomDialOver = () => {
            dial.style.zoom = "1.2";  
        }
        window.addEventListener("scroll",(event)=>{

            if(window.scrollY > 10){
            dial.style.position = "fixed";
            dial.style.left = "0";
            dial.style.top = "2";
            dial.style.marginLeft = "-68px";
            dial.style.borderRight = "2px solid grey";
            dial.style.zoom = "0.8";
            dial.addEventListener("mouseover",zoomDialOver)
            dial.addEventListener("mouseleave",zoomDialLeave);
        }
            else if (window.scrollY < 10){
            dial.style.position = "relative";
            dial.style.left = "default";
            dial.style.marginLeft = "-100px";
            dial.style.zoom = "1.8";
            dial.removeEventListener("mouseover",zoomDialOver);
            dial.removeEventListener("mouseleave",zoomDialLeave);
            dial.style.borderRight = "0px solid grey";
            }
        });
        }
    )
    return(
        <div className="Dial">
            
            <div>
                
            <Image className="arc" src={'arc.png'}>
                </Image>
            </div>
            <div className="dialText">
                
            <List>
                <List.Item active>
                    <div className='Menu Menu1' >Home
                    <div className='subMenus subMenu1'>
                        <List.List>
                            <List.Item as='a' onClick={scrollToOne}>
                                Home
                            </List.Item>
                            <List.Item as='a' onClick={scrollToTwo}>
                                Who are we?
                            </List.Item>
                            <List.Item as='a' onClick={scrollToThree}>
                                Images Matrix
                            </List.Item>
                            <List.Item as='a' onClick={scrollToFour}>
                                Testinomials
                            </List.Item>
                        </List.List>
                    </div></div>
                </List.Item>
                <List.Item active>
                <div className='Menu Menu2' >
                    Blog
                    <div className='subMenus subMenu2'>
                    <List.List>
                    <List.Item as='a' onClick={jumpToBlogs}>
                        Read
                    </List.Item>
                    <List.Item as='a'>
                        Create
                    </List.Item>
                    </List.List >
                    </div>
                    </div>
                </List.Item>
                <List.Item active>
                <div className='Menu Menu3' >
                    Gallery
                    <div className='subMenus subMenu3'>
                        <List.List>
                            <List.Item as='a' onClick={jumpToGallery}>
                                Gallery
                            </List.Item>
                        </List.List>
                    </div>
                </div>
                </List.Item>
                <List.Item active>
                <div className='Menu Menu4' >
                    About Us
                    <div className='subMenus subMenu3'>
                        <List.List>
                            <List.Item as='a'>
                                Team
                            </List.Item>
                            <List.Item as='a'>
                                Contact Us
                            </List.Item>
                            <List.Item as='a'>
                                Alumni
                            </List.Item>
                        </List.List>
                    </div>
                </div>
                </List.Item>
                
                <List.Item active>
                <div className='Menu Menu5' >
                    Contact Us
                    <div className='subMenus subMenu5'>
                        <List.List>
                            <List.Item as='a'>
                                Team
                            </List.Item>
                            
                        </List.List>
                    </div>
                </div>
                </List.Item>
            </List>
            </div>
        </div>
    );
    }