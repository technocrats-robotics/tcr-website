import React, { Component, Suspense } from "react";
import {
  Grid,
  Statistic,
  Transition,
  Visibility,
} from "semantic-ui-react";

const IntroCard = React.lazy(() =>
  import("../../components/landingPage/IntroCard")
);
const ImageMat = React.lazy(() =>
  import("../../components/landingPage/ImageMat")
);

export default class Page2 extends Component {
  yearSince = () => {
    var dateobj = new Date();
    var dateObject = dateobj.getFullYear();
    return dateObject - 2014;
  };
  aboutTCR = [
    "Team Technocrats Robotics is the official Robotics team under the aegis of VIT University, Chennai, comprising of the most driven, focused, and technologically inclined individuals belonging to a multitude of engineering backgrounds, whose common passion and expertise for robotics and automation brings them together. ",
    "'Technocrats Robotics’ work is an amalgamation of the multidisciplinary engineering approach that harbours consistence, excellence, perseverance and eventual success in all our endeavours so far.Having received prestigious accolades on the National and International level over the span of " +
      this.yearSince() +
      " years, our brief but prosperous history is testimony of our future. ",
    " We have been part of a plethora of national and international robotics competitions, regularly winning awards in most of them, starting from the Asia-Pacific International Robotics competition – “Robocon” in 2013. Having been a regular participant since then, the team has reached a level of success that few others can, especially considering a team this young.",
  ];
  state = { visible: false };
  handleUpdate = (_e, { calculations }) => {
    // console.log(calculations.topPassed)
    if (calculations.topVisible) {
      this.setState({ visible: true });
    }
  };

  render() {
    return (
      <div className="secondPage">
        <Visibility onUpdate={this.handleUpdate}>
          <Transition
            visible={this.state.visible}
            animation="fade up"
            duration={1600}
          >
            <Grid stackable centered>
              <Grid.Row columns={3} mobile="16" className="IntroRow" centered>
                <Grid.Column textAlign="center">
                  <br></br>
                  <Suspense fallback={<p>Loading</p>}>
                    <IntroCard
                      Introhead={"WHO"}
                      mainContent={
                        <p className="IntroContent">{this.aboutTCR[0]}</p>
                      }
                    ></IntroCard>
                  </Suspense>
                </Grid.Column>
                <Grid.Column>
                  <Suspense fallback={<p>Loading</p>}>
                    <IntroCard
                      Introhead={"ARE"}
                      mainContent={
                        <p className="IntroContent">{this.aboutTCR[1]}</p>
                      }
                    ></IntroCard>
                  </Suspense>
                </Grid.Column>
                <Grid.Column>
                  <Suspense fallback={<p>Loading</p>}>
                    <IntroCard
                      Introhead={"WE"}
                      mainContent={
                        <p className="IntroContent">{this.aboutTCR[2]}</p>
                      }
                    ></IntroCard>
                  </Suspense>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row stackable mobile="15">
                <Grid.Column textAlign="center" width="5">
                  <Statistic
                    size="large"
                    className="redStats"
                    color="red"
                    inverted
                  >
                    <Statistic.Value>
                      {this.props.content.stats["competitions_participated"]}
                    </Statistic.Value>
                    <Statistic.Label>Competitions</Statistic.Label>
                  </Statistic>
                  <Statistic
                    size="large"
                    className="redStats"
                    color="green"
                    inverted
                  >
                    <Statistic.Value>
                      {this.props.content.stats["total_members"]}
                    </Statistic.Value>
                    <Statistic.Label>Members</Statistic.Label>
                  </Statistic>
                </Grid.Column>

                <Grid.Column width="5">
                  <Suspense fallback={<p>Loading</p>}>
                    <ImageMat></ImageMat>
                  </Suspense>
                </Grid.Column>
                <Grid.Column textAlign="center" width="5">
                  <Statistic
                    mobile="16"
                    inverted
                    className="yellowStats"
                    size="large"
                    color="blue"
                  >
                    <Statistic.Value>
                      {this.props.content.stats["robots_made"]}
                    </Statistic.Value>
                    <Statistic.Label>Robots Made</Statistic.Label>
                  </Statistic>
                  <Statistic
                    mobile="16"
                    inverted
                    className="yellowStats"
                    size="large"
                    color="yellow"
                  >
                    <Statistic.Value>
                      {this.props.content.stats["memories"]}
                    </Statistic.Value>
                    <Statistic.Label>Memories Made</Statistic.Label>
                  </Statistic>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row only="computer" stackable mobile="16">
                <Grid.Column floated="right" width="5"></Grid.Column>
                <Grid.Column width="6"></Grid.Column>
                <Grid.Column floated="left" width="5"></Grid.Column>
              </Grid.Row>
            </Grid>
          </Transition>
        </Visibility>
      </div>
    );
  }
}
