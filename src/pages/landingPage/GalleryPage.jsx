import React, { Component, Suspense } from "react";
import {
  Grid,
  GridColumn,
  Button,
  Visibility,
  Placeholder,
  Icon,
} from "semantic-ui-react";

// import Gallery from '../Gallery/Gallery';

import { db } from "../../services/google-firebase/setup";

/**
 * @author
 * @function Page3
 **/

const Gallery = React.lazy(() => import("../../components/Gallery"));
export default class GalleryPage extends Component {
  state = {
    images: [],
    visible: false,
    activeItem: "collapse",
  };

  componentDidMount() {
    db.collection("content")
      .doc("gallery")
      .get()
      .then((doc) => {
        let imageIDs = doc.data().matrix;
        imageIDs.forEach((imageID) => {
          db.collection("content/gallery/images")
            .doc(imageID)
            .get()
            .then((image) => {
              this.state.images.push(image.data());
              this.setState(this.state);
            });
        });
      });
  }

  handleCollapse = () => {
    document
      .getElementsByClassName("thirdPage")[0]
      .scrollIntoView({ behavior: "smooth" });
    this.setState({ activeItem: "collapse" });
    // if(!x.matches){
    // setTimeout(()=>{window.scrollBy({top:150,behavior:'smooth'})},1000)
    // }
  };
  handleExpand = () => {
    document
      .getElementsByClassName("thirdPage")[0]
      .scrollIntoView({ behavior: "smooth" });
    this.setState({ activeItem: "expand" });
    // if(!x.matches){
    //     setTimeout(()=>{window.scrollBy({top:150,behavior:'smooth'})},1000)
    //     }
  };

  handleOnScreen = (e, { calculations }) => this.setState({ calculations });
  render() {
    return (
      <div className="thirdPage">
        <Grid centered>
          <GridColumn width={14}>
            <Suspense
              fallback={
                <Placeholder>
                  <Placeholder.Line />
                </Placeholder>
              }
            >
              <Visibility fireOnMount onOnScreen={this.handleOnScreen}>
                <div>
                  <ul id="hexGrid">
                    {this.state.activeItem === "collapse" &&
                      this.state.images.map((image) => {
                        return (
                          <li key={Math.random()} className="hex">
                            <div className="hexIn">
                              <span className="hexLink">
                                <img
                                  loading="lazy"
                                  className="grey"
                                  src={image.link}
                                  alt=""
                                />
                                <h1>{image.title}</h1>
                                <p>{image.desc ?? ""}</p>
                              </span>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </Visibility>
            </Suspense>
          </GridColumn>
          {this.state.activeItem === "expand" ? (
            <div>
              <Suspense
                fallback={
                  <Icon size="huge" color="red" loading name="spinner" />
                }
              >
                <Gallery></Gallery>
              </Suspense>
              <Button
                style={{ position: "fixed", top: 0, right: 40 }}
                onClick={this.handleCollapse}
                color="yellow"
                basic
              >
                Hide Gallery
              </Button>
            </div>
          ) : (
            <Grid.Row columns={16}>
              <Button
                style={{}}
                onClick={this.handleExpand}
                color="yellow"
                basic
              >
                View Gallery
              </Button>
            </Grid.Row>
          )}
        </Grid>
      </div>
    );
  }
}
