import React, { Component } from 'react';

import { isNullOrEmpty } from '../../util';

import LoginView from '../../views/web/login';

export default class Login extends Component {
    constructor(props){
      super(props);
      this.state = {
        userName: '',
        password: '',
        errorUserName: '',
        errorPassword: '',
        errorMessages: []
      }
    }

    loginClick(event) {
			debugger;
      var errorUserName = '';
      var errorPassword = '';
      var errorMessages = [];
      var isValid = true;
      
      if(isNullOrEmpty(this.state.userName)){
        errorUserName = 'Please enter UserName';
        isValid = false;
        errorMessages.push(errorUserName);
      }
      
      if(isNullOrEmpty(this.state.password)){
        errorPassword = 'Please enter Password';
        isValid = false;
        errorMessages.push(errorPassword);
      }
      
      this.setState({ 
        errorUserName: errorUserName, 
        errorPassword: errorPassword,
        errorMessages: errorMessages
      });
      
      if(isValid) {
        alert(JSON.stringify({
          username: this.state.userName,
          password: this.state.password
        }));

        this.props.history.push('home');
      }
      
    }

    render(){
      return (
        <LoginView 
          title = {this.state.title}
          errorUserName = {this.state.errorUserName}
          errorPassword = {this.state.errorPassword}
          errorMessages = {this.state.errorMessages}
          onUserNameChange = { event => this.state.userName = event.target.value }
          onPasswordChange = { event => this.state.password = event.target.value }
          onSubmit = {this.loginClick.bind(this)}
        />
      );
    }
  }