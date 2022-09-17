import React, { Component } from "react";
import {
  Grid,
  Header,
  Menu,
  Label,
  Segment,
  Icon,
  Breadcrumb,
} from "semantic-ui-react";
import { db } from "../../services/google-firebase/setup";
import Member from "../../services/google-firebase/models/members/member";
import DeveloperCard from "../../components/about_us/DeveloperCard";

var time = new Date();
function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
export default class TeamMembers extends Component {
  state = {
    data: [],
    yearHeaders: [],
  };

  tempArray = [];
  async getDeveloperData() {
    db.collection("content")
      .doc("developers")
      .get()
      .then((document) => {
        let devIds = document.data().memberIDs;
        devIds.forEach((dev) => {
          db.collection(Member.collectionName)
            .doc(dev)
            .get()
            .then((memberDev) => {
              let devDetails = memberDev.data();
              devDetails["currentRole"] = Member.getCurrentRole(
                devDetails.roles
              )[1];
              this.tempArray.push(devDetails);
              this.setState({ data: this.tempArray });
            });
        });
      });
  }

  componentDidMount() {
    this.getDeveloperData();
    document.getElementsByClassName("techStack")[0].style.height = "50vh";
    let techIcons = document.getElementsByClassName("techIcons");
    for (let i = 0; i < techIcons.length; i++) {
      document.getElementsByClassName("techIcons")[i].style.opacity = "1.0";
    }
    document.getElementsByClassName("techStack")[0].style.transition = "0s";
    dragElement(document.getElementsByClassName("techStack")[0]);
  }

  handleBack = () => {
    this.props.history.push("/");
  };
  render() {
    const sections = [
      { key: "Home", content: "Home", link: true, onClick: this.handleBack },
      { key: "Developers", content: "Developers", active: true },
    ];
    return (
      <div className="secondAboutPage">
        <Segment inverted>
          <Label as="a" color="red" attached="top left">
            <Breadcrumb icon="right angle" sections={sections} />
          </Label>
          <Header color="yellow" textAlign="center" inverted size="huge">
            Developers
          </Header>

          <Grid centered doubling stackable>
            <Grid.Row columns={6}>
              {this.state.data.map((member) => (
                <Grid.Column
                  key={member.username}
                  computer={4}
                  className="justToAlignMemberCards"
                >
                  <DeveloperCard data={member}></DeveloperCard>
                </Grid.Column>
              ))}
            </Grid.Row>
            <div className="techStack" stackable>
              <div className="disclaim">Handle With Care[Draggable]</div>
              <Icon
                color="yellow"
                className="techIcons"
                name="node"
                size="huge"
              />
              <Icon
                color="yellow"
                className="techIcons"
                name="react"
                size="huge"
              />
              <Icon
                color="yellow"
                className="techIcons"
                name="fire"
                size="huge"
              />
              <Icon
                color="yellow"
                className="techIcons"
                name="html5"
                size="huge"
              />
              <Icon
                color="yellow"
                className="techIcons"
                name="css3 alternate"
                size="huge"
              />
              <Icon
                color="yellow"
                className="techIcons"
                name="js"
                size="huge"
              />
              <div></div>
            </div>
          </Grid>
        </Segment>
      </div>
    );
  }
}
