import PropTypes from "prop-types";
import { Slide } from "pure-react-carousel";
import React from "react";
import { Card,Image,Grid, GridColumn, CardContent,Segment, GridRow,Header } from "semantic-ui-react";

const CustomCardSlide = ({ index, ...cardProps }) => (
  <Slide index={index}>
    <div>
    <Segment fluid inverted color='black'>
        <Grid columns={16}>
        <GridRow>
        <GridColumn width={4}>
            <Image size='big' src={cardProps.image} />
            <Header style={{color: 'white'}}>{cardProps.header} - {cardProps.meta}</Header>
        </GridColumn>
        <GridColumn width={12}>
        </GridColumn>
        </GridRow>
        </Grid>
    </Segment>
    </div>
  </Slide>
);

CustomCardSlide.propTypes = {
  index: PropTypes.number.isRequired
};

export default CustomCardSlide;