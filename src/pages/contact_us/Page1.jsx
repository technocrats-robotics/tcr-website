import React, { Component } from 'react';
import { Grid, Segment, Header,Image, GridRow, GridColumn,Form,Button,Icon } from 'semantic-ui-react';
import ContactForm from './../../components/contact_us/ContactForm';
import Map from './../../components/contact_us/Map';

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
                    <Segment raised size='massive' color='red' fluid inverted>
                        <Button circular color='red' icon='facebook' />
                        <Button circular color='red' icon='twitter' />
                        <Button circular color='red' icon='linkedin' />
                        <Button circular color='red' icon='git' />
                        <Header as='h6'>Are you a member?  
                         <Button compact> Member Login</Button></Header>
                    </Segment>
                </div>
                </GridRow>
            </Grid>
        </div>
    );
    }
}