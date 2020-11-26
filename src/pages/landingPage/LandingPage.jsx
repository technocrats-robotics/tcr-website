import React, { Component } from 'react';
import './landing.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

export default class LandingPage extends Component {
  render() {
    return(
        <div>
            <Page1></Page1>
            <Page2></Page2>
            <Page3></Page3>
            <Page4></Page4>
        </div>
    );
    }
}
