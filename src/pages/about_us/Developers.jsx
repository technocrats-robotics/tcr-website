import React, { Component } from 'react';
import { Grid, Header,Menu, Label, Segment, Icon, Breadcrumb } from 'semantic-ui-react';
import {db} from '../../services/google-firebase/setup';
import Member from '../../services/google-firebase/models/members/member'
import Role from '../../services/google-firebase/models/members/role'
import DeveloperCard from '../../components/about_us/DeveloperCard';


var time = new Date();
export default class TeamMembers extends Component {
    state = { 
        activeItem: (time.getMonth() > 2)? time.getFullYear()+1: time.getFullYear(), 
        data:[{name:'Name',currentRole:'Member',dpLink: null,about:{experience:'blah',},},], yearHeaders:[] 
    }

    tempArray = [];
    async getMemberData(){
        db.collection('content').doc('developers').get()
        .then((document) => {
            let devIds = document.data().memberIDs
            devIds.forEach((dev)=>{
                db.collection(Member.collectionName).doc(dev).get()
                .then((memberDev)=>{
                    this.tempArray.push(memberDev.data())
                    console.log(memberDev.data())
                })                
            })
            this.getSelectedTeam()
        });
    }

    getSelectedTeam(){
        setInterval(()=>{
        this.setState({data: this.tempArray});},1000);
    }
    componentDidMount(){
        this.getMemberData();
    }

    handleBack = () =>{
        this.props.history.push('/');
    }
  render() {
    const { activeItem } = this.state;
    const sections = [
        { key: 'Home', content: 'Home', link: true, onClick:this.handleBack },
        { key: 'Developers', content: 'Developers', active: true },
      ]
    return(
        <div className='secondAboutPage'><Segment inverted><Label as='a' color='red' attached='top left'>
        <Breadcrumb icon='right angle' sections={sections} />
                      </Label>  
            <Header color='yellow' textAlign='center' inverted size='huge'>Developers</Header>
                      
            <Grid centered doubling stackable>
                <Grid.Row columns={6}>
                {
                this.state.data.map((member)=>(
                <Grid.Column key={member.username} computer= {4} className='justToAlignMemberCards'>
                    <DeveloperCard data={member}></DeveloperCard>
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