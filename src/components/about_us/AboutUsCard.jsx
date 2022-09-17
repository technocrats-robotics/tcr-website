import React, { Component } from "react";
import { Header, Button } from "semantic-ui-react";
import "./AboutUsCard.css";
import ProfilePic from "./ProfilePic";

export default class AboutUsCard extends Component {
  openLink = (url) => {
    window.open(url, "_blank");
  };

  handleUpdate = (e, { calculations }) => {};

  render() {
    return (
      <div className="aboutuscard">
        <div className="card__face card__face--front">
          <ProfilePic
            dpLink={this.props.data.dpLink}
            uname={this.props.data.username}
          />
          <Header inverted className="NameHeading">
            {this.props.data.name}
            <Header.Subheader>{this.props.data.currentRole}</Header.Subheader>
          </Header>
        </div>
        <div className="card__face card__face--back">
          <div className="paddingMockBlock">
            <Header color="yellow" inverted className="afterMockBlock">
              {this.props.data.about.misc}
              {
                <div className="social_icons">
                  {this.props.data.social_media &&
                    this.props.data.social_media.github && (
                      <Button
                        circular
                        basic
                        color="yellow"
                        onClick={() =>
                          this.openLink(this.props.data.social_media.github)
                        }
                        icon="github"
                      ></Button>
                    )}
                  {this.props.data.social_media &&
                    this.props.data.social_media.instagram && (
                      <Button
                        circular
                        basic
                        color="yellow"
                        onClick={() =>
                          this.openLink(this.props.data.social_media.instagram)
                        }
                        icon="instagram"
                      ></Button>
                    )}
                  {this.props.data.social_media &&
                    this.props.data.social_media.linkedIn && (
                      <Button
                        circular
                        basic
                        color="yellow"
                        onClick={() =>
                          this.openLink(this.props.data.social_media.linkedIn)
                        }
                        icon="linkedin"
                      ></Button>
                    )}
                </div>
              }
            </Header>
          </div>
          <Header inverted className="NameHeading">
            {this.props.data.name}
            <Header.Subheader className="blue">
              {this.props.data.branch} - {this.props.data.yearOfJoining}
            </Header.Subheader>
          </Header>
        </div>
      </div>
    );
  }
}
