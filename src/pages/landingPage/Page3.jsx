import { render } from '@testing-library/react'
import React, { Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
import {Grid, GridColumn, GridRow, Header, Image, Segment, Button} from 'semantic-ui-react';

/**
* @author
* @function Page3
**/

export default class Page3 extends Component {
    render(){
  return(
    <div className="thirdPage">
    <Grid centered>
        <GridColumn width={14}>
    <ul id="hexGrid">
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img className='grey' src="https://technocrats-robotics.github.io/website/images/dragking.jpeg" alt="" />
            <h1>National Roboprix</h1>
            <p>The robot for the drag race.</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img className='grey' src="https://technocrats-robotics.github.io/website/Gallery/images/thumbs/02.jpeg" alt="" />
            <h1>Indian Rover Challenge 2019</h1>
            <p>The team's Rover with features matching with NASA's Mars Rover</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img className='grey' src="https://technocrats-robotics.github.io/website/Gallery/images/thumbs/11.jpeg" alt="" />
            <h1>Robocon 2018</h1>
            <p>Robot Operator Neil guides the robot during the national event.</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img className='grey' src="https://technocrats-robotics.github.io/website/Gallery/images/thumbs/06.jpeg" alt="" />
            <h1>National Roboprix</h1>
            <p>The team recieveing the award for winning the National Roboprix.</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img className='grey' src="https://farm7.staticflickr.com/6139/5986939269_10721b8017.jpg" alt="" />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img className='grey' src="https://farm4.staticflickr.com/3165/5733278274_2626612c70.jpg" alt="" />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img className='grey' src="https://technocrats-robotics.github.io/website/Gallery/images/thumbs/01.jpeg" alt="" />
            <h1>Robocon 2018</h1>
            <p>Robot Operator Neil guides the robot during the national event.</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img className='grey' src="https://farm4.staticflickr.com/3771/13199704015_72aa535bd7.jpg" alt="" />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img className='grey' src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt="" />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img className='grey' src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt="" />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img className='grey' src="https://technocrats-robotics.github.io/website/Gallery/images/thumbs/07.jpeg" alt="" />
            <h1>Indian Rover Challenge</h1>
            <p>The team poses for a click with the rover and our faculty advisor.</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img className='grey' src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink">
            <img className='grey' src="" alt="" />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn" style={{backgroundColor:'grey'}}>
          
        <a class="hexLink"></a>
        </div>
        </li>
        
    </ul>
    
    </GridColumn>
    
    <Grid.Row>
      <div>
        <Link to="/Gallery">
        <Button basic color='yellow'>Visit Gallery</Button>
        </Link>
      </div>
    </Grid.Row>
    </Grid>
    </div>
   )
  }
}

