import React, { Component } from 'react';
import { Grid, Header,Menu, Label, Segment, Icon, Breadcrumb } from 'semantic-ui-react';
import AboutUsCard from '../../components/about_us/AboutUsCard';
import {db} from '../../services/google-firebase/setup';
import Member from '../../services/google-firebase/models/members/member'
import Role from '../../services/google-firebase/models/members/role'


var time = new Date();
export default class TeamMembers extends Component {
    state = { 
        activeItem: (time.getMonth() > 2)? time.getFullYear()+1: time.getFullYear(), 
        data:[], yearHeaders:[] 
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

    getSelectedTeam(){
        let tempArray = [];
        this.documents.forEach((doc)=>{
            let details = doc.data();
            let selectedTeam = parseInt(this.state.activeItem);
            let roleForSelectedTeamYear = doc.data().roles[selectedTeam] ?? Role.ALUMNI;
            details['currentRole'] = roleForSelectedTeamYear;
            if(roleForSelectedTeamYear !== Role.ALUMNI){
                tempArray.push(details);
            }
        })
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
        tempyearHeaders = [...new Set(tempyearHeaders)]
        this.setState({yearHeaders:tempyearHeaders});
        console.log(this.randomColor())
    }

    handleBack = () =>{
        this.props.history.push('/');
    }
  render() {
    const { activeItem } = this.state;
    const sections = [
        { key: 'Home', content: 'Home', link: true, onClick:this.handleBack },
        { key: 'Team', content: 'Gallery', active: true },
      ]
    return(
        <div className='secondAboutPage'><Segment inverted>
            <Header textAlign='center' inverted size='huge'>The Team</Header>
                <Label as='a' color='red' attached='top left'>
  <Breadcrumb icon='right angle' sections={sections} />
                </Label>        
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
            </Grid>
            </Segment>
        </div>
    );
    }
}