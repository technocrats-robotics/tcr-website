import React, { useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import { Segment, Label } from 'semantic-ui-react';
import ImageGallery from 'react-image-gallery';
import { Breadcrumb } from 'semantic-ui-react';

//CSS
import './Gallery.css';

//loading screen (Red Spinner)
import Loader from '../../components/SpinnerLoadingScreen/Loader'

const axios=require('axios')

function Gallery() {

  const [images, setImages] = useState(null)

  const [loader, startLoading, stopLoading] = Loader();

  const history = useHistory();

  useEffect(async() => {

    startLoading();

    let shouldCancel = false
    
    const response = await axios.get(
      'https://tcr-mail-utility.herokuapp.com/gallery'
    );
    if (!shouldCancel && response.data && response.data.length > 0) {
      setImages(response.data.map(url => ({
        original: `${url}=w1024`,
        thumbnail: `${url}=w100`
      })))
      stopLoading();
    }

    return () => shouldCancel = true;

    }, [])


  const handleBack = () => {
    history.push('/')
  }

  const sections = [
    { key: 'Home', content: 'Home', link: true, onClick: handleBack },
    { key: 'Gallery', content: 'Gallery', active: true },
  ]

  return (
    <div className='galleryDiv'>
      {loader}
      <Segment inverted>
        <Label color='red' attached='top left'>
          <Breadcrumb icon='right angle' sections={sections} />
        </Label>
        {
          images ? <ImageGallery items={images} showFullscreenButton={true} showPlayButton={true} showNav={true} showBullets={true} /> : null
        }
        
      </Segment>
    </div>
  );
}

export default Gallery



/**
 * Reference:-
 * https://medium.com/@ValentinHervieu/how-i-used-google-photos-to-host-my-website-pictures-gallery-d49f037c8e3c
 */


