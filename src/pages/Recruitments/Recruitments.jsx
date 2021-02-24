import React, { Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Grid, Segment, Header,Image, Icon, Card, Button,Visibility, Transition } from 'semantic-ui-react';
import './Recruitments.css';

var x = window.matchMedia("(max-width: 900px)");
export default class Recruitments extends Component {
  state={
    visible:true,
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({visible:!this.state.visible})
    },1000)
  }
  render() {
    return(
        <div className='recruitInfo'>
           <div className='recruitDiv1'>
           <Image inverted centered size="small" src="./TcrLogoClean.png"></Image>
           
           </div>
           <div className='recruitDiv2'>
             <Segment inverted raised>
             <Transition
            animation={'flash'}
            duration={500}
            visible={this.state.visible}
          >
              <Header as='h1' size='huge'>NOW RECRUITING!</Header>
              </Transition>
              </Segment>
              
           </div>
        </div>
    );
    }
}