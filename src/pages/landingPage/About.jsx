import React, { Component, Suspense } from "react";
import { Button, Icon } from "semantic-ui-react";
import TeamMembers from "../TeamMembers";
import "../css/about.css";

const TeamLeadsAndMembers = React.lazy(() => import("../../components/TeamLeadsAndMembers"));
// Lazyily Loading components require default export directly from the components
// reexport wont work here.

export default class About extends Component {
  state = {
    activeItem: "collapse",
  };

  handleCollapse = () => {
    document
      .getElementsByClassName("secondAboutPage")[0]
      .scrollIntoView({ behavior: "smooth" });
    this.setState({ activeItem: "collapse" });

  };
  handleExpand = () => {
    document
      .getElementsByClassName("secondAboutPage")[0]
      .scrollIntoView({ behavior: "smooth" });
    this.setState({ activeItem: "expand" });
  };
  render() {
    switch (this.state.activeItem) {
      case "expand":
        return (
          <div>
            <TeamMembers />;
            <Button
              style={{ position: "fixed", top: 0, right: 40 }}
              onClick={this.handleCollapse}
              color="yellow"
              basic
            >
              Collapse
            </Button>
          </div>
        );
      default:
        return (
          <div>
            <Suspense
              fallback={
                <div className="loadScreen">
                  <Icon size="massive" color="red" loading name="spinner" />
                </div>
              }
            >
              <TeamLeadsAndMembers />;
            </Suspense>
            <Button
              style={{ marginBottom: "3%" }}
              className="ExpandAboutButton"
              onClick={this.handleExpand}
              color="yellow"
              basic
            >
              Expand
            </Button>
          </div>
        );
    }
  }
}
