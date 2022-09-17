import React, { Component } from "react";
import {
  Grid,
  Segment,
  Header,
  Image,
  Icon,
  Card,
  Button,
} from "semantic-ui-react";
import MiscCard from "./MiscCard";
const mainData =
  "React Responsive Carousel lightweight and fully customizable carousel component for React . Powerful, lightweight and fully customizable carousel component for React apps. Things here are running very slowly as I have a lot of other stuff to take care at the moment so please don't be upset if I don't answer your question or if a PR sits unreviewed for a few days or weeks. Anyone interested in helping it move faster can help by submitting or reviewing PR's and answering each other's questions.";
export default class BlogCard extends Component {
  render() {
    return (
      <div>
        <Grid stackable relaxed centered columns={3} divided>
          <Grid.Row>
            <MiscCard mainData={mainData}></MiscCard>
            <MiscCard mainData={mainData}></MiscCard>
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
