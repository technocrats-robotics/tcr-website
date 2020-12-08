import React, { Component } from 'react';
import { Grid, Segment, Header,Image, Icon, Card, Button, Reveal } from 'semantic-ui-react';
import './misccard.css';

export default class MiscCard extends Component {
    constructor(props){
        super(props);
        this.buttonHandler = this.buttonHandler.bind(this);
    }
    buttonHandler(e){
        console.log('clicked');
        const cardContent = e.target.parentElement.parentElement.parentElement;
        console.log(e.target.parentElement.parentElement.parentElement);
        console.log(this.props.mainData);
    }
  render() {
    return(
        <div className="postlayer1">
            <div className="postlayer2">
                <div className="postlayer3">
                <Reveal animated='move' instant>
                        <Reveal.Content visible className="mainLayerFront">
                            {this.props.mainContent}
                            By the same illusion which lis the
                            horizon of the sea to the level of
                            the spectator on a hil.lside, the
                            sable.
                        </Reveal.Content>
                        <Reveal.Content hidden>
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
                                <div  onClick={this.buttonHandler} className='ui two buttons'>
                                <Button className='openBtns'>Open</Button>
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