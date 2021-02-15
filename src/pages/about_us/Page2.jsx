import React, { Component } from 'react';
import { Grid, Menu, Button,Divider } from 'semantic-ui-react';
import {  Link } from 'react-router-dom';
import AboutUsCard from '../../components/about_us/AboutUsCard';
import {db} from '../../services/google-firebase/setup';
import Member from '../../services/google-firebase/models/members/member'
import Role from '../../services/google-firebase/models/members/role'
import { getCurrentTeamYear } from '../../constants';


export default class Page2 extends Component {
    state = { 
        activeItem: getCurrentTeamYear(), 
        data:[], yearHeaders: [] 
    };
    faculty = {
        name:'Dr. Arockia Selvakumar',
        dpLink:'https://media-exp1.licdn.com/dms/image/C5603AQFkwcLsiX_qxA/profile-displayphoto-shrink_400_400/0/1604218973010?e=1619049600&v=beta&t=8Ra6VMH0JZr4JPRSHOLouqoRVPQh76gvlsZDm88M-NE',
        about:{experience:'Faculty Coordinator,Technocrats',}
    }
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name }, () => this.getSelectedTeam());
    }

    async getMemberData(){
        db.collection(Member.collectionName).get()
        .then((documents) => {
            this.documents = documents;
            this.getSelectedTeam();
        });
        // console.log('getMemberData');
    }

    getSelectedTeam() {
        let tempArray = [];
        // console.log('getSelectedTeam '+this.state.activeItem);
        this.documents.forEach((doc)=>{
            let details = doc.data();
            let selectedTeam = parseInt(this.state.activeItem);
            let roleForSelectedTeamYear = doc.data().roles[selectedTeam] ?? Role.ALUMNI;
            details['currentRole'] = roleForSelectedTeamYear;
            if(
                roleForSelectedTeamYear !== Role.ALUMNI && 
                (
                    roleForSelectedTeamYear === Role.CAPTAIN || 
                    roleForSelectedTeamYear === Role.LEAD
                )
            ){
                tempArray.push(details);
            }
        });
        this.setState({data: tempArray});
    }
    
    randomColor = () =>{
        let colors = ['red','green','blue','yellow'];
        let num = Math.floor(Math.random() * (4));
        return colors[num]
    }

    addShadow() {
        let imgBg = document.getElementsByClassName('faceimage')
        for(let i =0 ;i < imgBg.length; i++){
            let color=this.randomColor()
            if(imgBg[i].style.boxShadow === ""){
                imgBg[i].style.boxShadow = "0px 5px 4px 0px "+ color;
            }
        }
    }

    componentDidUpdate(){
        this.addShadow();
    }

    componentDidMount(){
        this.getMemberData();
        let currentYear = getCurrentTeamYear();
        let tempyearHeaders = [];
        // console.log(currentYear)
        for(let i = currentYear ;i>2013;i--){
            tempyearHeaders.push(i);
        }
        tempyearHeaders = [...new Set(tempyearHeaders)];
        this.setState({yearHeaders:tempyearHeaders});
    }

    render() {
        const { activeItem } = this.state;
        return(
            <div className='secondAboutPage'>
                <Divider horizontal inverted>Team Leads</Divider>
                <Menu attached='top' tabular inverted pointing secondary className='blogMenuTop' size='huge' fluid>
                {
                    this.state.yearHeaders.map((year)=>{  
                            return(
                            <div className='TeamsYears'>
                            <Menu.Item inverted="true" style={{overflowX:'visible'}}
                            name={year.toString()}
                            key={year.toString()}
                            active={activeItem.toString() === year.toString()}
                            onClick={this.handleItemClick}
                        />
                        </div>
                        )
                    })
                }
                </Menu>
                <Grid centered doubling stackable>
                    <Grid.Row columns={3}>
                    {
                        this.state.data.map((member)=>(
                            <Grid.Column key={member.username} computer= {3} className='justToAlignMemberCards'>
                            <AboutUsCard data={member}></AboutUsCard>
                            </Grid.Column>
                        ))
                    }
                            <AboutUsCard data={this.faculty} />
                      
                    </Grid.Row>
                    
                    <Grid.Row centered columns={3}>
                        
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}