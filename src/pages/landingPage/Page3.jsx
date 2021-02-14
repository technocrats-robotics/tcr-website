import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Grid, GridColumn, Button, Transition, Visibility} from 'semantic-ui-react';

import Gallery from '../Gallery/Gallery';

import { db } from '../../services/google-firebase/setup';
var x = window.matchMedia("(max-width: 700px)")

/**
* @author
* @function Page3
**/

export default class Page3 extends Component {
  state = { images: [
    {
      title:'',
      desc:'',
      link:'https://firebasestorage.googleapis.com/v0/b/technocrats-website.appspot.com/o/5%20(1).JPG?alt=media&token=0ee3d4bb-6318-47bd-bac0-ea1725718e0f'
    },
    {
      title:'',
      desc:'',
      link:'https://firebasestorage.googleapis.com/v0/b/technocrats-website.appspot.com/o/dragking.jpeg?alt=media&token=76ca47a9-66da-4027-a478-9f8319282726'
    },
    {
      title:'',
      desc:'',
      link:'https://firebasestorage.googleapis.com/v0/b/technocrats-website.appspot.com/o/IMG_5945.JPG?alt=media&token=ebb5708c-ec31-4f91-9522-559e912d8a8c'
    },
    {
      title:'',
      desc:'',
      link:'https://firebasestorage.googleapis.com/v0/b/technocrats-website.appspot.com/o/IMG_4232.JPG?alt=media&token=7f1daeb6-427b-4d8c-80b9-3369c2414f34'
    },
    {
      title:'',
      desc:'',
      link:'https://firebasestorage.googleapis.com/v0/b/technocrats-website.appspot.com/o/1-2.jpg?alt=media&token=9ce1ce57-1908-4dd6-89f4-603b145680fa'
    }

  ],
            visible: false,
            activeItem: 'collapse', }    

  handleCollapse = ()=> {
    document.getElementsByClassName('thirdPage')[0].scrollIntoView({behavior:'smooth'});
    this.setState({activeItem:'collapse'})
    // if(!x.matches){
    // setTimeout(()=>{window.scrollBy({top:150,behavior:'smooth'})},1000)
    // }
}
handleExpand = ()=> {
    document.getElementsByClassName('thirdPage')[0].scrollIntoView({behavior:'smooth'});
    this.setState({activeItem:'expand'})
    // if(!x.matches){
    //     setTimeout(()=>{window.scrollBy({top:150,behavior:'smooth'})},1000)
    //     }
}

handleOnScreen = (e, { calculations }) => this.setState({ calculations })
    render(){
      
  return(
    <div className="thirdPage">
    <Grid centered>
        <GridColumn width={14}>
          
        <Visibility fireOnMount onOnScreen={this.handleOnScreen}>
          <div>
                    <ul id="hexGrid">
                      { (this.state.activeItem==='collapse')&&
                        this.state.images.map((image) => {
                          return (
                            <li className="hex">
                              <div className="hexIn">
                                <span className="hexLink">
                                  <img loading="lazy" className='grey' src={image.link} alt="" />
                                  <h1>{image.title}</h1>
                                  <p>{image.desc ?? ""}</p>
                                </span>
                              </div>
                            </li>
                            

                          );
                        })
                      }        
                    </ul>
                   </div>
                   
                   </Visibility> 
      </GridColumn>
                      {
                        this.state.activeItem==='expand'
                        ?
                          <div>
                            <Gallery></Gallery>
                            <Button style={{position:'fixed',top:0,right:40}} onClick={this.handleCollapse} color='yellow' basic>Collapse Gallery</Button>
                          </div>
                        :
                            <Grid.Row columns={16}>
                              <Button style={{}} onClick={this.handleExpand} color='yellow' basic>Expand Gallery</Button>
                            </Grid.Row>                       
                      }
    </Grid>

    </div>
   )
  }
}

