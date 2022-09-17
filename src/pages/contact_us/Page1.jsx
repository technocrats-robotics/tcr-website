import React, { Component, Suspense } from "react";
import {
  Grid,
  Segment,
  Label,
  Header,
  Image,
  GridRow,
  GridColumn,
  Form,
  Button,
  Icon,
  Visibility,
  Placeholder,
} from "semantic-ui-react";

import { Link } from "react-router-dom";
const ContactForm = React.lazy(() =>
  import("./../../components/contact_us/ContactForm")
);
const Map = React.lazy(() => import("./../../components/contact_us/Map"));
export default class Page1 extends Component {
  handleUpdate = (e, { calculations }) => {
    if (calculations.topVisible) {
      document.getElementsByClassName("landingFooter")[0].style.boxShadow =
        "0px 20px 40px yellow";
    } else {
      document.getElementsByClassName("landingFooter")[0].style.boxShadow =
        "0px 10px 20px black";
    }
  };

  openLink = (url) => {
    window.open(url, "_blank");
  };
  render() {
    return (
      <div className="firstPageContactUs">
        <Grid stackable inverted divided centered>
          <GridRow>
            <GridColumn computer={6}>
              <Header inverted size="large">
                <Icon name="mail"></Icon>
                Leave us a message
              </Header>

              <Suspense
                fallback={
                  <Placeholder inverted>
                    <Placeholder.Image rectangular />
                  </Placeholder>
                }
              >
                <ContactForm></ContactForm>
              </Suspense>
            </GridColumn>
            <GridColumn className="map" computer={6}>
              <Header inverted size="large">
                Location
                <Icon name="map marker alternate"></Icon>
              </Header>
              <Suspense
                fallback={
                  <Placeholder inverted>
                    <Placeholder.Image rectangular />
                  </Placeholder>
                }
              >
                <Map></Map>
              </Suspense>
            </GridColumn>
          </GridRow>
          <GridRow></GridRow>
          <GridRow className="landingFooter" columns={16}>
            <form>
              <script
                src="https://checkout.razorpay.com/v1/payment-button.js"
                data-payment_button_id="pl_Hcefsl9rqZwuud"
                async
              >
                {" "}
              </script>{" "}
            </form>

            <div>
              <Segment raised size="massive" fluid inverted>
                <Button
                  onClick={() =>
                    this.openLink(
                      "https://www.instagram.com/technocratsrobotics/"
                    )
                  }
                  circular
                  color="black"
                  icon="instagram"
                />
                <Button
                  onClick={() =>
                    this.openLink("https://twitter.com/technocratsr")
                  }
                  circular
                  color="black"
                  icon="twitter"
                />
                <Button
                  onClick={() =>
                    this.openLink(
                      "https://www.linkedin.com/company/technocrats-robotics-vit"
                    )
                  }
                  circular
                  color="black"
                  icon="linkedin"
                />
                <Button
                  onClick={() =>
                    this.openLink(
                      "https://www.facebook.com/technocratsrobotics/"
                    )
                  }
                  circular
                  color="black"
                  icon="facebook"
                />
                <Button
                  onClick={() => this.openLink("https://rzp.io/i/7AIk4rV")}
                  circular
                  color="red"
                  icon="facebook"
                >
                  Donate Us
                </Button>
              </Segment>
              <Visibility onUpdate={this.handleUpdate}>
                <Segment inverted>
                  Made with <Icon color="red" name="heart"></Icon>by Technocrats
                  Robotics&nbsp;|&nbsp;
                  <Link to="/developers">
                    <Button circular compact basic color="yellow">
                      Developer's Space
                    </Button>
                  </Link>
                  &nbsp;|&nbsp;
                  <Link to="/userPanel">
                    <Button circular compact basic color="yellow">
                      Member Login
                    </Button>
                  </Link>
                  <br></br>
                  <br></br>
                </Segment>
              </Visibility>
            </div>
          </GridRow>
        </Grid>
      </div>
    );
  }
}
