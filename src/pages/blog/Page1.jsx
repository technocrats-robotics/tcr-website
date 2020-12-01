import React, { Component } from 'react';
import { Grid, Segment, Header,Image, GridColumn,Menu, GridRow,Icon} from 'semantic-ui-react';
import MiscCard from '../../components/blog/MiscCard';

export default class ImageMat extends Component {

state = { activeItem: 'home' }
handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return(
        <div>
            <Grid columns={16}>
            <GridRow centered>
            <Header as='h1' inverted textAlign='left'>
                <Icon name='book' />
                <Header.Content>
                Team Technocrats - Blog
                <Header.Subheader>Checkout our most recent blog posts</Header.Subheader>
                </Header.Content>
            </Header>
            </GridRow>
                <GridRow>
                <GridColumn width={13}>
                    <Grid columns={16} color='red' centered >
                        <GridRow color='purple'>
                            <GridColumn width={4} color='teal'>
                            <MiscCard></MiscCard>
                            </GridColumn>
                            <GridColumn width={4} color='violet'>
                            <MiscCard></MiscCard>
                            </GridColumn>
                            <GridColumn width={4} color='yellow'>
                            <MiscCard></MiscCard>
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn width={4}>
                            <MiscCard></MiscCard>
                            </GridColumn>
                            <GridColumn width={4}>
                            <MiscCard></MiscCard>
                            </GridColumn>
                            <GridColumn width={4}>
                            <MiscCard></MiscCard>
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn width={4}>
                            <MiscCard></MiscCard>
                            </GridColumn>
                            <GridColumn width={4}>
                            <MiscCard></MiscCard>
                            </GridColumn>
                            <GridColumn width={4}>
                            <MiscCard></MiscCard>
                            </GridColumn>
                        </GridRow>
                    </Grid>
                </GridColumn>
                <GridColumn width={3}>
                <Menu inverted pointing secondary vertical size='large'>
                    <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                    />
                    <Menu.Item
                    name='messages'
                    active={activeItem === 'messages'}
                    onClick={this.handleItemClick}
                    />
                    <Menu.Item
                    name='friends'
                    active={activeItem === 'friends'}
                    onClick={this.handleItemClick}
                    />
                </Menu>
                </GridColumn>
                </GridRow>
            </Grid>
        </div>
    );
    }
}