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
                    <Statistic style={{marginLeft:'350px',marginTop:'120px'}}  size='large' color='red'>
                    <Statistic.Value>
                        <Image src='data:image/png;base64,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' inline circular />
                        5
                    </Statistic.Value>
                    <Statistic.Label>Team Members</Statistic.Label>
                    </Statistic>
                    </Grid.Column>
                    <Grid.Column width='6'>
                        <ImageMat></ImageMat>
                    </Grid.Column>
                    <Grid.Column floated='left' width='5'>
                    <Statistic style={{marginTop:'120px',marginLeft:'50px'}}  size='large' color='yellow'>
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