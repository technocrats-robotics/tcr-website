import { render } from '@testing-library/react'
import React, { Component } from 'react';
import {Grid, GridColumn, GridRow,Card,Icon, Image,} from 'semantic-ui-react';

/**
* @author
* @function Page3
**/

export default class Page3 extends Component {
    render(){
  return(
    <div className="fourthPage">
        <Grid verticalAlign='middle' columns={6} divided centered>
            <GridColumn>
            <Card className='zoomfourth'>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    22 Friends
                </a>
                </Card.Content>
                </Card>
            </GridColumn>
            <GridColumn>
            <Card className='zoomfourth'>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    22 Friends
                </a>
                </Card.Content>
                </Card>
            </GridColumn>
            <GridColumn>
            <Card className='zoomfourth'>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    22 Friends
                </a>
                </Card.Content>
                </Card>
            </GridColumn>
        </Grid>

    </div>
   )
  }
}

