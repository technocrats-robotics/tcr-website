import React, { Component } from 'react';
import { Grid, Header,Menu, Label, Segment, Icon } from 'semantic-ui-react';
import AboutUsCard from '../../components/about_us/AboutUsCard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../landingPage/LandingPage';
import {db} from '../../services/google-firebase/setup';
import Member from '../../services/google-firebase/models/members/member'
import Role from '../../services/google-firebase/models/members/role'


var time = new Date();
export default class TeamMembers extends Component {
    memberDetails = [
        {
        username: 'daniel12',
        name: 'Daniel',
        registeredEmail: 'daniel12@gmail.com',
        branch: 'CSE',
        yearOfJoining: '2017',
        isActive: 1,
        blogAccess: 1,
        about: {
            experience: 'Has expertise in his area of interest.',
        }
    },
    ];
    state = { activeItem: time.getFullYear(), data:this.memberDetails, yearHeaders:[] }
    
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        this.getMemberData()
    }
    async getMemberData(){
        var database = await db.collection(Member.collectionName).get()
        let tempArray = []
        database.forEach((ele)=>{
            let temp = ele.data()
            console.log(ele.data().roles);
            console.log(parseInt(this.state.activeItem))
            if(ele.data().yearOfJoining === parseInt(this.state.activeItem)){
                tempArray.push(ele.data())
            }
        })
        this.setState({data: tempArray});
    }
    componentDidMount(){
        this.getMemberData()
        var currentYear = time.getFullYear()
        var tempyearHeaders = [currentYear]
        // console.log(currentYear)
        for(let i = currentYear ;i>currentYear-4;i--){
            tempyearHeaders.push(i);
        }
        tempyearHeaders = [...new Set(tempyearHeaders)]
        this.setState({yearHeaders:tempyearHeaders});
    }
    handleBack = () =>{
        this.props.history.push('/')
    }
  render() {
    const { activeItem } = this.state
    return(
        <div className='secondAboutPage'><Segment inverted>
            <Header textAlign='center' inverted size='huge'>The Team</Header>
                <Label onClick={this.handleBack} as='a' color='red' ribbon='left' attached='top left'>
                    <Icon name='left arrow' /> Back
                </Label>        
            <Menu attached='top' tabular inverted pointing secondary className='blogMenuTop' size='huge' fluid>
                        {
                        this.state.yearHeaders.map((year)=>{ 
                            console.log(year)     
                                return(<Menu.Item inverted
                                name={year}
                                active={activeItem === year}
                                onClick={this.handleItemClick}
                            />)
                        })
                        }
            </Menu>
            <Grid centered doubling stackable>
                <Grid.Row columns={6}>
                {
                this.state.data.map((member)=>(
                    <Grid.Column computer= {4} className='justToAlignMemberCards'>
                    <AboutUsCard data={member}></AboutUsCard>
                    </Grid.Column>
                ))
                }
                </Grid.Row>
            </Grid>
            </Segment>
        </div>
    );
    }
}