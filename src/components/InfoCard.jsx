import React, { Component, Suspense } from "react";
import {
  Grid,
  Header,
  Image,
  Button,
  Visibility,
  Transition,
  Placeholder,
} from "semantic-ui-react";
import Achievements from "../services/google-firebase/models/achievements/achievements";
import "./css/info-card.css";

var x = window.matchMedia("(max-width: 900px)");
var maxAchievementCards = 2;
var cardIndex = (slide_index) => maxAchievementCards * slide_index;

export default class InfoCard extends Component {
  state = {
    achievements: [],
    slide_idx: 0,
    visible: true,
  };

  nextCards = () => {
    this.setState({
      visible: false,
      slide_idx: this.state.slide_idx + 1,
    });
    setTimeout(() => {
      this.setState({ visible: true });
    }, 1000);
  };

  prevCards = () => {
    this.setState({
      visible: false,
      slide_idx: this.state.slide_idx - 1,
    });
    setTimeout(() => {
      this.setState({ visible: true });
    }, 1000);
  };

  handleOnScreen = (e, { calculations }) => {
    if (x.matches) {
      let aboutUsCard = document.getElementsByClassName("row aboutCard");

      try {
        let passed = calculations.percentagePassed;
        aboutUsCard[0].style.boxShadow =
          passed < 0.02 && passed < 0.4
            ? "0px 2px 6px 0px blue"
            : "0px 0px 0px 0px blue";
        aboutUsCard[1].style.boxShadow =
          passed > 0.3 && passed < 0.6
            ? "0px 2px 6px 0px yellow"
            : "0px 0px 0px 0px yellow";
        aboutUsCard[2].style.boxShadow =
          passed > 0.5 && passed < 0.9
            ? "0px 2px 6px 0px green"
            : "0px 0px 0px 0px green";
      } catch (error) {
        console.log("Some error occured", e)
      }
    }
  };

  componentDidMount() {
    // Fetch the snapshot of documents in the 'achievements' collection
    Achievements.getAllAchievements()
      .then((documents) => {
        // Create a temporary data array for assigning it to 'achievements' state variable
        let temp_data = [];
        // Push the data in each document fetch to the temporary array
        documents.forEach((achievement) => temp_data.push(achievement.data()));
        // console.log(temp);   // Debugging

        // Set 'achievements' variable
        this.setState({
          achievements: temp_data,
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Error in getAllAchievements in InfoCard.jsx");
        console.error(errorCode);
        console.error(errorMessage);
      });
  }

  render() {
    return (
      <Visibility onUpdate={this.handleOnScreen}>
        <div>
          <Grid centered stackable columns={12}>
            <Transition.Group animation={"fade right"} duration={1000}>
              {
                // Check if the cards should be visible
                this.state.visible &&
                // Map the sliced cards to create an array of rendered components
                this.state.achievements
                  .slice(
                    cardIndex(this.state.slide_idx),
                    cardIndex(this.state.slide_idx + 1)
                  )
                  .map((card, card_index) => (
                    <Grid.Row key={Math.random()} className="aboutCard">
                      {card_index % 2 === 0 ? (
                        <Grid.Column
                          textAlign="center"
                          className="justToAlignImage"
                          mobile={8}
                          computer={4}
                        >
                          <Suspense fallback={<Placeholder />}>
                            <Image
                              style={{ objectFit: "contain" }}
                              className="thumbnail1"
                              src={
                                card.posterLink
                                  ? card.posterLink
                                  : "./TcrLogoClean.png"
                              }
                            />
                          </Suspense>
                        </Grid.Column>
                      ) : null}
                      <Grid.Column width={7}>
                        <Header>
                          <div className="title1">{card.header}</div>
                          <Header.Subheader className="paraCard">
                            {card.body}
                          </Header.Subheader>
                        </Header>
                      </Grid.Column>
                      {card_index % 2 !== 0 ? (
                        <Grid.Column
                          textAlign="center"
                          className="justToAlignImage"
                          mobile={8}
                          computer={4}
                        >
                          <Suspense fallback={<Placeholder />}>
                            <Image
                              style={{ objectFit: "contain" }}
                              className="thumbnail1"
                              src={
                                card.posterLink
                                  ? card.posterLink
                                  : "./TcrLogoClean.png"
                              }
                            />
                          </Suspense>
                        </Grid.Column>
                      ) : null}
                    </Grid.Row>
                  ))
              }

              <Grid.Row>
                <Button.Group>
                  <Button
                    labelPosition="left"
                    attached="left"
                    icon="left chevron"
                    content="Prev"
                    disabled={
                      this.state.achievements[
                      cardIndex(this.state.slide_idx - 1)
                      ] == null
                    }
                    className="nextPrevBtns"
                    onClick={this.prevCards}
                    color="yellow"
                    basic
                  />

                  <Button
                    labelPosition="right"
                    attached="right"
                    icon="right chevron"
                    content="Next"
                    disabled={
                      this.state.achievements[
                      cardIndex(this.state.slide_idx + 1)
                      ] == null
                    }
                    className="nextPrevBtns"
                    onClick={this.nextCards}
                    color="yellow"
                    basic
                  />
                </Button.Group>
              </Grid.Row>
            </Transition.Group>
          </Grid>
        </div>
      </Visibility>
    );
  }
}
