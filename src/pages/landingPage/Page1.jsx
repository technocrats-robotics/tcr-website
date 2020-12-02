import React, { Component } from 'react';

import { Image, Grid, Header, Icon  } from "semantic-ui-react";
import Dial from "../../components/Dial.jsx";

export default class Page1 extends Component {
  render() {
    // let scrollToOne = () => {
    //     document.getElementsByClassName('firstPage')[0].scrollIntoView({behavior:'smooth'});   
    // }
    return(
        <div className="firstPage">
            <Grid centered>
                <Grid.Row className='mainRow' columns='14'>
                    <Grid.Column mobile='12' className='leftMain' width='6' >
                        <div style={{textAlign:'center'}}>
                    <Image avatar size='large' src={'https://avatars3.githubusercontent.com/u/49567419?s=200&v=4'}></Image>
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