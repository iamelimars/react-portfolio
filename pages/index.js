import React, { Component } from 'react'
import ReactDOM from "react-dom";
import '../styles/main.scss'
import ReactFullpage from '@fullpage/react-fullpage';

import Intro from '../components/HomePage/Intro'
import Footer from '../components/HomePage/Footer'
import About from '../components/HomePage/About'
import Skills from '../components/HomePage/Skills'
import Work from '../components/HomePage/Work'

import TweenLite from "gsap/TweenLite"




const originalColors = ["#282c34", "#ff5f45", "#0798ec"];

class Home extends Component {

  constructor(props) {
    super(props);
    this.square = document.getElementsByClassName('shape1');
    this.state = {
      sectionsColor: [...originalColors],
      fullpages: [
        {
          text: "section 1"
        },
        {
          text: "section 2"
        }
      ]
    };
  }

  componentDidMount() {
    TweenLite.to(document.getElementsByClassName('shape1'), 2, {width: "2000px"});
    
  }

  onLeave(origin, destination, direction) {
    // console.log("onLeave", { origin, destination, direction });
    switch (destination.index) {
      case 0:
        console.log('Introo');
        TweenLite.to(document.getElementsByClassName('shape1'), 2, {width:"2000px", height:"150px"});
        break;
      case 1:
        console.log('About');
        break;
      case 2:
        console.log('Work');
        break;
      case 3:
        console.log('Skills');
        break;
      case 4:
        console.log('Footer');
        break;

      default:
        break;
    }
    
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }



  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }



    return (
      <div className="App">
        <div className="shape1"></div>
        <div className="shape2"></div>
        <ReactFullpage
          navigation
          onLeave={this.onLeave.bind(this)}
          // sectionsColor={this.state.sectionsColor}
          render={comp =>
            (
              <ReactFullpage.Wrapper>
                <Intro />
                <About />
                <Work />
                <Skills />
                <Footer />
                
              </ReactFullpage.Wrapper>
            )
          }
        />
      </div>
    );
  }

}

export default Home
