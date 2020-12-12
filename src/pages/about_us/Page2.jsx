import React, { Component } from 'react';
import { Grid, Segment, Header,Image,Menu,Input, Label, Icon } from 'semantic-ui-react';
import AboutUsCard from '../../components/about_us/AboutUsCard';
import {db} from '../../services/google-firebase/setup';
import Member from '../../services/google-firebase/models/members/member'
import Role from '../../services/google-firebase/models/members/role'


var time = new Date();
export default class Page2 extends Component {
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
    state = { activeItem: '2020', data:this.memberDetails }
    
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
            if(ele.data().roles[parseInt(this.state.activeItem)+1] == Role.LEAD){
            tempArray.push(ele.data())
            console.log('pushed')
        }
        })
        this.setState({data: tempArray});
    }
    componentDidMount(){
        this.getMemberData()
    }
  render() {
    const { activeItem } = this.state
    return(
        <div className='secondAboutPage'>
            <Header textAlign='center' inverted size='huge'>The Team Leads</Header>
            <Menu attached='top' tabular inverted pointing secondary className='blogMenuTop' size='huge' fluid>
                        <Menu.Item inverted
                            name='2020'
                            active={activeItem === '2020'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item inverted
                            name='2019'
                            active={activeItem === '2019'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item inverted
                            name='2018'
                            active={activeItem === '2018'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item inverted
                            name='2017'
                            active={activeItem === '2017'}
                            onClick={this.handleItemClick}
                        />
                        {/* {
                            for(let p = time.getFullYear(); p > time.getFullYear()-4;p--){
                                console.log('blah')
                            }
                        } */}
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
        </div>
    );
    }
}