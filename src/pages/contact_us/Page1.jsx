import React, { Component } from 'react';
import { Grid, Segment, Header,Image, GridRow, GridColumn,Form,Button,Icon, Visibility } from 'semantic-ui-react';
import ContactForm from './../../components/contact_us/ContactForm';
import Map from './../../components/contact_us/Map';
import {Link} from 'react-router-dom';

export default class Page1 extends Component {

  handleUpdate = (e, { calculations }) => {
      if(calculations.topVisible){
          document.getElementsByClassName('landingFooter')[0].style.boxShadow = "0px 20px 40px yellow";
      }else{
          document.getElementsByClassName('landingFooter')[0].style.boxShadow = "0px 10px 20px black";    
      }
  }
  
  openLink = (url) => {
    window.open(url, '_blank');
}
  render() {
    return(
        <div className='firstPageContactUs'>
            <Grid stackable inverted divided centered>
                <GridRow>
                    <GridColumn computer={6}>
                    <Header inverted size='large'>
                    <Icon name='mail'></Icon>
                        Leave us a message
                    </Header>
                        <ContactForm></ContactForm>
                    </GridColumn>
                    <GridColumn className='map' computer={6}>
                    <Header inverted size='large'>Location
                    <Icon name='map marker alternate'></Icon>
                    </Header>
                        <Map></Map>
                    </GridColumn>
                </GridRow>
                <GridRow className='landingFooter' columns={16}>
                <div>
                    <Segment raised size='massive' fluid inverted>
                        <Button onClick={()=>this.openLink('https://www.instagram.com/technocratsrobotics/')} circular color='black' icon='instagram' />
                        <Button onClick={()=>this.openLink('https://twitter.com/technocratsr')} circular color='black' icon='twitter' />
                        <Button onClick={()=>this.openLink('https://www.linkedin.com/company/technocrats-robotics-vit')} circular color='black' icon='linkedin' />
                        <Button onClick={()=>this.openLink('https://www.facebook.com/technocratsrobotics/')} circular color='black' icon='facebook' />

                    </Segment>
                    <Visibility onUpdate={this.handleUpdate}>
                    <Segment inverted>
                        Made with <Icon color='red' name='heart'></Icon>by Technocrats Robotics&nbsp;|&nbsp;
                        <Link to="/developers"><Button circular compact basic color='yellow'>Developer's Space</Button></Link>&nbsp;|&nbsp;
                        <Link to="/userPanel"><Button circular compact basic color='yellow'>Member Login</Button></Link>
                    </Segment>
                    </Visibility>
                </div>
                </GridRow>
            </Grid>
        </div>
    );
    }
}