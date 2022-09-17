import React, { Component } from "react";

export default class Map extends Component {
  render() {
    return (
      <iframe
        title="Technocrats Robotics"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.003857257919!2d80.15438921482068!3d12.843026990940345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525927afa6b01f%3A0x3c20a15cc9f64aad!2sTechnocrats%20Robotics!5e0!3m2!1sen!2sin!4v1607768880310!5m2!1sen!2sin"
        frameborder="0"
        className="map"
        style={{ height: "60vh", width: "95%" }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    );
  }
}
