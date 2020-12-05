import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import './Gallery.css';

export default class Gallery extends Component {
  render() {

const src = 'https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg';
const images = [src,src,src,src,src,src,src,src,src]
    return(
        <div>
            <Grid centered stackable>
                <div className='mainImage'>
                    <div className='leftDiv'></div>
                    <div className='rightDiv'></div>
                </div>
                <div  className='gallerSlider'>
                <Image.Group size='tiny'>
                    {
                        images.map((image)=>(        
                            <div className='galleryImages'><Image src={image} /></div>
                        ))
                    }
                </Image.Group>
                </div>
            </Grid>
        </div>
    );
    }
}
