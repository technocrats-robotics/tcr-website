import React from "react";
import { Menu, Sidebar, Button, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const SideNav = (props) => (
  <Sidebar
    as={Menu}
    animation="overlay"
    icon="labeled"
    inverted
    className="sidebarAdminPanel"
    direction="right"
    vertical
    visible={props.visibility}
    width="thin"
  >
    <Button color="red" onClick={props.visibilityToggle} icon circular>
      <Icon name="arrow right" />
    </Button>
    <NavLink exact className="nav item" to="/adminPanel/addMembers">
      {" "}
      Add Members
    </NavLink>
    <NavLink exact className="nav item" to="/adminPanel/manageMembers">
      {" "}
      Manage Members{" "}
    </NavLink>
    <NavLink exact className="nav item" to="/adminPanel/sendBulkMails">
      Send Emails{" "}
    </NavLink>
    <NavLink exact className="nav item" to="/adminPanel/makeAnnouncement">
      Make Announcement{" "}
    </NavLink>
  </Sidebar>
);

export default SideNav;
