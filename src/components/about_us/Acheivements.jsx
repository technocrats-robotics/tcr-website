import React, { Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Grid, Segment, Header,Image, Icon, Card, Button,Visibility } from 'semantic-ui-react';
import './InfoCard.css';

var x = window.matchMedia("(max-width: 900px)");
export default class Acheivements extends Component {
    
    achievements = [
        {
            imageLink:'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg',
            acheiveHeader:'What are we striving towards',
            Desc:'Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...'
        },
        {
            imageLink:'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg',
            acheiveHeader:'What are we striving towards',
            Desc:'Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...'
        },
        {
            imageLink:'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg',
            acheiveHeader:'What are we striving towards',
            Desc:'Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...'
        },
        
        {
            imageLink:'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg',
            acheiveHeader:'What are we striving towards',
            Desc:'Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...'
        },
        {
            imageLink:'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg',
            acheiveHeader:'What are we striving towards',
            Desc:'Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...'
        },
        {
            imageLink:'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg',
            acheiveHeader:'What are we striving towards',
            Desc:'Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...'
        },
    ]
        componentDidMount(){
        }
  render() {
    return(
        <div>
            <Grid centered stackable columns={12}>
                <Grid.Row>  
                    <Segment fluid inverted size='massive'>
                        <Header color='red' as='h1'>
                        <Icon name='trophy' />
                        <Header.Content>Acheivements</Header.Content>
                        </Header>
                        </Segment>
                </Grid.Row>
                {this.achievements.map((ele)=>{return(
                <Grid.Row className='aboutCard' >
                    <Grid.Column textAlign='center' className='justToAlignImage' mobile={8} computer={4}>
                        <Image className="thumbnail1" src={ele.imageLink}></Image>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header>
                            <div className='title1'>
                                {ele.acheiveHeader}
                            </div>
                            <Header.Subheader className='paraCard'>
                                
                            {ele.Desc}
                            </Header.Subheader>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                )})}
                                  
                <Grid.Row>
                <div>
                    <Link to="/">
                    <Button fluid positive>
                        <Icon name='left arrow'></Icon>Back to Main Page
                        </Button>
                    </Link>
                </div>
                </Grid.Row>
            </Grid>
            {/* <div class="card1">
            <div class="thumbnail1"><Image class="left1" src="https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg"/></div>
            <div class="right1">
                <h1 className='title1'>What are we striving towards?</h1>
                <p>Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...</p>
            </div>
            </div> */}
        </div>
    );
    }
}