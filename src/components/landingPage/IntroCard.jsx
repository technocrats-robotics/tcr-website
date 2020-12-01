import React, { Component } from 'react';
import { Grid, Segment, Header,Image, Icon } from 'semantic-ui-react';

export default class introCard extends Component {
  render() {
    return(
        <div className="postlayer1">
            <div className="postlayer2">
                <div className="postlayer3">
                    <div className="mainpostlayer">
                        <Header size="small" color='green'>{this.props.Introhead}</Header>
                        {this.props.mainContent}
                    </div>
                </div>
            </div>
        </div>
    );
    }
}