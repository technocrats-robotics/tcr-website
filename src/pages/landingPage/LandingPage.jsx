import React, { Component } from 'react';
import './landing.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import About from './../about_us/About';
import ContactUs from '../contact_us/ContactUs';
import ScrollProgress from '../../components/ScrollProgress/ScrollProgress'

import {db} from '../../services/google-firebase/setup'
import { Visibility } from 'semantic-ui-react';

export default class LandingPage extends Component {
    constructor(){
        super()
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    state = { percent: 0 ,intro: ' ', contentAll: {stats:{'competitions_participated':'12', 'robots-made':"7"}}}
    async getPageData(){
        let content = await (await db.collection('content').doc('landing_page').get()).data()
        this.setState({intro: content.intro})
        this.setState({contentAll: content})

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
            <Page1></Page1>
            <Page2 content={this.state.contentAll}></Page2>
            <Page3></Page3>
            <Page4></Page4>
            <About></About>
            <ContactUs></ContactUs>
            {/* </Visibility> */}
        </div>
    );
    }
}
