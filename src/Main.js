import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Feature from './Feature'
import FeaturedCards from './FeaturedCards'
import Footer from './Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav />
        <Feature />
        <FeaturedCards />
        <Footer />
      </div>
    )
  }
}