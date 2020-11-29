import React from 'react';
import { Button, Progress } from 'semantic-ui-react'
import './ScrollProgress.css';

export default class ScrollProgress extends React.Component {
    // myFunc = () => {
    // var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    // var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // var scrolled = (winScroll / height) * 100;
    // // document.getElementById("myBar").style.width = scrolled + "%";
    // this.setState({percent: scrolled});
    // }
    
    render(props) {
        return (
          <div>
            <Progress percent={this.props.percent} indicating />
          </div>
        )
      }
}