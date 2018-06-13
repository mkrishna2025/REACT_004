import React, { Component } from 'react';


export default class LoginView extends Component {
    render(){
        return (
           <div> 
            <h3>{this.props.title}</h3>
            <div>
              <label>User Name</label>
              <input type="text" id="username" name="username" placeholder="User Name.." onChange={ this.props.onUserNameChange}/>
              <span class="warning"> {this.props.errorUserName} </span>
              <br/>
              <label>Password</label>
              <input type="text" id="password" name="password" placeholder="Password.." onChange={ this.props.onPasswordChange} />
              <span class="warning"> {this.props.errorPassword} </span>
              <br/>
              <ul>
                {this.props.errorMessages.map(message => <li class="warning"> {message}</li>)}
              </ul>
              <input type="button" value="Submit" onClick={this.props.onSubmit}/>
            </div>
          </div>
        );
    }
}