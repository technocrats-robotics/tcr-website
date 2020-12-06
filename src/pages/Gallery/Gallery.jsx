import React, { Component } from 'react';
import { Grid, Image, Dimmer, Loader, Segment } from 'semantic-ui-react';
import './Gallery.css';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://technocrats-robotics.github.io/website/images/dragking.jpeg',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://technocrats-robotics.github.io/website/Gallery/images/thumbs/11.jpeg',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://technocrats-robotics.github.io/website/Gallery/images/fulls/01.jpeg',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://technocrats-robotics.github.io/website/Gallery/images/fulls/01.jpeg',
    thumbnail: 'https://technocrats-robotics.github.io/website/Gallery/images/fulls/01.jpeg',
  },
  {
    original: 'https://technocrats-robotics.github.io/website/Gallery/images/fulls/01.jpeg',
    thumbnail: 'https://technocrats-robotics.github.io/website/Gallery/images/fulls/01.jpeg',
  },
  {
    original: 'https://technocrats-robotics.github.io/website/Gallery/images/fulls/01.jpeg',
    thumbnail: 'https://technocrats-robotics.github.io/website/Gallery/images/fulls/01.jpeg',
  },
  {
    original: 'https://technocrats-robotics.github.io/website/Gallery/images/fulls/01.jpeg',
    thumbnail: 'https://technocrats-robotics.github.io/website/Gallery/images/fulls/01.jpeg',
  },
];

export default class Gallery extends Component {
    constructor(props){
        super(props);
    }
    
        
  render() {
    return(
        <div className='galleryDiv'>
            <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} showNav={false} showBullets={true} />;
        </div>
    );
    }
}