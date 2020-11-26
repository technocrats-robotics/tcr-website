import { render } from '@testing-library/react'
import React, { Component } from 'react';
import {Grid, GridColumn, GridRow, Header, Image, Segment} from 'semantic-ui-react';

/**
* @author
* @function Page3
**/

export default class Page3 extends Component {
    render(){
  return(
    <div className="thirdPage">
        <Grid verticalAlign='middle' columns={6} divided centered>
            <Grid.Row stretched>
            <Grid.Column>
                <Segment className='zoomthird'>
                <Image src={'https://react.semantic-ui.com/images/wireframe/image.png'} />
                </Segment>
                <Segment className='zoomthird'>
                <Image src={'https://react.semantic-ui.com/images/wireframe/image.png'} />
                </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment className='zoomthird'>
                <Image src={'https://react.semantic-ui.com/images/wireframe/image.png'} />
                </Segment>
                <Segment className='zoomthird'>
                <Image src={'https://react.semantic-ui.com/images/wireframe/image.png'} />
                </Segment>
                <Segment className='zoomthird'>
                <Image src={'https://react.semantic-ui.com/images/wireframe/image.png'} />
                </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment className='zoomthird'>
                <Image src={'https://react.semantic-ui.com/images/wireframe/image.png'} />
                </Segment>
                <Segment className='zoomthird'>
                <Image src={'https://react.semantic-ui.com/images/wireframe/image.png'} />
                </Segment>
            </Grid.Column>
            </Grid.Row>
        </Grid>

    </div>
   )
  }
}

