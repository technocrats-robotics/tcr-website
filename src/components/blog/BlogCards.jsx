import React, { Component } from 'react';
import { Grid, Segment, Header,Image, Icon, Card, Button } from 'semantic-ui-react';
import MiscCard from './MiscCard';

export default class BlogCard extends Component {
  render() {
    return(
        <div>
            <Grid centered columns={3} divided>
              <Grid.Row>
                  <MiscCard></MiscCard>
                  <MiscCard></MiscCard>
                  <MiscCard></MiscCard>
              </Grid.Row>
              <Grid.Row>
                  <MiscCard></MiscCard>
                  <MiscCard></MiscCard>
                  <MiscCard></MiscCard>
              </Grid.Row>
              <Grid.Row>
                  <MiscCard></MiscCard>
                  <MiscCard></MiscCard>
                  <MiscCard></MiscCard>
              </Grid.Row>
            </Grid>
        </div>
    );
    }
}