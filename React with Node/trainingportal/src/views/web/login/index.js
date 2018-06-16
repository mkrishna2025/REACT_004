import React, { Component } from 'react';

export default (props) => {
  return (<div> 
    <h3>{props.title}</h3>
    <div>
      <label>User Name</label>
      <input type="text" id="username" name="username" placeholder="User Name.." onChange={props.onUserNameChange}/>
      <span class="warning"> {props.errorUserName} </span>
      <br/>
      <label>Password</label>
      <input type="text" id="password" name="password" placeholder="Password.." onChange={props.onPasswordChange} />
      <span class="warning"> {props.errorPassword} </span>
      <br/>
      <ul>
        {props.errorMessages.map(message => <li class="warning"> {message}</li>)}
      </ul>
      <input type="button" value="Submit" onClick={props.onSubmit}/>
    </div>
  </div>);
}
        