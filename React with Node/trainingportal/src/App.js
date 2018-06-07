import React, { Component } from 'react';
import './App.css';
import Login from './containers/login';
import Home from './containers/home';
import ContactUs from './containers/contactus';


class App extends Component {
  render() {
    return (
      <Login />
    );
  }
}

export default App;
