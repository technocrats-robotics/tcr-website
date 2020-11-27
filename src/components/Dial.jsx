import React, { Component } from 'react';

import { Image, Grid, Header, Icon, List  } from "semantic-ui-react";

export default class Dial extends Component {
  render() {
    return(
        <div className="Dial">
            <div className="dialText">
            <List>
                <List.Item>
                    Home
                </List.Item>
                <List.Item>
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
                </List.Item>
                <List.Item>
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
                </List.Item>
                <List.Item>
                    Contact Us
                </List.Item>
            </List>
            </div>
        </div>
    );
    }
}