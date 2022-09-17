import React, { Component } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  Grid,
  Segment,
  Header,
  Image,
  Icon,
  Card,
  Button,
  Visibility,
  Transition,
} from "semantic-ui-react";
import "./RecruitmentCard.css";

var x = window.matchMedia("(max-width: 900px)");
export default class Recruitments extends Component {
  cardStyle = x.matches ? { width: "90%" } : { width: "40%" };
  state = {
    visible: false,
  };
  expandInfo = (e) => {
    // e.style.cssText = "height:auto;box-shadow: 0px 2px 4px yellow;"
    let recruitText =
      e.target.parentElement.parentElement.parentElement.children[1];
    recruitText.style.display =
      recruitText.style.display === "block" ? "none" : "block";
    // console.log(e.target.parentElement.parentElement.parentElement.children[1]);
  };
  componentDidMount() {
    setTimeout(() => {
      setInterval(() => {
        this.setState({ visible: !this.state.visible });
      }, 1000);
    }, 3000);
  }
  render() {
    return (
      <Grid centered columns={10}>
        <div className="recruitmentCards" style={this.cardStyle}>
          <Grid.Row>
            <Header floated="left" color="grey" as="h2">
              <Icon
                onClick={this.expandInfo}
                color="yellow"
                size="mini"
                name="angle down"
              />
              {/* <Image size="mini" floated="left" name="arrow" />  */}
              {this.props.title}
            </Header>
          </Grid.Row>
          <div className="recruitText">{this.props.text}</div>
        </div>
      </Grid>
    );
  }
}
