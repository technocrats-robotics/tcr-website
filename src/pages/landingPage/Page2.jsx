import React, { Component } from 'react';
import { Grid, Segment, Header,Statistic,Image,Icon } from 'semantic-ui-react';
import ImageMat from '../../components/landingPage/ImageMat';
import IntroCard from '../../components/landingPage/IntroCard';

export default class Page2 extends Component {
  render() {
    return(
        <div className="secondPage">
            <Grid stackable centered>
                <Grid.Row mobile='16' textAlign='center'>
                    <Grid.Column textAlign='center' widescreen='6' computer='6' mobile='16'>
                        <IntroCard Introhead={'Technocrats Robotics'} mainContent={<p className='IntroContent'>By the same illusion which lis the horizon of the sea to the level of the
                            spectator on a hillside, the sable cloud beneath was dished out, and the
                            car seemed to float in the middle of an immense dark sphere, whose
                            upper half was strewn with silver.</p>}>
                        </IntroCard>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row stackable mobile='15'>
                    <Grid.Column textAlign='center' width='5'>
                    <Statistic size='large' className='redStats' color='red' inverted>
                            <Statistic.Value>
                                12
                            </Statistic.Value>
                            <Statistic.Label>Competitions</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                    <Grid.Column width='5'>
                        
                    <ImageMat></ImageMat>
                    </Grid.Column>
                    <Grid.Column textAlign='center' width='5'>
                    <Statistic mobile='16' inverted  className='yellowStats' size='large' color='yellow'>
                        <Statistic.Value>
                            42
                        </Statistic.Value>
                        <Statistic.Label>Team Members</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row only='computer' stackable mobile='16'>
                    <Grid.Column floated='right' width='5'>
                        
                    </Grid.Column>
                    <Grid.Column width='6'>
                    </Grid.Column>
                    <Grid.Column floated='left' width='5'>
                        
                    </Grid.Column>
                </Grid.Row>


            </Grid>
        </div>
    );
    }
}