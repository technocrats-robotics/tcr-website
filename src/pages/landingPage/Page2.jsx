import React, { Component } from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import ImageMat from '../../components/landingPage/ImageMat';

export default class Page2 extends Component {
  render() {
    return(
        <div className="firstPage">
            <Grid centered>
                <Grid.Row textAlign='center'>
                    <Grid.Column width='6' style={{backgroundColor:'blue'}}>
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
                    <Grid.Column width='6'>
                        <ImageMat></ImageMat>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
    }
}