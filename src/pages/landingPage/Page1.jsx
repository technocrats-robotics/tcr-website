import React, { Component } from 'react';

import { Image, Grid, Header, Icon  } from "semantic-ui-react";

export default class Page1 extends Component {
  render() {
    return(
        <div className="firstPage">
            <Grid centered>
                <Grid.Row className='mainRow' columns='14'>
                    <Grid.Column className='leftMain' width='6' >
                        <div style={{textAlign:'center'}}>
                    <Image size='large' src={'https://avatars3.githubusercontent.com/u/49567419?s=200&v=4'}></Image>
                    <Header className='Title' size='medium'>Technocrats Robotics</Header>
                    <Icon color='yellow' size='huge' name='chevron down'></Icon>                   
                        </div>
                        </Grid.Column>
                    <Grid.Column width='4'>
                    
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
    }
}