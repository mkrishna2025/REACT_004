import React, { Component } from 'react';


export default class LoginView extends Component {
    render(){
        return (
           <div> 
            <h3>{this.props.title}</h3>
            <div>
              <label>User Name</label>
              <input type="text" id="username" name="username" placeholder="User Name.." onChange={ event => this.state.userName = event.target.value}/>
              <span class="warning"> {this.state.errorUserName} </span>
              <br/>
              <label>Password</label>
              <input type="text" id="password" name="password" placeholder="Password.." onChange={ event => this.state.password = event.target.value} />
              <span class="warning"> {this.state.errorPassword} </span>
              <br/>
              <ul>
                {this.state.errorMessages.map(message => <li class="warning"> {message}</li>)}
              </ul>
              <input type="button" value="Submit" onClick={this.loginClick.bind(this)}/>
            </div>
          </div>
        );
    }
}