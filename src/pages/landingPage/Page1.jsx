import React, { Component } from 'react';

import { Image, Grid, Header, Icon  } from "semantic-ui-react";
import Dial from "../../components/Dial.jsx";

export default class Page1 extends Component {

  render() {
    return(
        <div className="firstPage">
            <Grid centered>
                <Grid.Row className='mainRow' columns='14'>
                    {/* <div className='firstpagebackdiv'></div> */}
                    <Grid.Column mobile='12' className='leftMain' width='6' >
                        <div style={{textAlign:'center'}}>
                    <Image className='TechLogoMainPage' size='large' src={'/TcrLogoClean.png'}></Image>
                    <Header className='Title' size='medium'>Technocrats Robotics</Header>
                    <div className='arrowDown'>
                    <Icon className='arrow' color='yellow' size='huge' name='chevron down'></Icon> </div>                  
                        </div>
                        </Grid.Column>
                    <Grid.Column only='computer'  width='4'>
                        <Dial></Dial>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
    }
}