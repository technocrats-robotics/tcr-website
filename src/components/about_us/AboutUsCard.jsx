import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Header, Image, Icon, Card, Button } from 'semantic-ui-react';
import './AboutUsCard.css';

export default class AboutUsCard extends Component {
    constructor(props) {
        super(props);
        // console.log(props.data.social_media);
        console.log("About Us!!");
    }
    openLink = (url) => {
        window.open(url, '_blank');
    }

    render() {
        return (
            <div class="aboutuscard">
                <div class="card__face card__face--front">
                    <Image className='faceimage' size='small' avatar src={this.props.data.dpLink != null ? this.props.data.dpLink : 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg'} />
                    <Header inverted>
                        {this.props.data.name}
                        <Header.Subheader>
                            {this.props.data.branch}-{this.props.data.yearOfJoining}</Header.Subheader>
                    </Header>
                </div>
                <div class="card__face card__face--back">
                    <Header inverted>
                        {this.props.data.name}
                        <Header.Subheader className='blue'>{this.props.data.branch}-{this.props.data.yearOfJoining}</Header.Subheader>
                        <Header.Content as={'h6'} >
                            {this.props.data.about.experience}
                        </Header.Content>

                        {
                            <div className="social_icons">
                                {
                                    (this.props.data.social_media && this.props.data.social_media.github) &&
                                    (<Button primary onClick={()=>this.openLink("https://github.com/"+this.props.data.social_media.github)} icon='git'></Button>)
                                }
                                {
                                    (this.props.data.social_media && this.props.data.social_media.instagram) &&
                                    (<Button primary onClick={()=>this.openLink("https://instagram.com/"+this.props.data.social_media.instagram)} icon='instagram' ></Button>)
                                }
                                {
                                    (this.props.data.social_media && this.props.data.social_media.linkedIn) &&
                                    (<Button primary onClick={()=>this.openLink("https://linkedin.com/"+this.props.data.social_media.github)} icon='linkedin'></Button>)
                                }
                            </div>
                        }
                    </Header>
                </div>
            </div>
        );
    }
}