import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Grid, GridColumn, Button, Transition, Visibility} from 'semantic-ui-react';
import { db } from '../../services/google-firebase/setup';

/**
* @author
* @function Page3
**/

export default class Page3 extends Component {
  state = { images: [],visible: false }

  componentDidMount() {
    db.collection('content').doc('gallery').get()
    .then((doc) => {
      let imageIDs = doc.data().matrix;
      imageIDs.forEach(imageID => {
        db.collection('content/gallery/images').doc(imageID).get()
        .then((image) => {
          this.state.images.push(image.data());
          this.setState(this.state);
        })
      }); 
    })
  }   
  handleUpdate = (e, { calculations }) => {
      if(calculations.topVisible){
          this.setState({visible:true})
      }
  }

    render(){
  return(
    <div className="thirdPage">
    <Visibility onUpdate={this.handleUpdate}>
    <Transition visible={this.state.visible} animation='fade up' duration={1600}>
    <Grid centered>
        <GridColumn width={14}>
    <ul id="hexGrid">
      {
        this.state.images.map((image) => {
          return (
            <li className="hex">
              <div className="hexIn">
                <span className="hexLink">
                  <img className='grey' src={image.link} alt="" />
                  <h1>{image.title}</h1>
                  <p>{image.desc ?? ""}</p>
                </span>
              </div>
            </li>
          );
        })
      }        
    </ul>
    
    </GridColumn>
    
    <Grid.Row>
      <div>
        <Link to="/Gallery">
        <Button basic color='yellow'>Visit Gallery</Button>
        </Link>
      </div>
    </Grid.Row>
    </Grid>
    </Transition>
    </Visibility>
    </div>
   )
  }
}

