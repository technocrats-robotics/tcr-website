/*
import { render } from '@testing-library/react'
import React, { Component } from 'react';
import {Grid, GridColumn, GridRow,Card,Icon, Image,Header} from 'semantic-ui-react';

/**
* @author
* @function Page3
**/
/**** 
export default class Page3 extends Component {
    render(){
  return(
    <div className="fourthPage">
        <Header textAlign='center' color='teal'>Testimonials</Header>
        <Grid verticalAlign='middle' columns={6} divided centered>
            <GridColumn>
            <Card className='zoomfourth'>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    22 Friends
                </a>
                </Card.Content>
                </Card>
            </GridColumn>
            <GridColumn>
            <Card className='zoomfourth'>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    22 Friends
                </a>
                </Card.Content>
                </Card>
            </GridColumn>
            <GridColumn>
            <Card className='zoomfourth'>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    22 Friends
                </a>
                </Card.Content>
                </Card>
            </GridColumn>
        </Grid>

    </div>
    
   )
  }
}
*/
/*
import  React  from  'react';
import  Carousel  from  'semantic-ui-carousel-react';
import { Image, Button,Card,Icon } from  'semantic-ui-react'
const  Page3  = () => {
	let  elements  = [
		{
			render:()=>{
				return(
                <Card fluid color='black'>
                <Image src='' wrapped ui={false} />
                <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    22 Friends
                </a>
                </Card.Content>
                </Card>
                )
			}
		},
		{
			render:()=>{
				return(
                <Card fluid color='black'>
                <Image src='' wrapped ui={false} />
                <Card.Content>
                <Card.Header>Bill</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    22 Friends
                </a>
                </Card.Content>
                </Card>
                )
			}
	    },
	]
	return (
		<div className='fourthPage'>
			<Carousel
                className='carousel'
				elements  =  {  elements  }
				duration  ={10000}
				animation  ='fade left'
				showNextPrev  =  {false}
				showIndicators  ={true}
			/>
		</div>
	)

}
export  default  Page3;
*/

import { render } from '@testing-library/react'
import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import {Grid, GridColumn, GridRow,Card,Icon, Image,Header} from 'semantic-ui-react';

/**
* @author
* @function Page4
**/

export default class Page4 extends Component {
    render(){
  return(
    <div className="fourthPage">
        <Grid>
            <GridRow>
                <GridColumn>
                <Header as='h1' icon textAlign='center' inverted color='grey'>
                    <Icon inverted name='users' circular />
                    <Header.Content >Testimonials</Header.Content>
                </Header>
                <Carousel />
                </GridColumn>
            </GridRow>
        </Grid>
    </div>
    
   )
  }
}

