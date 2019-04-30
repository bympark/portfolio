import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavBar } from './containers/NavBar';
import { Home } from './containers/Home'
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className='App'>
        <Router>
          <div className='frame'>
            <NavBar />
          </div>
          <div className='content'>
            <Route exact path="/" component={Home}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
