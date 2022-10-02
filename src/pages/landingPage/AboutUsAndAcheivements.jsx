import React, { PureComponent } from "react";
import {
  Grid,
  GridRow,
} from "semantic-ui-react";
import { InfoCard } from "../../components";

export default class AboutUsAndAcheivements extends PureComponent {
  render() {
    return (
      <div className="firstAboutPage">
        <Grid centered stackable>
          <GridRow>
          </GridRow>
          <GridRow centered>
            <InfoCard></InfoCard>
          </GridRow>
        </Grid>
      </div>
    );
  }
}
