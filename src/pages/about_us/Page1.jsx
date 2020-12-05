import React, { Component } from 'react';
import { Grid, Segment, Header,Image } from 'semantic-ui-react';
import AboutUsCard from '../../components/about_us/AboutUsCard';

export default class Page1 extends Component {
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
            }
    ];
  render() {
    return(
        <div className='firstPage'>
            <Grid centered stackable>
                <Grid.Row columns='6'>
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