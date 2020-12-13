import React, { Component } from 'react';
import { Grid, Segment, Header,Image, Icon, Card, Button } from 'semantic-ui-react';
import './AboutUsCard.css';

export default class AboutUsCard extends Component {
    constructor(props){
        super(props);
        // console.log(props.data);
        // console.log("About Us!!")
    }
  render() {
    return(
            <div className="aboutuscard">
                    <div className="card__face card__face--front">             
                        <Image className='faceimage' size='small' avatar src={this.props.data.dpLink!=null?this.props.data.dpLink:'https://react.semantic-ui.com/images/avatar/large/daniel.jpg'} />
                        <Header inverted>
                            {this.props.data.name}
                            <Header.Subheader>
                            {this.props.data.currentRole} - {this.props.data.yearOfJoining}</Header.Subheader>
                        </Header>
                    </div>
                    <div className="card__face card__face--back">
                    <Header inverted>
                            {this.props.data.name}
                            <Header.Subheader className='blue'>{this.props.data.branch} - {this.props.data.yearOfJoining}</Header.Subheader>
                            <Header.Content as={'h6'} >
                            {this.props.data.about.experience}
                            </Header.Content>
                        </Header>
                    </div>
            </div>
    );
    }
}