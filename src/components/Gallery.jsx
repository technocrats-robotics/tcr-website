import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import ImageGallery from "react-image-gallery";
import { useAsyncEffect } from "use-async-effect";

//CSS
import "./css/gallery.css";

// API TOKEN
import { API_TOKEN } from "../constants";

const axios = require("axios");

function Gallery() {
  const [images, setImages] = useState(null);

  // const history = useHistory();

  useAsyncEffect(async () => {
    let shouldCancel = false;

    let token = API_TOKEN;

    const response = await axios
      .get("https://quiet-caverns-98688.herokuapp.com/gallery", {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });

    if (!shouldCancel && response.data && response.data.length > 0) {
      setImages(
        response.data.map((url) => ({
          original: `${url}=w1024`,
          thumbnail: `${url}=w100`,
        }))
      );
    }

    return () => (shouldCancel = true);
  }, []);

  return (
    <div className="galleryDiv">
      <Segment inverted>
        {images ? (
          <ImageGallery
            items={images}
            showFullscreenButton={true}
            showPlayButton={true}
            showNav={true}
            showBullets={true}
          />
        ) : null}
      </Segment>
    </div>
  );
}

export default Gallery;

/**
 * Reference:-
 * https://medium.com/@ValentinHervieu/how-i-used-google-photos-to-host-my-website-pictures-gallery-d49f037c8e3c
 */
