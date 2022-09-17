import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import "./introcard.css";

export default class introCard extends Component {
  render() {
    return (
      <div className="introlayer1">
        <div className="introlayer2">
          <div className="introlayer3">
            <div className="mainintrolayer">
              <Header size="small" color="green">
                {this.props.Introhead}
              </Header>
              {this.props.mainContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
