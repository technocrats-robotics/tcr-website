import React, { Component } from 'react';

import { Image, Grid, Header, Icon, List  } from "semantic-ui-react";

export default function Dial() {
    React.useEffect(()=>{
        let menus = document.getElementsByClassName("Menu");
        let dial = document.getElementsByClassName('Dial')[0];
        let subMenus = document.getElementsByClassName("subMenus");
    //     console.log("Submenus CHildren");
    //     console.log(subMenus[0]);
        
        let zoomDialLeave = () => {
            dial.style.zoom = "0.8";        
        }
        let zoomDialOver = () => {
            dial.style.zoom = "1.2";  
        }
        window.addEventListener("scroll",(event)=>{
            if(window.scrollY > 800){
            dial.style.position = "fixed";
            dial.style.left = "0";
            dial.style.top = "2";
            dial.style.marginLeft = "-68px";
            dial.style.borderRight = "2px solid grey";
            dial.style.zoom = "0.8";
            dial.addEventListener("mouseover",zoomDialOver)
            dial.addEventListener("mouseleave",zoomDialLeave);
        }
            else if (window.scrollY<800){
            dial.style.position = "relative";
            dial.style.left = "default";
            dial.style.marginLeft = "50px";
            dial.style.zoom = "1.8";
            dial.removeEventListener("mouseover",zoomDialOver);
            dial.removeEventListener("mouseleave",zoomDialLeave);
            dial.style.borderRight = "0px solid grey";
            }
        });
        // for(let i=0;i<menus.length;i++){
        //     menus[i].addEventListener("mouseenter",function(event){
        //         try{
        //             let submenu = event.target.children[0];
        //             setTimeout(()=>{
        //                 submenu.style.height = 'auto';
        //                 submenu.style.opacity = "1.0";
        //                 console.log('mouseenter');
        //             },200);
        //         }
        //         catch(e){
        //             console.log(e);
        //         }})
        //     menus[i].addEventListener("mouseleave",function(event){
        //         try{
        //             let submenu = event.target.children[0];
        //             setTimeout(()=>{
        //             submenu.style.height = '0px';
        //             submenu.style.opacity = "0.0";
        //             console.log('mouseleave');
        //         },200);
        //         }
        //         catch(e){
        //             console.log(e);
        //         }})
        // }
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
                    </div></div>
                </List.Item>
                <List.Item active>
                <div className='Menu Menu2' >
                    Blog
                    <div className='subMenus subMenu2'>
                    <List.List>
                    <List.Item as='a'>
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
                <div className='Menu Menu4' >
                    Contact Us
                    <div className='subMenus subMenu4'>
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