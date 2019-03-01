import React, { Component } from "react";
import data from "../data.json"

import Slider from 'react-animated-slider';
import Intro from '../pages/Intro';
import About from '../pages/About';
import Coding from "../pages/Coding";
import Acting from '../pages/Acting';
// import Contact from '../pages/Contact';

import 'react-animated-slider/build/horizontal.css';

 
class Nav extends Component {
  state = {
    data: data
  }

  render() {
    //var content = this.state.data;
    return(
      <Slider className="slider-wrapper">
          <div key="1"><Intro></Intro></div>
          <div key="3"><About></About></div>
          <div key="2"><Coding></Coding></div>
      {/* {content.map((article, index) => <div key={index}>
      <h2>{article.title}</h2>
      <div>{article.description}</div>
      </div>)} */}
      </Slider>
    )
  }
}

export default Nav;