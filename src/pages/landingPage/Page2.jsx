import React, { Component } from 'react';
import { Grid, Segment, Header,Statistic,Image,Icon } from 'semantic-ui-react';
import ImageMat from '../../components/landingPage/ImageMat';

export default class Page2 extends Component {
  render() {
    return(
        <div className="firstPage">
            <Grid centered>
                <Grid.Row textAlign='center'>
                    <Grid.Column width='6'>
                        <Segment className='introCard' inverted color='black' textAlign='center' fluid>
                            <Header color='green'>Technocrats Robotics</Header>
                            <p>By the same illusion which lis the horizon of the sea to the level of the
spectator on a hillside, the sable cloud beneath was dished out, and the
car seemed to float in the middle of an immense dark sphere, whose
upper half was strewn with silver.</p>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column floated='right' width='5'>
                    <Statistic size='huge' color='yellow'>
                    <Statistic.Value>
                        <Icon name='plane' />5
                    </Statistic.Value>
                    <Statistic.Label>Flights</Statistic.Label>
                    </Statistic>
                    </Grid.Column>
                    <Grid.Column width='6'>
                        <ImageMat></ImageMat>
                    </Grid.Column>
                    <Grid.Column width='5'>
                    <Statistic size='huge' color='yellow'>
                    <Statistic.Value>
                        <Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' inline circular />
                        42
                    </Statistic.Value>
                    <Statistic.Label>Team Members</Statistic.Label>
                    </Statistic>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
    }
}