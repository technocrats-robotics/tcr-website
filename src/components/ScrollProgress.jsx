import React from "react";
import { Progress } from "semantic-ui-react";
import "./css/scroll-progress.css";

export default class ScrollProgress extends React.Component {
  render(props) {
    return (
      <div>
        <Progress percent={this.props.percent} color="yellow" />
      </div>
    );
  }
}
