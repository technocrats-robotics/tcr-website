import React, { Component } from 'react';
import { Grid, Segment, Header,Image } from 'semantic-ui-react';
import Page1 from './Page1';
import './blog.css';

export default class Blog extends Component {
  render() {
    return(
        <div className='blogPage'>
            <Page1></Page1>
        </div>
    );
    }
}