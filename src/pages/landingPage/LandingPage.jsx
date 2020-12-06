import React, { Component } from 'react';
import './landing.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import About from './../about_us/About';
import BlogPage from '../blog/Blog';
import Gallery from '../Gallery/Gallery';
import ScrollProgress from '../../components/ScrollProgress/ScrollProgress';

export default class LandingPage extends Component {
    state = { percent: 5 }
    componentDidMount(){
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
            <Page2></Page2>
            <Page3></Page3>
            <Page4></Page4>
            <BlogPage></BlogPage>
            <About></About>
            <Gallery></Gallery>
        </div>
    );
    }
}
