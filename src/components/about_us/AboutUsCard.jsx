import React, { Component } from 'react';
import { Header, Image,Button, Visibility } from 'semantic-ui-react';
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

    handleUpdate = (e, { calculations }) => {
  
    } 

    render() {
        return (
            <div className="aboutuscard">
                
                <div className="card__face card__face--front">
                    <Image className='faceimage' size='small' avatar src={this.props.data.dpLink != null ? this.props.data.dpLink : 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg'} />
                    <Header inverted className='NameHeading'>
                        {this.props.data.name}
                        <Header.Subheader>
                            {this.props.data.currentRole}</Header.Subheader>
                    </Header>
                </div>
                <div className="card__face card__face--back">
                    <div className='paddingMockBlock'>
                    <Header as={'h4'} inverted className='afterMockBlock' >
                            {this.props.data.about.experience}
                            {
                            <div className="social_icons">
                                {
                                    (this.props.data.social_media && this.props.data.social_media.github) &&
                                    (<Button circular basic color='yellow' onClick={()=>this.openLink(this.props.data.social_media.github)} icon='github'></Button>)
                                }
                                {
                                    (this.props.data.social_media && this.props.data.social_media.instagram) &&
                                    (<Button circular basic color='yellow' onClick={()=>this.openLink(this.props.data.social_media.instagram)} icon='instagram' ></Button>)
                                }
                                {
                                    (this.props.data.social_media && this.props.data.social_media.linkedIn) &&
                                    (<Button circular basic color='yellow' onClick={()=>this.openLink(this.props.data.social_media.linkedIn)} icon='linkedin'></Button>)
                                }
                            </div>
                        }
                        </Header>
                    </div>
                    <Header inverted className='NameHeading'>
                        {this.props.data.name}
                        <Header.Subheader className='blue'>{this.props.data.branch} - {this.props.data.yearOfJoining}</Header.Subheader>
                    </Header>
                </div>
            </div>
        );
    }
}