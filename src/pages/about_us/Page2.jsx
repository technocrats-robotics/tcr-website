import React, { Component } from 'react';
import { Grid, Menu, Button,Divider } from 'semantic-ui-react';
import {  Link } from 'react-router-dom';
import AboutUsCard from '../../components/about_us/AboutUsCard';
import {db} from '../../services/google-firebase/setup';
import Member from '../../services/google-firebase/models/members/member'
import Role from '../../services/google-firebase/models/members/role'


var time = new Date();
export default class Page2 extends Component {
    state = { 
        activeItem: 
            (time.getMonth() > 2)? 
            (time.getFullYear()+1).toString(): 
            time.getFullYear().toString(), 
        data:[], yearHeaders: [] 
    };
    
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name }, () => this.getSelectedTeam());
    }

    async getMemberData(){
        var database = await db.collection(Member.collectionName).get()
        let tempArray = []
        database.forEach((ele)=>{
            let temp = ele.data()
            // console.log(ele.data().roles);
            // console.log(parseInt(this.state.activeItem))
            let person = temp.roles[parseInt(this.state.activeItem)+1];
            if(person === Role.LEAD || person === Role.CAPTAIN){
            tempArray.push(temp)
            // console.log('pushed')
        }
        })
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
    componentDidMount(){
        this.getMemberData();
        let currentYear = (time.getMonth() > 2)? time.getFullYear()+1: time.getFullYear();
        let tempyearHeaders = [currentYear];
        // console.log(currentYear)
        for(let i = currentYear ;i>2013;i--){
            tempyearHeaders.push(i);
        }
        tempyearHeaders = [...new Set(tempyearHeaders)];
        this.setState({yearHeaders:tempyearHeaders});
        setInterval(()=>{
            let imgBg = document.getElementsByClassName('faceimage')
            for(let i =0 ;i < imgBg.length; i++){
                let color=this.randomColor()
                if(imgBg[i].style.boxShadow === ""){
                    imgBg[i].style.boxShadow = "0px 5px 4px 0px "+ color;
                            }
                        }
                },1000)
    }
  render() {
    const { activeItem } = this.state;
    return(
        <div className='secondAboutPage'>
            <Divider horizontal inverted>Team Leads</Divider>
            <Menu attached='top' tabular inverted pointing secondary className='blogMenuTop' size='huge' fluid>
            {
                this.state.yearHeaders.map((year)=>{  
                        return(<Menu.Item inverted="true"
                        name={year.toString()}
                        key={year.toString()}
                        active={activeItem.toString() === year.toString()}
                        onClick={this.handleItemClick}
                    />)
                })
            }
            </Menu>
            <Grid centered doubling stackable>
                <Grid.Row columns={6}>
                {
                this.state.data.map((member)=>(
                    <Grid.Column key={member.username} computer= {4} className='justToAlignMemberCards'>
                    <AboutUsCard data={member}></AboutUsCard>
                    </Grid.Column>
                ))
                }
                </Grid.Row>
                                  
                <Grid.Row>
                <div>
                    <Link to="/Team">
                    <Button color='yellow' basic>View Complete Team</Button>
                    </Link>
                </div>
                </Grid.Row>
            </Grid>
        </div>
    );
    }
}