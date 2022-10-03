import React, { Component } from "react";
import "./css/landing.css";
import {
  AnimatedBannerPage,
  WhoAreWePage,
  GalleryPage,
  AboutUsAndAcheivements,
  ContactUs,
} from "./landingPage/";
import About from "./landingPage/About";
import { SideNavMob } from "../components";
import { Icon, Button, Divider } from "semantic-ui-react";
import { db } from "../services/google-firebase/setup";

document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    if (document.getElementsByClassName("loadScreen")[0]) {
      document.getElementsByClassName("loadScreen")[0].style.display = "none";
    }
    setInterval(() => {
      if (document.getElementsByClassName("mainPageContent")[0]) {
        document.getElementsByClassName("mainPageContent")[0].style.opacity =
          "1.0";
      }
    }, 1000);
  }, 2000);
});
export default class LandingPage extends Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
    this.toggleSidebarVisibility = this.toggleSidebarVisibility.bind(this);
  }
  state = {
    visibility: false,
    percent: 0,
    intro: " ",
    contentAll: {
      stats: { competitions_participated: "12", "robots-made": "7" },
    },
  };
  async getPageData() {
    let content = await (
      await db.collection("content").doc("landing_page").get()
    ).data();
    this.setState({ intro: content.intro });
    this.setState({ contentAll: content });
  }
  toggleSidebarVisibility() {
    this.setState({ visibility: !this.state.visibility });
  }
  handleScrollingDown = (e, { calculations }) => {
    console.log(calculations);
  };
  async componentDidMount() {
    document.getElementsByClassName("firstPageMain")[0].style.backgroundImage =
      "url('/landingPageBackground.png')";
    this.getPageData();
  }
  render() {
    return (
      <div>
        {/* <Visibility continuous onOnScreen={this.handleScrollingDown}> */}
        <Button
          color="yellow"
          basic
          className="SideNavMobButton"
          onClick={this.toggleSidebarVisibility}
          icon
        >
          <Icon
            name={this.state.visibility ? "chevron right" : "chevron left"}
          />
        </Button>

        <SideNavMob
          visibility={this.state.visibility}
          visibilityToggle={this.toggleSidebarVisibility}
        ></SideNavMob>

        {/* SECTIONS/PAGES */}
        <AnimatedBannerPage />

        <Divider horizontal inverted>
          Who are we ?
        </Divider>
        <WhoAreWePage content={this.state.contentAll}></WhoAreWePage>

        <Divider horizontal inverted>
          Gallery
        </Divider>
        <GalleryPage />

        <Divider horizontal inverted>
          About Us
        </Divider>
        <AboutUsAndAcheivements />

        <About></About>

        <Divider horizontal inverted>
          Get in Touch
        </Divider>
        <ContactUs></ContactUs>
      </div>
    );
  }
}
