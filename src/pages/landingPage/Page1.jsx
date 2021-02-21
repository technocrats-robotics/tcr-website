import React, { Component, Suspense } from 'react';

import { Grid, Header, Icon} from "semantic-ui-react";
import LogoController from '../../components/landingPage/LogoController'


var x = window.matchMedia("(max-width: 728px)")
// import  from 'flare-react';
const FlareComponent = React.lazy(()=>import('flare-react'))
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
            window.scrollBy({top:750, behavior:'smooth'});
        }else{
            window.scrollBy({top:850, behavior:'smooth'});
        }
    }
  render() {
    return(
        <div className="firstPageMain">
            <Grid centered>
                <Grid.Row className='mainRow' columns='14'>
                    {/* <div className='firstpagebackdiv'></div> */}
                    <Grid.Column mobile='16' textAlign='center' className='leftMain' computer='6' >
                        <Suspense fallback={<div className='loadScreen'>
                    <Icon size='massive' color='red' loading name='spinner' />
                </div>}>
                            <FlareComponent className="TechLogoMainPage" width={360} height={360} transparent={true} controller={new LogoController()} file="tcr_logo.flr"/>
                        </Suspense>
                        <div className='mainPageContent'>
                            <Header className='Title' size='medium'>Technocrats Robotics</Header>
                            <div className='arrowDown' onClick={this.handleArrowDown}>
                                <Icon className='angle double down' color='grey' size='huge' name='chevron down'></Icon>
                            </div>
                        </div> 
                        </Grid.Column>
                    {/* THE DIAL/NAV MENU IS PLANNED FOR LATER */}
                        {/* <Grid.Column only='computer'  width='4'>
                                <Dial></Dial>
                        </Grid.Column> */}
                    {/* ************************************** */}
                </Grid.Row>
            </Grid>
        </div>    );
    }
}