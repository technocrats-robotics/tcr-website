import React, { Component } from 'react';
import { Grid, Segment, Header,Image, Icon, Card, Button, Reveal } from 'semantic-ui-react';
import './misccard.css';

export default class MiscCard extends Component {
  render() {
    return(
        <div className="postlayer1">
            <div className="postlayer2">
                <div className="postlayer3">
                <Reveal animated='move'>
                                <Reveal.Content visible>
                                <div className="mainLayerFront">
                                    {this.props.mainContent}
                                    By the same illusion which lis the
                                    horizon of the sea to the level of
                                    the spectator on a hil.lside, the
                                    sable.

                                </div>
                                </Reveal.Content>
                                <Reveal.Content hidden className="mainLayerBack">
                                    <Card className='customBlogCard'>
                                    <Card.Content>
                                        <Image
                                        floated='left'
                                        size='large'
                                        avatar
                                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                                        />
                                        <Card.Header>Steve Sanders</Card.Header>
                                        <Card.Meta>Friends of Elliot</Card.Meta>
                                        
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui two buttons'>
                                        <Button.Group style={{marginLeft:'35px'}}>
                                        <Button>Cancel</Button>
                                        <Button.Or />
                                        <Button color='black'>Save</Button>
                                        </Button.Group>
                                        </div>
                                    </Card.Content>
                                    </Card>
                                </Reveal.Content>
                            </Reveal>
                </div>
            </div>
        </div>
    );
    }
}