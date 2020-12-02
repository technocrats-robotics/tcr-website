import React,{Component} from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Card,Image,Grid, GridColumn, CardContent,Segment, GridRow,Header } from "semantic-ui-react";

export default class Page4 extends Component {
    render(){
  return(
    <div className="fourthPage">
                <Carousel>
                <div>
                <Segment fluid inverted color='black'>
                    <Grid stackable>
                    <GridRow>
                    <GridColumn mobile={16} tablet={8} computer={4} color='red'>
                        <Image size='big' />
                        <Header style={{color: 'white'}}></Header>
                    </GridColumn>
                    <GridColumn mobile={16} tablet={8} computer={4} color='pink'>
                    </GridColumn>
                    </GridRow>
                    </Grid>
                </Segment>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="assets/4.jpeg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="assets/5.jpeg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="assets/6.jpeg" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
    </div>
    
   )
  }
}
