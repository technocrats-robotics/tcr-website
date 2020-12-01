import React, { Component } from 'react';
import { Grid, Segment, Header,Image, Icon, Card, Button } from 'semantic-ui-react';
import './misccard.css';

export default class MiscCard extends Component {
  render() {
    return(
        <div className="postlayer1">
            <div className="postlayer2">
                <div className="postlayer3">
                    <div className="mainLayerFront">
                        {this.props.mainContent}
                        This is the front.
                    </div>
                    <div className="mainLayerBack" >
                        <Card className='customBlogCard'>
                        <Card.Content>
                            <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                            />
                            <Card.Header>Steve Sanders</Card.Header>
                            <Card.Meta>Friends of Elliot</Card.Meta>
                            <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                            </div>
                        </Card.Content>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}