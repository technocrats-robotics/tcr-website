import PropTypes from "prop-types";
import { Slide } from "pure-react-carousel";
import React from "react";
import {
  Card,
  Image,
  Grid,
  GridColumn,
  CardContent,
  Segment,
  GridRow,
  Header,
} from "semantic-ui-react";

const CustomCardSlide = ({ index, ...cardProps }) => (
  <Slide index={index}>
    <div>
      <Segment fluid inverted color="black">
        <Grid columns={2} stackable>
          <GridColumn width={4}>
            <Image src={cardProps.image} />
            <Header style={{ color: "white" }}>
              {cardProps.header} - {cardProps.meta}
            </Header>
          </GridColumn>
          <GridColumn width={12}>
            By the same illusion which lis the horizon of the sea to the level
            of the spectator on a hillside, the sable cloud beneath was dished
            out, and the car seemed to float in the middle of an immense dark
            sphere, whose upper half was strewn with silver.
          </GridColumn>
        </Grid>
      </Segment>
    </div>
  </Slide>
);

CustomCardSlide.propTypes = {
  index: PropTypes.number.isRequired,
};

export default CustomCardSlide;
