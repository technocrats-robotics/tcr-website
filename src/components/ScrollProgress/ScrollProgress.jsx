import React from 'react';
import { Button, Progress } from 'semantic-ui-react'
import './ScrollProgress.css';

export default class ScrollProgress extends React.Component {

    render(props) {
        return (
          <div>
            <Progress percent={this.props.percent} color='yellow' />
          </div>
        )
      }
}