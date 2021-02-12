import React, { Component } from 'react';
import { Button} from 'semantic-ui-react';
import Page1 from './Page1';
import Page2 from './Page2';
import TeamMembers from './TeamMembers';
import './About.css';
var x = window.matchMedia("(max-width: 700px)")


export default class About extends Component {
    state = { 
        activeItem: 'collapse', 
    };
    
    handleCollapse = ()=> {
        document.getElementsByClassName('secondAboutPage')[0].scrollIntoView({behavior:'smooth'});
        this.setState({activeItem:'collapse'})
        // if(!x.matches){
        // setTimeout(()=>{window.scrollBy({top:150,behavior:'smooth'})},1000)
        // }
    }
    handleExpand = ()=> {
        document.getElementsByClassName('secondAboutPage')[0].scrollIntoView({behavior:'smooth'});
        this.setState({activeItem:'expand'})
        // if(!x.matches){
        //     setTimeout(()=>{window.scrollBy({top:150,behavior:'smooth'})},1000)
        //     }
    }
  render() {
    // return(
            switch (this.state.activeItem) {
                case "expand":
                    return(
                    <div>
                        <Page1></Page1>
                        <TeamMembers />;
                        <Button style={{position:'fixed',top:0,right:40}} onClick={this.handleCollapse} color='yellow' basic>Collapse</Button>
                    </div>
                    )
                default:
                    return(
                    <div>
                        <Page1 />;
                        <Page2 />;
                        <Button className='ExpandAboutButton' onClick={this.handleExpand} color='yellow' basic>Expand</Button>
                    </div>
                    )
            }
        // </div>
    // );
    }
}