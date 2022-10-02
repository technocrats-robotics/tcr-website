import React, { PureComponent } from "react";
import {
  Grid,
  Header,
  Label,
  GridColumn,
  Menu,
  GridRow,
  Icon,
} from "semantic-ui-react";
import BlogCards from "./BlogCards";
import BlogMenuTop from "./BlogMenuTop";
export default class BlogSection extends PureComponent {
  state = { activeItem: "home" };
  handleItemClick = (_e, { name }) => this.setState({ activeItem: name });

  handleBack = () => {
    this.props.history.push("/");
  };
  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Grid columns={12} centered>
          <GridRow>
            <Label
              onClick={this.handleBack}
              as="a"
              color="red"
              ribbon="left"
              attached="top left"
            >
              <Icon name="left arrow" /> Back
            </Label>
            <Header as="h1" inverted textAlign="left">
              <Icon name="book" />
              <Header.Content>
                Team Technocrats - Blog
                <Header.Subheader>
                  Checkout our most recent blog posts
                </Header.Subheader>
              </Header.Content>
            </Header>
          </GridRow>
          <BlogMenuTop></BlogMenuTop>
          <GridRow>
            <GridColumn width={10}>
              <BlogCards></BlogCards>
            </GridColumn>
            <GridColumn only="computer" width={4}>
              <Menu secondary inverted vertical pointing size="massive">
                <Menu.Item
                  name="home"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="messages"
                  active={activeItem === "messages"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="friends"
                  active={activeItem === "friends"}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </GridColumn>
          </GridRow>
        </Grid>
      </div>
    );
  }
}
