import React, { useState } from "react";
import { Segment } from "semantic-ui-react";
import ImageGallery from "react-image-gallery";
import { useAsyncEffect } from "use-async-effect";

//CSS
import "./Gallery.css";

// API TOKEN
import { API_TOKEN } from "../../constants";

const axios = require("axios");
// document.addEventListener("DOMContentLoaded", ()=>{
//   setInterval(()=>{
//       if(document.getElementsByClassName('loadScreenGallery')[0]){
//       document.getElementsByClassName('loadScreenGallery')[0].style.display='none';
//       }
//   },2000);
// });
function Gallery() {
  const [images, setImages] = useState(null);

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
      {/* <div className='loadScreenGallery'>
      <Icon size='massive' color='red' loading name='spinner' />
      </div> */}
      <Segment inverted>
        {/* <Label color='red' attached='top left'>
          <Breadcrumb icon='right angle' sections={sections} />
        </Label> */}
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
