import React, { Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Grid, Segment, Header,Image,Label, Transition,List, Table } from 'semantic-ui-react';
import './Recruitments.css';
import RecruitmentCards from '../../components/Recruitments/RecruitmentCards'

var x = window.matchMedia("(max-width: 900px)");
const examDetails=(
  <List as='ol'>
    <List.Item as='li' value='*'>
    Types of the question asked in the exam may vary from multiple choice questions, short answers and long answers.
    </List.Item>
    <List.Item as='li' value='*'>
    The duration of the exam will be 60 minutes. 
    </List.Item>
    <List.Item as='li' value='*'>
    Students are requested to choose only one slot and if interested may apply for more than one department. Students from every branch can apply for exam including mechatronics.
    </List.Item>
    <List.Item as='li' value='*'>
    Students can take the test from the safe and secure environment of his/her home, with a desktop/laptop/smartphone (with a webcam) and an internet connection (un-interrupted internet speed is desirable). 
    </List.Item>
    <List.Item as='li' value='*'>
    The examination does not require any special preparation, it would be an open book/open internet with video proctoring. It's compulsory to turn on your webcam during the examination. Any mode of mischievous act would not be entertained.
    </List.Item>
    </List>
)

const modeOfConduct = (
  <List>
    <List.Item as='li' value='*'>
    Exams will be conducted through google forms for electrical, mechanical departments, and for the computer science department <strong>HackerRank</strong> platform will be utilized.
    </List.Item>
  </List>
)
const dates=(
  <Table celled style={{backgroundColor:'transparent',color:'#ffff00ab',borderColor:'#ffff00ab'}}>
      <Table.Row>
        <Table.Cell>
          Orientation Program
        </Table.Cell>
        <Table.Cell>
          21st March 
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Exam Dates
        </Table.Cell>
        <Table.Cell>
        21st & 22nd March  
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Interviews
        </Table.Cell>
        <Table.Cell>
        22nd & 23rd March 
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Result Declaration
        </Table.Cell>
        <Table.Cell>
          24th March 
        </Table.Cell>
      </Table.Row>
      </Table>
)
const examCalender = (
  <Table celled style={{backgroundColor:'transparent',color:'#ffff00ab',borderColor:'#ffff00ab'}}>
      <Table.Row>
        <Table.Cell>
          Slot - 1
        </Table.Cell>
        <Table.Cell>
          21<super>st</super> March
        </Table.Cell>
        <Table.Cell>
          7:00 pm - 8:00 pm
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Slot - 2
        </Table.Cell>
        <Table.Cell>
          22<super>nd</super> March
        </Table.Cell>
        <Table.Cell>
          1:00 pm - 2:00 pm
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Slot - 3
        </Table.Cell>
        <Table.Cell>
          22<super>nd</super> March
        </Table.Cell>
        <Table.Cell>
          7:00 pm - 8:00 pm
        </Table.Cell>
      </Table.Row>
  </Table>

)
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
             
          <Label as='a' href={'/#'} left color='red'>
            Back to Home Page
          </Label>
           <Image inverted centered size="medium" src="./TCRFullLogo.png"></Image>
           <br></br>
            <RecruitmentCards title={"Our Dates "} text={dates}></RecruitmentCards>
            <RecruitmentCards title={"Exam details"} text={examDetails}></RecruitmentCards>
            <RecruitmentCards title={"Mode of Conduct"} text={modeOfConduct}></RecruitmentCards>
            <RecruitmentCards title={"Exam Calender"} text={examCalender}></RecruitmentCards>
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