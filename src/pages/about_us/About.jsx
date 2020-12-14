import React, { Component } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import './About.css';

export default class About extends Component {
  render() {
    return(
        <div>
            <Page1></Page1>
            <Page2></Page2>
        </div>
    );
    }
}