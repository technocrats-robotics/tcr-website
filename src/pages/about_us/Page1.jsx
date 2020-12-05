import React, { Component } from 'react';
import { Grid, Segment, Header,Image, GridRow, GridColumn } from 'semantic-ui-react';
import AboutUsCard from '../../components/about_us/AboutUsCard';
import InfoCard from '../../components/about_us/InfoCard';
import InfoCard2 from '../../components/about_us/InfoCard2';

export default class Page1 extends Component {
  render() {
    return(
        <div className='firstPage'>
            <Grid centered>
                <GridRow>
                    <InfoCard></InfoCard>
                </GridRow>
                <GridRow>
                    <InfoCard2></InfoCard2>
                </GridRow>
                <GridRow>
                    <InfoCard></InfoCard>
                </GridRow>
            </Grid>
        </div>
    );
    }
}