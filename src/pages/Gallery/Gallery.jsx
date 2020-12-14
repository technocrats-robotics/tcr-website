import React, { Component } from 'react';
import { Segment, Label } from 'semantic-ui-react';
import './Gallery.css';
import ImageGallery from 'react-image-gallery';
import { Breadcrumb } from 'semantic-ui-react';
import { db } from '../../services/google-firebase/setup';

export default class Gallery extends Component {
  state = { images: [], }

  componentDidMount() {
    db.collection('content/gallery/images').get()
    .then((images) => {
      images.forEach((image) => {
        let galleryImage = { 
          original: image.data().link,
          thumbnail: image.data().link,
        };
        this.state.images.push(galleryImage);
        this.setState(this.state);
      });      
    });
  }
  
  handleBack = () =>{
    this.props.history.push('/')
  }
        
  render() {

    const sections = [
      { key: 'Home', content: 'Home', link: true, onClick:this.handleBack },
      { key: 'Gallery', content: 'Gallery', active: true },
    ]

    return(
        <div className='galleryDiv'>
          <Segment inverted>
            <Label color='red' attached='top left'>
              <Breadcrumb icon='right angle' sections={sections} />
            </Label> 
            <ImageGallery items={this.state.images} showFullscreenButton={false} showPlayButton={false} showNav={false} showBullets={true} />
          </Segment>
        </div>
    );
    }
}
