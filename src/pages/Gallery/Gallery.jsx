import React, { useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import { Segment, Label } from 'semantic-ui-react';
import ImageGallery from 'react-image-gallery';
import { Breadcrumb } from 'semantic-ui-react';

//CSS
import './Gallery.css';

//database from local
import { db } from '../../services/google-firebase/setup';

//loading screen (Red Spinner)
import Loader from '../../components/SpinnerLoadingScreen/Loader'

function Gallery() {
  // state = { images: [], }

  const [all_images, setImages] = useState([])

  const [loader, startLoading, stopLoading] = Loader();

  const history = useHistory();

  useEffect(() => {

    const image_array = []

    startLoading()

    db.collection('content/gallery/images').get()
      .then((images) => {
        console.log("Images ", images)
        images.forEach((image) => {
          console.log(image.data().link)

          let galleryImage = {
            original: image.data().link,
            thumbnail: image.data().link,
          };

          image_array.push(galleryImage)

          console.log("All Images array ", all_images)

        });
        setImages(image_array)
      });
  }, [])

  const handleBack = () => {
    history.push('/')
    console.log('Handle Back')
  }

  const sections = [
    { key: 'Home', content: 'Home', link: true, onClick: handleBack },
    { key: 'Gallery', content: 'Gallery', active: true },
  ]

  window.onload = function () {
    stopLoading()
  }

  return (
    <div className='galleryDiv'>
      {loader}
      <Segment inverted>
        <Label color='red' attached='top left'>
          <Breadcrumb icon='right angle' sections={sections} />
        </Label>
        <ImageGallery items={all_images} showFullscreenButton={false} showPlayButton={false} showNav={false} showBullets={true} />
      </Segment>
    </div>
  );
}

export default Gallery


