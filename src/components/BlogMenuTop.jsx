import React, { Component } from "react";
import { Menu, Input } from "semantic-ui-react";

export default class BlogMenuTop extends Component {
  state = { activeItem: "Recent" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu
          attached="top"
          tabular
          inverted
          pointing
          secondary
          className="blogMenuTop"
          size="huge"
          fluid
        >
          <Menu.Item
            inverted
            name="Recent"
            active={activeItem === "Recent"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            inverted
            name="Older"
            active={activeItem === "Older"}
            onClick={this.handleItemClick}
          />
          <Input
            inverted
            transparent
            icon={{ name: "search", link: true }}
            placeholder="Search..."
            size="large"
          />
        </Menu>
      </div>
    );
  }
}
