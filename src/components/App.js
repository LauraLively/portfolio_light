import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import Contact from '../components/contact'
import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Footer from '../components/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Portfolio/>
        <About />
        <Contact />
        <Footer/>
      </div>
    );
  }
}

export default App;
