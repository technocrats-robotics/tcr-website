import React, { Component } from 'react';
import './landing.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import About from './../about_us/About';
import ContactUs from '../contact_us/ContactUs';

import {db} from '../../services/google-firebase/setup'

export default class LandingPage extends Component {
    constructor(){
        super()
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    state = { percent: 5 ,intro: ' '}
    async getPageData(){
        let content = await db.collection('content').doc('landing_page').get()
        // this.setState({intro: temp.intro})
        console.log(content);

    }
    async componentDidMount(){
        this.getPageData()
        window.onscroll = () => {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            // document.getElementById("myBar").style.width = scrolled + "%";
            this.setState({percent: scrolled});
            console.log(scrolled);
            } ;
    }
  render() {
    return(
        <div>
            {/* <ScrollProgress percent={this.state.percent}></ScrollProgress> */}
            <Page1></Page1>
            <Page2 intro={this.state.intro}></Page2>
            {/* <Page2></Page2> */}
            <Page3></Page3>
            <Page4></Page4>
            <About></About>
            <ContactUs></ContactUs>
        </div>
    );
    }
}
