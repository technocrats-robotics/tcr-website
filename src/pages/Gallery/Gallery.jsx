import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default class Gallery extends Component {
  render() {

const src = 'https://react.semantic-ui.com/images/wireframe/image.png';
    return(
        <div>
            <Grid centered stackable>
                <div className='mainImage'>
                </div>
                <Grid.Row columns='6'>
                <Image.Group size='tiny'>
                    <Image src={src} />
                    <Image src={src} />
                    <Image src={src} />
                    <Image src={src} />
                </Image.Group>
                </Grid.Row>
            </Grid>
        </div>
    );
    }
}
