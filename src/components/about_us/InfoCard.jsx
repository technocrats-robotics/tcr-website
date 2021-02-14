import React, { Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Grid, Segment, Header,Image, Icon, Card, Button,Visibility, Transition } from 'semantic-ui-react';
import './InfoCard.css';

var x = window.matchMedia("(max-width: 900px)");

export default class InfoCard extends Component {
    achievements = [
        {
            imageLink:'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg',
            acheiveHeader:'What are we striving towards0',
            Desc:'Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...'
        },
        {
            imageLink:'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg',
            acheiveHeader:'What are we striving towards1',
            Desc:'Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...'
        },
        {
            imageLink:'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg',
            acheiveHeader:'What are we striving towards2',
            Desc:'Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...'
        },
        
        {
            imageLink:'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg',
            acheiveHeader:'What are we striving towards3',
            Desc:'Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...'
        },
        {
            imageLink:'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg',
            acheiveHeader:'What are we striving towards4',
            Desc:'Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...'
        },
        {
            imageLink:'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg',
            acheiveHeader:'What are we striving towards5',
            Desc:'Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...'
        },
        {
            imageLink:'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg',
            acheiveHeader:'What are we striving towards6',
            Desc:'Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...'
        },
    ]
    nextCards = () => {
        
        this.setState({visible:false})
        setTimeout(()=>{
            this.setState({visible:true})
        }
            ,1000)
        this.setState({i:this.state.i+3})
        this.setState({activeCards: this.achievements.slice(this.state.i,this.state.i+3)})
        console.log(this.state.i)
    }
    prevCards = () => {
        
        this.setState({visible:false})
        setTimeout(()=>{
            this.setState({visible:true})
        }
            ,1000)
        this.setState({i:this.state.i-3})
        this.setState({activeCards: this.achievements.slice(this.state.i-3,this.state.i)})
        console.log(this.state.i)
    }
    state = {
        i:3,
        activeCards:this.achievements.slice(0,3),
        visible:true
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
                               {this.state.activeCards[0].acheiveHeader}
                            </div>
                            <Header.Subheader className='paraCard'>
                                {this.state.activeCards[0].Desc}      
                            </Header.Subheader>
                        </Header>
                </Grid.Column>
                </Grid.Row>)}
                {this.state.activeCards[1]&&  this.state.visible &&(
                <Grid.Row className='aboutCard'>
                    <Grid.Column width={4} only={'mobile'} className='justToAlignImage'>
                        <Image className="thumbnail1" src={this.state.activeCards[0].imageLink}></Image>
                    </Grid.Column>

                    <Grid.Column width={7}>
                        <Header>
                            <div className='title1'>
                               {this.state.activeCards[1].acheiveHeader}
                            </div>
                            <Header.Subheader className='paraCard'>
                               {this.state.activeCards[1].Desc}
                            </Header.Subheader>
                        </Header>
                    </Grid.Column>
                    <Grid.Column width={4} only={'computer'} className='justToAlignImage'>
                        <Image className="thumbnail1" src={this.state.activeCards[1].imageLink}></Image>
                    </Grid.Column>
                </Grid.Row>)
                }
                
                {this.state.activeCards[2]&& this.state.visible &&(
                <Grid.Row className='aboutCard'>
                    <Grid.Column width={4} className='justToAlignImage'>
                        <Image className="thumbnail1" src={this.state.activeCards[2].imageLink}></Image>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header>
                            <div className='title1'>
                               {this.state.activeCards[2].acheiveHeader}
                            </div>
                            <Header.Subheader className='paraCard'>
                                {this.state.activeCards[2].Desc}
                            </Header.Subheader>
                        </Header>
                    </Grid.Column>
                </Grid.Row>       )}         
 
                </Transition.Group>     

                <Grid.Row>
                {this.achievements[this.state.i-4] &&(
                <div>
                    <Button onClick={this.prevCards} color='yellow' basic>Back</Button>
                </div>)}
                {this.achievements[this.state.i] &&(
                <div>
                    <Button onClick={this.nextCards} color='yellow' basic>Next</Button>
                </div>
                )
                }
                </Grid.Row>
            </Grid>
        </div>
        
        </Visibility>
    );
    }
}