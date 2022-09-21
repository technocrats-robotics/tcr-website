import React, { Component } from "react";
import { Header, Image, Button } from "semantic-ui-react";
import "./css/developer-card.css";

export default class DeveloperCard extends Component {
  constructor(props) {
    super(props);
    // console.log(props.data.social_media);
    console.log(props.data);
    console.log("Dev Card");
  }
  openLink = (url) => {
    window.open(url, "_blank");
  };

  handleUpdate = (e, { calculations }) => { };

  render() {
    return (
      <div className="devcard">
        <div className="dev__face dev__face--front">
          <Image
            className="devfaceimage"
            size="small"
            avatar
            src={
              this.props.data.dpLink != null
                ? this.props.data.dpLink
                : "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
            }
          />
          <Header inverted className="devNameHeading">
            $ {this.props.data.name}
            <Header.Subheader>{this.props.data.currentRole}</Header.Subheader>
          </Header>
        </div>
        <div className="dev__face dev__face--back">
          <div className="devpaddingMockBlock">
            <Header
              as={"p"}
              color="yellow"
              inverted
              className="devafterMockBlock"
            >
              {this.props.data.about.experience}
              {
                <div className="devsocial_icons">
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
          <Header inverted className="devNameHeading">
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
