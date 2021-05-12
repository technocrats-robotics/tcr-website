import React, { Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Grid, Segment, Header,Image,Label, Embed } from 'semantic-ui-react';
import './Recruitments.css';
import RecruitmentCards from '../../components/Recruitments/RecruitmentCards'

var x = window.matchMedia("(max-width: 900px)");


export default class RecruitmentForm extends Component {
  state={
    visible:true,
  }
  componentDidMount(){
    // setInterval(()=>{
    //   this.setState({visible:!this.state.visible})
    // },1000)
  }
  render() {
    return(
        <div className='recruitInfo'>
           <div className='recruitDiv1'>
             
          <Label as='a' href={'/#'} left color='red'>
            Back to Home Page
          </Label>
           <br></br>
           <iframe width="100%" height= "640px" src= "https://flzu5mig2qj.typeform.com/to/ejsxYIah" frameborder= "0" marginwidth= "0" marginheight= "0" style= {{border: '0px',scrollbarWidth:'0px', maxWidth:'100%', maxHeight:"100vh"}} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>           
           </div>
        </div>
    );
    }
}