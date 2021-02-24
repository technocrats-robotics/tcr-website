import React, { Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Grid, Segment, Header,Image, Icon, Card, Button,Visibility, Transition } from 'semantic-ui-react';
import './Recruitments.css';
import RecruitmentCards from '../../components/Recruitments/RecruitmentCards'

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
           <Image inverted centered size="medium" src="./TCRFullLogo.png"></Image>
           <br></br>
            <RecruitmentCards title={"Our Dates "} text={"This will have the information"}></RecruitmentCards>
            <RecruitmentCards title={"Exam details"} text={"This will have the information"}></RecruitmentCards>
            <RecruitmentCards title={"Mode of Conduct"} text={"This will have the information"}></RecruitmentCards>
            <RecruitmentCards title={"Exam Calender"} text={"This will have the information"}></RecruitmentCards>
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
              <Image centered src={"https://th.bing.com/th/id/Rf3653071ce965a14d71d0ad600c6f98e?rik=9GogL0q6oSXreg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-y_SOxhY8_Zk%2fTWYZNwW8r1I%2fAAAAAAAAABY%2f7Oo7NscWtAo%2fs1600%2fgear.gif&ehk=sBaeQvoHSBCajVPiEgAGYnivHTctc0I9qfBLiduibNA%3d&risl=&pid=ImgRaw"}></Image>
           </div>
        </div>
    );
    }
}