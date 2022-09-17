import React, { Component } from "react";
import "./Recruitments.css";

export default class RecruitmentForm extends Component {
  state = {
    visible: true,
  };
  componentDidMount() {
    // setInterval(()=>{
    //   this.setState({visible:!this.state.visible})
    // },1000)
  }
  render() {
    return (
      <div className="recruitInfo">
        <div className="recruitDiv1">
          <Label as="a" href={"/#"} left color="red">
            Back to Home Page
          </Label>
          <br></br>
          <iframe
            title="recruitmentForm"
            width="100%"
            height="640px"
            src="https://flzu5mig2qj.typeform.com/to/ejsxYIah"
            frameBorder="0"
            marginWidth="0"
            marginHeight="0"
            style={{
              border: "0px",
              scrollbarWidth: "0px",
              maxWidth: "100%",
              maxHeight: "100vh",
            }}
            allowfullscreen
            webkitallowfullscreen
            mozallowfullscreen
          >
            {" "}
          </iframe>
        </div>
      </div>
    );
  }
}
