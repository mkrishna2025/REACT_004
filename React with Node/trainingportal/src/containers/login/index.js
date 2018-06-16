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

        var formData = new FormData();
        formData.append('username', this.state.userName);
        formData.append('password', this.state.password);

        fetch('http://trainingkit.azurewebsites.net/api/Users/CheckUserExists',{
          method:'POST',
          body: formData
        }).then(response => {
          if(response.status == 200){
            return response.json();
          } else {
            alert('Login Failed');
          }
        })
        .then(response => {
          if(response.data){
            this.props.history.push('home');
          } else {
            alert('Invalid Credentials');
          }
        })
        .catch(error => {
          alert(error);
        });

        /*apiPostCall({
          url: 'Users/CheckUserExists',
          params:[
            { key: 'username', value: this.state.username },
            { key: 'password', value: this.state.password }
          ],
          success: function(response){
            debugger;
            if(response.success && response.data){
              alert('Logged in successfully');
              //this.props.history.push('/home');
              localStorage['username'] = this.state.userName;
              Authentication.authenticate(() => {
                this.props.history.push({
                  pathname: '/home',
                  params: {userName: this.state.userName}
                });
              });
              
            } else{
              alert('Invalid Credentials');
            }
          },
          failure: function(exception){
            debugger;
          }
        }, this);*/

        //
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