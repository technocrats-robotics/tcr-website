import React, { Component } from "react";
import { Grid, Header, Menu, Segment } from "semantic-ui-react";
import { MemberCard } from "../components";
import { db } from "../services/google-firebase/setup";
import Member from "../services/google-firebase/models/members/member";
import Role from "../services/google-firebase/models/members/role";
import { getCurrentTeamYear } from "../constants";

export default class TeamMembers extends Component {
  state = {
    activeItem: getCurrentTeamYear(),
    data: [],
    yearHeaders: [],
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name }, () => this.getSelectedTeam());
  };

  async getMemberData() {
    db.collection(Member.collectionName)
      .orderBy("name", "asc")
      .get()
      .then((documents) => {
        this.documents = documents;
        this.getSelectedTeam();
      });
    // console.log('getMemberData');
  }

  getSelectedTeam() {
    let tempArray = [];
    this.documents.forEach((doc) => {
      let details = doc.data();
      let selectedTeam = parseInt(this.state.activeItem);
      let roleForSelectedTeamYear =
        doc.data().roles[selectedTeam] ?? Role.ALUMNI;
      details["currentRole"] = roleForSelectedTeamYear;
      if (roleForSelectedTeamYear !== Role.ALUMNI) {
        tempArray.push(details);
      }
    });
    this.setState({ data: tempArray });
  }

  randomColor = () => {
    let colors = ["red", "green", "blue", "yellow"];
    let num = Math.floor(Math.random() * 4);
    return colors[num];
  };

  addShadow() {
    let imgBg = document.getElementsByClassName("faceimage");
    for (let i = 0; i < imgBg.length; i++) {
      let color = this.randomColor();
      if (imgBg[i].style.boxShadow === "") {
        imgBg[i].style.boxShadow = "0px 5px 4px 0px " + color;
        document.getElementsByClassName('membercard')[i].addEventListener("click", (e) => {
          console.log(e.target);
          if (document.getElementsByClassName('membercard')[i].style.webkitTransform === "rotateY(0.5turn)") {
            document.getElementsByClassName('membercard')[i].style.cssText = "-webkit-transform: rotateY(0turn);transform: rotateY(0turn);box-shadow:0px 0px 0px 0px #c1930c;border-radius: 5px;";
          }
          else {
            document.getElementsByClassName('membercard')[i].style.cssText = "-webkit-transform: rotateY(0.5turn);transform: rotateY(0.5turn);box-shadow:0px 2px 4px 0px #c1930c;border-radius: 5px;";
            setTimeout(() => {
              document.getElementsByClassName('membercard')[i].style.cssText = "-webkit-transform: rotateY(0turn);transform: rotateY(0turn);box-shadow:0px 0px 0px 0px #c1930c;border-radius: 5px;";
            }, 3000)
          }
        }
        )
      }
    }
  }

  componentDidMount() {
    this.getMemberData();
    let currentYear = getCurrentTeamYear();
    let tempyearHeaders = [];
    // console.log(currentYear)
    for (let i = currentYear; i > 2013; i--) {
      tempyearHeaders.push(i);
    }
    tempyearHeaders = [...new Set(tempyearHeaders)];
    this.setState({ yearHeaders: tempyearHeaders });
  }

  componentDidUpdate() {
    this.addShadow();
  }

  handleBack = () => {
    this.props.history.push("/");
  };
  render() {
    const { activeItem } = this.state;
    // const sections = [
    //     { key: 'Home', content: 'Home', link: true, onClick:this.handleBack },
    //     { key: 'Team', content: 'Gallery', active: true },
    // ]
    return (
      <div className="secondAboutPage">
        <Segment inverted>
          <Header textAlign="center" inverted size="huge">
            The Team
          </Header>
          {/* <Label color='red' attached='top left'>
                        <Breadcrumb icon='right angle' sections={sections} />
                    </Label>         */}
          <Menu
            attached="top"
            tabular
            inverted
            pointing
            secondary
            className="blogMenuTop"
            size="huge"
            fluid
          >
            {this.state.yearHeaders.map((year) => {
              return (
                <Menu.Item
                  inverted="true"
                  name={year.toString()}
                  key={year.toString()}
                  active={activeItem.toString() === year.toString()}
                  onClick={this.handleItemClick}
                />
              );
            })}
          </Menu>
          <Grid centered doubling stackable>
            <Grid.Row columns={6}>
              {this.state.data.map((member) =>
                member.isActive ? (
                  <Grid.Column
                    key={member.username}
                    computer={3}
                    mobile={4}
                    className="justToAlignMemberCards"
                  >
                    <MemberCard data={member}></MemberCard>
                  </Grid.Column>
                ) : null
              )}
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}
