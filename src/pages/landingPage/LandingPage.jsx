import React, { Component } from 'react';
import './landing.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import About from './../about_us/About';
import ContactUs from '../contact_us/ContactUs';
import SideNavMob from '../../components/SideNavMob';
import {  Label, Icon, Button } from 'semantic-ui-react';
import ScrollProgress from '../../components/ScrollProgress/ScrollProgress'

import {db} from '../../services/google-firebase/setup'
import { Visibility } from 'semantic-ui-react';

var x = window.matchMedia("(max-width: 700px)")
export default class LandingPage extends Component {
    constructor(){
        super()
        this.componentDidMount = this.componentDidMount.bind(this);
        this.toggleSidebarVisibility = this.toggleSidebarVisibility.bind(this);
        setInterval(()=>{
            document.getElementsByClassName('loadScreen')[0].style.display='none';
            
            setInterval(()=>{
                document.getElementsByClassName('mainPageContent')[0].style.opacity='1.0';
            },1000);
        },2000);
    }
    state = { visibility:false,percent: 0 ,intro: ' ', contentAll: {stats:{'competitions_participated':'12', 'robots-made':"7"}}}
    async getPageData(){
        let content = await (await db.collection('content').doc('landing_page').get()).data()
        this.setState({intro: content.intro})
        this.setState({contentAll: content})

    }
    toggleSidebarVisibility(){
        this.setState({visibility: !this.state.visibility})
    }
    handleScrollingDown = (e,{calculations}) =>{
        console.log(calculations);
        let pixs = calculations.pixelsPassed;
        let dir = calculations.direction;
        // let nothing = (pixs > 5 && pixs<700 && dir=='down') ? document.getElementsByClassName('secondPage')[0].scrollIntoView({behavior:'smooth'})  : console.log('none')
        // nothing = (pixs > 1300 && pixs<1500 && dir=='down') ? window.scrollBy(0,300) : console.log('none')
        // nothing = (pixs > 3000 && pixs<3500 && dir=='down') ? window.scrollBy(0,720) : console.log('none')
    }
    async componentDidMount(){
        if(x.matches){
            document.getElementsByClassName('firstPage')[0].style.backgroundImage = "url('/imageBackFirstPage.jpg')"
        }
        this.getPageData()
        // window.onscroll = () => {
        //     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        //     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        //     var scrolled = (winScroll / height) * 100;
        //     // document.getElementById("myBar").style.width = scrolled + "%";
        //     this.setState({percent: scrolled});
        //     console.log(scrolled);
        //     } ;
    }
  render() {
    return(
        <div>
            {/* <Visibility continuous onOnScreen={this.handleScrollingDown}> */}
            <div className='loadScreen'>
    <Icon size='massive' color='red' loading name='spinner' /></div>
            <Button color='red' className='SideNavMobButton' onClick={this.toggleSidebarVisibility} icon>
                <Icon name='arrow right' />
            </Button>
            <SideNavMob visibility={this.state.visibility} visibilityToggle={this.toggleSidebarVisibility}></SideNavMob>
            <Page1></Page1>
            <Page2 content={this.state.contentAll}></Page2>
            <Page3></Page3>
            {/* <Page4></Page4> */}
            <About></About>
            <ContactUs></ContactUs>
            {/* </Visibility> */}
        </div>
    );
    }
}
