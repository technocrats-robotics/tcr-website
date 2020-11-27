import React, { Component } from 'react';

import { Image, Grid, Header, Icon, List  } from "semantic-ui-react";

export default function Dial() {
    React.useEffect(()=>{
        let menus = document.getElementsByClassName("Menu");
        for(let i=0;i<menus.length;i++){
        menus[i].addEventListener("mouseenter",function(event){
            try{
            event.target.children[0].style.display = 'block';
            }
            catch(e){
                console.log(e);
            }
      })
      menus[i].addEventListener("mouseleave",function(event){
        try{
        event.target.children[0].style.display = 'none';
        }
        catch(e){
            console.log(e);
        }
  })
    }
    }
      )
    return(
        <div className="Dial">
            <div className="dialText">
            <List>
                <List.Item>
                    <div className='Menu Menu1' >Home</div>
                <div className='subMenus subMenu1'>
                </div>
                </List.Item>
                <List.Item>
                <div className='Menu Menu2' >
                    Blog
                    <div className='subMenus subMenu2'>
                    <List.List>
                    <List.Item>
                        Read
                    </List.Item>
                    <List.Item>
                        Create
                    </List.Item>
                    </List.List>
                    </div>
                    </div>
                </List.Item>
                <List.Item>
                <div className='Menu Menu3' >
                    About Us
                    <div className='subMenus subMenu3'>
                        <List.List>
                            <List.Item>
                                Team
                            </List.Item>
                            <List.Item>
                                Contact Us
                            </List.Item>
                            <List.Item>
                                Alumni
                            </List.Item>
                        </List.List>
                    </div>
                </div>
                </List.Item>
                <List.Item>
                <div className='Menu Menu4' >
                    Contact Us
                </div>
                </List.Item>
                
                <List.Item>
                <div className='Menu Menu5' >
                    Contact Us
                </div>
                </List.Item>
            </List>
            </div>
        </div>
    );
    }