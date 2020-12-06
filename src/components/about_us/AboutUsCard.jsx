import React, { Component } from 'react';
import { Grid, Segment, Header,Image, Icon, Card, Button } from 'semantic-ui-react';
import './AboutUsCard.css';

export default class AboutUsCard extends Component {
  render() {
    return(
        <div>
            <div class="aboutuscard">
                    <div class="card__face card__face--front">             
                        <Image className='faceimage' size='small' avatar src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
                        <Header inverted>
                            Daniel
                            <Header.Subheader>2017 CSE</Header.Subheader>
                        </Header>
                    </div>
                    <div class="card__face card__face--back">
                    <Header inverted>
                            Daniel
                            <Header.Subheader className='blue'>2017 CSE</Header.Subheader>
                            <Header.Content as={'h6'} >
                            By the same illusion which lis the horizon of the sea to the level of the spectator on a hil.lside, the sable.
                            </Header.Content>
                        </Header>
                    </div>
            </div>
        </div>
    );
    }
}