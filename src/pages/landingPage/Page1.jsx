import React, { Component } from 'react';

import { Image, Grid, Header, Icon, Transition  } from "semantic-ui-react";
import Dial from "../../components/Dial.jsx";
import FlareComponent from 'flare-react';
import LogoController from '../../components/landingPage/LogoController'


var x = window.matchMedia("(max-width: 728px)")
export default class Page1 extends Component {
    constructor(){
        super();
        this.handleArrowDown = this.handleArrowDown.bind(this);
    }
    
    state= {
        visible: false
    }
    handleArrowDown(){
        if(x.matches){
            window.scrollBy({top:1000, behavior:'smooth'});
        }else{
            window.scrollBy({top:850, behavior:'smooth'});
        }
    }
    componentDidMount(){

    }
  render() {
    return(
        <div className="firstPage">
            <Grid centered>
                <Grid.Row className='mainRow' columns='14'>
                    {/* <div className='firstpagebackdiv'></div> */}
                    <Grid.Column mobile='12' textAlign='center' className='leftMain' computer='6' >
                            <FlareComponent className="TechLogoMainPage" width={360} height={360} transparent={true} controller={new LogoController()} file="tcr_logo.flr"/>
                        
                            <Header className='Title' size='medium'>Technocrats Robotics</Header>
                            <div className='arrowDown' onClick={this.handleArrowDown}>
                                <Icon className='angle double down' color='grey' size='huge' name='chevron down'></Icon>
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