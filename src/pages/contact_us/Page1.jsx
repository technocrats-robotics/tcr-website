import React, { Component } from 'react';
import { Grid, Segment, Header,Image, GridRow, GridColumn,Form,Button,Icon } from 'semantic-ui-react';
import ContactForm from './../../components/contact_us/ContactForm';
import Map from './../../components/contact_us/Map';
import {Link} from 'react-router-dom';

export default class Page1 extends Component {

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
                        <Button circular color='black' icon='facebook' />
                        <Button circular color='black' icon='twitter' />
                        <Button circular color='black' icon='linkedin' />
                        <Button circular color='black' icon='git' />

                    </Segment>
                    <Segment inverted>
                        Made with <Icon color='red' name='heart'></Icon>by Technocrats Robotics |
                        <Link to="/userPanel"><Button basic color='yellow'>Member Login</Button></Link>
                    </Segment>
                </div>
                </GridRow>
            </Grid>
        </div>
    );
    }
}