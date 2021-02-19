import React, { Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Grid, Segment, Header,Image, Icon, Card, Button,Visibility, Transition } from 'semantic-ui-react';
import './InfoCard.css';

var x = window.matchMedia("(max-width: 900px)");
var maxAchievementCards = 2;
var cardIndex = (slide_index) => maxAchievementCards * slide_index;

export default class InfoCard extends Component {
    achievements = [
        {
            posterLink:'https://firebasestorage.googleapis.com/v0/b/technocrats-website.appspot.com/o/rover_lifting_heavy_load.jpg?alt=media&token=e6b42669-279d-4762-af2f-070033a6fc5f',
            header:'What are we striving towards0',
            desc:'Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...'
        },
        {
            posterLink:'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg',
            header:'What are we striving towards1',
            desc:'Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...'
        },
        {
            posterLink:'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg',
            header:'What are we striving towards2',
            desc:'Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...'
        },
        
        {
            posterLink:'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg',
            header:'What are we striving towards3',
            desc:'Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...'
        },
        {
            posterLink:'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg',
            header:'What are we striving towards4',
            desc:'Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...'
        },
        {
            posterLink:'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg',
            header:'What are we striving towards5',
            desc:'Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...'
        },
        {
            posterLink:'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg',
            header:'What are we striving towards6',
            desc:'Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...'
        },
    ]
    nextCards = () => {
        
        this.setState({
            visible:false,
            slide_idx: this.state.slide_idx + 1, 
            activeCards: this.achievements.slice(
                cardIndex(this.state.slide_idx + 1), 
                cardIndex(this.state.slide_idx + 2)
            )
        });
        setTimeout(()=>{
                this.setState({visible:true})
            },1000
        );
    }
    prevCards = () => {
        
        this.setState({
            visible:false,
            slide_idx: this.state.slide_idx - 1, 
            activeCards: this.achievements.slice(
                cardIndex(this.state.slide_idx - 1), 
                cardIndex(this.state.slide_idx)
            )
        });
        setTimeout(()=>{
                this.setState({visible:true})
            },1000
        );
    }
    state = {
        slide_idx: 0,
        activeCards: this.achievements.slice(0, maxAchievementCards),
        visible: true
    }
    handleOnScreen = (e,{calculations}) => {
        if(x.matches){
        let aboutUsCard = document.getElementsByClassName('row aboutCard');
        
        try {
            let passed = calculations.percentagePassed;
            aboutUsCard[0].style.boxShadow = (passed < 0.02 &&  passed < 0.4) ? "0px 2px 6px 0px blue" : "0px 0px 0px 0px blue" ;
            aboutUsCard[1].style.boxShadow = (passed > 0.3 && passed < 0.6 ) ? "0px 2px 6px 0px yellow" : "0px 0px 0px 0px yellow" ;
            aboutUsCard[2].style.boxShadow = (passed > 0.5 && passed < 0.9) ? "0px 2px 6px 0px green" : "0px 0px 0px 0px green" ;
        }
         catch (error) {
        }
    }
     
}

  render() {
    return(
                    
        <Visibility onUpdate={this.handleOnScreen}>
        <div>  
            <Grid centered stackable columns={12}>
            <Transition.Group animation={'fade right'} duration={1000}>

            
            {this.state.activeCards[0] && this.state.visible&&(
                <Grid.Row className='aboutCard'>
                    <Grid.Column textAlign='center' className='justToAlignImage' mobile={8} computer={4}>
                        <Image className="thumbnail1" src={'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg'}></Image>
                    </Grid.Column>
                <Grid.Column width={7}>
                        <Header>
                            <div className='title1'>
                               {this.state.activeCards[0].header}
                            </div>
                            <Header.Subheader className='paraCard'>
                                {this.state.activeCards[0].desc}      
                            </Header.Subheader>
                        </Header>
                </Grid.Column>
                </Grid.Row>)}
                {this.state.activeCards[1]&&  this.state.visible &&(
                <Grid.Row className='aboutCard'>
                    <Grid.Column width={4} only={'mobile'} className='justToAlignImage'>
                        <Image className="thumbnail1" src={this.state.activeCards[1].posterLink}></Image>
                    </Grid.Column>

                    <Grid.Column width={7}>
                        <Header>
                            <div className='title1'>
                               {this.state.activeCards[1].header}
                            </div>
                            <Header.Subheader className='paraCard'>
                               {this.state.activeCards[1].desc}
                            </Header.Subheader>
                        </Header>
                    </Grid.Column>
                    <Grid.Column width={4} only={'computer'} className='justToAlignImage'>
                        <Image className="thumbnail1" src={this.state.activeCards[1].posterLink}></Image>
                    </Grid.Column>
                </Grid.Row>)
                }
                
            <Grid.Row>
                <Button.Group>
                    <Button 
                        labelPosition='left' 
                        attached='left' 
                        icon='left chevron' 
                        content='Prev' 
                        disabled={this.achievements[cardIndex(this.state.slide_idx - 1)] == null} 
                        className='nextPrevBtns' 
                        onClick={this.prevCards} 
                        color='yellow' 
                        basic 
                    />
                
                    <Button  
                        labelPosition='right' 
                        attached='right' 
                        icon='right chevron' 
                        content='Next' 
                        disabled={this.achievements[cardIndex(this.state.slide_idx + 1)] == null} 
                        className='nextPrevBtns' 
                        onClick={this.nextCards} 
                        color='yellow' 
                        basic 
                    />
                </Button.Group>
            </Grid.Row>
                
                {/* {this.state.activeCards[2]&& this.state.visible &&(
                <Grid.Row className='aboutCard'>
                    <Grid.Column width={4} className='justToAlignImage'>
                        <Image className="thumbnail1" src={this.state.activeCards[2].posterLink}></Image>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header>
                            <div className='title1'>
                               {this.state.activeCards[2].header}
                            </div>
                            <Header.Subheader className='paraCard'>
                                {this.state.activeCards[2].desc}
                            </Header.Subheader>
                        </Header>
                    </Grid.Column>
                </Grid.Row>        
                    )}         */}
 
                </Transition.Group>     

              
            </Grid>
        </div>
        
        </Visibility>
    );
    }
}