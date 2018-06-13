import React, { Component } from 'react';
import './App.css';
import Login from './containers/login';
import Home from './containers/home';
import ContactUs from './containers/contactus';
import UnImplemented from './containers/unimplemented';

import Steak from './containers/steak';
import Reservation from './containers/reservation';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Steak} />
        <Route path="/home" component={Home} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/reservation" component={Reservation} />
        <Route path="*" component={UnImplemented} />
      </Switch>
    );
  }
}


export default App;
