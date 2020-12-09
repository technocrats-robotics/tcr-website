import React, { Component } from 'react';
import { Grid, Segment, Header,Image,Menu,Input } from 'semantic-ui-react';
import AboutUsCard from '../../components/about_us/AboutUsCard';

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
        },{
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
            ,{
                username: 'dani12',
                name: 'Dani',
                registeredEmail: 'dani12@gmail.com',
                branch: 'CSE',
                yearOfJoining: '2018',
                isActive: 1,
                blogAccess: 1,
                about: {
                    experience: 'Has expertise in his area of interest.',
                }
                },
                ,{
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
                    }
                    ,{
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
                        ,{
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
                            ,{
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
                                }
    ];
    state = { activeItem: '2020' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return(
        <div className='secondAboutPage'>
            <Header textAlign='center' inverted size='huge'>The Team</Header>
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
            </Menu>
            <Grid centered doubling stackable>
                <Grid.Row columns={6}>
                {
                this.memberDetails.map((member)=>(
                    <Grid.Column>
                    <AboutUsCard></AboutUsCard>
                    </Grid.Column>
                ))
                }
                </Grid.Row>
            </Grid>
        </div>
    );
    }
}