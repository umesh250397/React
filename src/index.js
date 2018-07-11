import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/nav_bar';
import Carousel_react from './components/carousel';
import Assignment from './components/assignment';
import Card1 from './components/card1';
import Card2 from './components/card2';
import Card3 from './components/card3';
import Footer from './components/footer';
import { Modal } from 'react-bootstrap';

class App1 extends Component {
  render() {
    return (
      <div>
          <NavBar/>
          <Carousel_react />
          <Assignment />
          <Card1 />
          <Card2 />
          <Card3 />
          <Footer />
      </div>
    );
  }
}

class App2 extends Component {
  render() {
    return (
      <div>
          <Profile />
      </div>
    );
  }
}

ReactDOM.render(<App1 />  , document.querySelector('.container-fluid'));
