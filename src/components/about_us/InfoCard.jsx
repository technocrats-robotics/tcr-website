import React, { Component } from 'react';
import { Grid, Segment, Header,Image, Icon, Card, Button,Visibility } from 'semantic-ui-react';
import './InfoCard.css';

var x = window.matchMedia("(max-width: 900px)");
export default class InfoCard extends Component {
    
    handleOnScreen = (e,{calculations}) => {
        if(x.matches){
        let aboutUsCard = document.getElementsByClassName('row aboutCard');
            if(calculations.percentagePassed < 0.02){
                aboutUsCard[0].style.boxShadow = "0px 2px 6px 0px blue";
                setTimeout(()=>{
                    aboutUsCard[0].style.boxShadow = "0px 0px 0px 0px blue";
                },5000);
            }
            if(calculations.percentagePassed > 0.3 ){
                console.log('card2');
                aboutUsCard[1].style.boxShadow = "0px 2px 6px 0px green";
                setTimeout(()=>{
                    aboutUsCard[1].style.boxShadow = "0px 0px 0px 0px blue";
                },5000);
            }
            if(calculations.percentagePassed > 0.5){
                aboutUsCard[2].style.boxShadow = "0px 2px 6px 0px yellow";
                setTimeout(()=>{
                    aboutUsCard[2].style.boxShadow = "0px 0px 0px 0px blue";
                },5000);
            }
    }}
  render() {
    return(
        <div>
            <Visibility continuous={true} onOnScreen={this.handleOnScreen}>
            <Grid centered stackable columns={12}>
                <Grid.Row className='aboutCard'>
                    <Grid.Column textAlign='center' width={4}>
                        <Image className="thumbnail1" src={'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg'}></Image>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header>
                            <div className='title1'>
                                What are we striving towards
                            </div>
                            <Header.Subheader className='paraCard'>
                                    Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...
                            </Header.Subheader>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className='aboutCard'>
                <Grid.Column width={4} only={'mobile'}>
                        <Image className="thumbnail1" src={'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg'}></Image>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header>
                            <div className='title1'>
                                What are we striving towards
                            </div>
                            <Header.Subheader className='paraCard'>
                                    Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...
                            </Header.Subheader>
                        </Header>
                    </Grid.Column>
                    <Grid.Column width={4} only={'computer'}>
                        <Image className="thumbnail1" src={'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg'}></Image>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className='aboutCard'>
                    <Grid.Column width={4}>
                        <Image className="thumbnail1" src={'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg'}></Image>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header>
                            <div className='title1'>
                                What are we striving towards
                            </div>
                            <Header.Subheader className='paraCard'>
                                    Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...
                            </Header.Subheader>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Visibility>
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