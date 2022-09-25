import React, { Component } from 'react';
import "./App.css";
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import NavBar from './Components/NavBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="app">
          {/* Nav Section */}
          <NavBar />

          {/* Landing Page */}
          <Landing />

          {/* Challenge Section */}

          {/* Footer */}
          <Footer />


        </div>
      </div>
    )
  }
}
