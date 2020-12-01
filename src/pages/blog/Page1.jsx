import React, { Component } from 'react';
import { Grid, Segment, Header,Image } from 'semantic-ui-react';
import MiscCard from '../../components/blog/MiscCard';

export default class ImageMat extends Component {
  render() {
    return(
        <div style={{textAlign:'center'}}>
            <MiscCard></MiscCard>
        </div>
    );
    }
}