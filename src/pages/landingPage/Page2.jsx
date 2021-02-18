import React, { Component } from 'react';
import { Grid, Segment, Header,Statistic,Image,Icon, Transition, Visibility } from 'semantic-ui-react';
import ImageMat from '../../components/landingPage/ImageMat';
import IntroCard from '../../components/landingPage/IntroCard';

export default class Page2 extends Component {
   
    componentDidMount() {
        console.log(this.props);
    }
    state={visible: false}
    handleUpdate = (e, { calculations }) => {
        // console.log(calculations.topPassed)
        if(calculations.topVisible){
            this.setState({visible:true})
    }
    }

  render() {
    return(

        <div className="secondPage">
        <Visibility onUpdate={this.handleUpdate}>
        <Transition
         visible={this.state.visible} 
        animation='fade up' 
        duration={1600}
        >
            <Grid stackable centered>
                <Grid.Row mobile='16' className='IntroRow' textAlign='center'>
                    <Grid.Column textAlign='center' widescreen='6' computer='6' mobile='16'>
                        <IntroCard Introhead={'Technocrats Robotics'} 
                        // mainContent={<p className='IntroContent'>By the same illusion which lis the horizon of the sea to the level of the
                        //     spectator on a hillside, the sable cloud beneath was dished out, and the
                        //     car seemed to float in the middle of an immense dark sphere, whose
                        //     upper half was strewn with silver.</p>}>
                        mainContent={<p className='IntroContent'>
                            {this.props.content.intro}
                        </p>}>
                        </IntroCard>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row stackable mobile='15'>
                    <Grid.Column textAlign='center' width='5'>
                    <Statistic size='large' className='redStats' color='red' inverted>
                            <Statistic.Value>
                                {this.props.content.stats['competitions_participated']}
                            </Statistic.Value>
                            <Statistic.Label>Competitions</Statistic.Label>
                        </Statistic>
                    <Statistic size='large' className='redStats' color='green' inverted>
                        <Statistic.Value>
                            {this.props.content.stats['total_members']}
                        </Statistic.Value>
                        <Statistic.Label>Members</Statistic.Label>
                    </Statistic>
                    </Grid.Column>
      
                    <Grid.Column width='5'>
                        
                    <ImageMat></ImageMat>
                    </Grid.Column>
                    <Grid.Column textAlign='center' width='5'>
                    <Statistic mobile='16' inverted  className='yellowStats' size='large' color='blue'>
                        <Statistic.Value>
                            {this.props.content.stats['robots_made']}
                        </Statistic.Value>
                        <Statistic.Label>Robots Made</Statistic.Label>
                        </Statistic>
                        <Statistic mobile='16' inverted  className='yellowStats' size='large' color='yellow'>                       
                        <Statistic.Value>
                            {this.props.content.stats['memories']}
                        </Statistic.Value>
                        <Statistic.Label>Memories Made</Statistic.Label>
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
        </Transition>
        </Visibility>
        </div>
    );
    }
}