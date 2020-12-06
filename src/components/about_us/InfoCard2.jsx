import React, { Component } from 'react';
import { Grid, Segment, Header,Image, Icon, Card, Button } from 'semantic-ui-react';
import './InfoCard2.css';

export default class InfoCard2 extends Component {
  render() {
    return(
        <div>
            <div class="card2">
            <div class="thumbnail2"><img class="right2" src="https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg"/></div>
            <div class="left2">
                <h1 className='title2'>What are we striving towards?</h1>
                <p>Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...</p>
            </div>
            </div>
        </div>
    );
    }
}