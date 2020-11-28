import PropTypes from "prop-types";
import { Slide } from "pure-react-carousel";
import React from "react";
import { Card,Image,Grid, GridColumn, CardContent } from "semantic-ui-react";

const CustomCardSlide = ({ index, ...cardProps }) => (
  <Slide index={index}>
    <div style={{ padding: 10 }}>
    <Card fluid>
        <Grid columns={5}>
        <GridColumn width={3}>
            <Image size='medium' src={cardProps.image} />
        </GridColumn>
        <GridColumn width={2}>
            <CardContent>
                {cardProps.header}
            </CardContent>
        </GridColumn>
        </Grid>
    </Card>
    </div>
  </Slide>
);

CustomCardSlide.propTypes = {
  index: PropTypes.number.isRequired
};

export default CustomCardSlide;