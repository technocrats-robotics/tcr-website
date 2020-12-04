import React, { Component } from 'react';
import { Grid, Segment, Header,Image, Icon, Card, Button } from 'semantic-ui-react';

export default class AboutUsCard extends Component {
  render() {
    return(
        <div>
            <Grid stackable relaxed centered columns={3} divided>
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