
import { SERVER } from '../data';

export const isNullOrEmpty = (value) => {
    if(null == value || value.trim() == ''){
        return true;
    }
    return false;
}

export const validate = (options) => {

  var errorUserName = '';
  var errorPassword = '';
  var errorMessages = [];
  var isValid = true;
  
  if(isNullOrEmpty(options.userName)){
    errorUserName = 'Please enter UserName';
    isValid = false;
    errorMessages.push(errorUserName);
  }
  
  if(isNullOrEmpty(options.password)){
    errorPassword = 'Please enter Password';
    isValid = false;
    errorMessages.push(errorPassword);
  }
  
  return { 
    errorUserName: errorUserName, 
    errorPassword: errorPassword,
    errorMessages: errorMessages,
    isValid: isValid
  }
}

export const validate2 = (options) => {

    var errorUserName = '';
    var errorPassword = '';
    var errorMessages = [];
    var isValid = true;
    
    if(isNullOrEmpty(this.userName)){
      errorUserName = 'Please enter UserName';
      isValid = false;
      errorMessages.push(errorUserName);
    }
    
    if(isNullOrEmpty(this.password)){
      errorPassword = 'Please enter Password';
      isValid = false;
      errorMessages.push(errorPassword);
    }
    
    return { 
      errorUserName: errorUserName, 
      errorPassword: errorPassword,
      errorMessages: errorMessages,
      isValid: isValid
    }
  }



  export function apiPostCall(options, scope){
    var formData = new FormData();
    for(var param of options.params){
        formData.append(param.key, param.value);
    }
    var url = SERVER + options.url;
    fetch(url, {
        method: 'POST',
        body: formData
    }).then(function(response) {
         return response.json();
    }).then(function(responseJSON) {
        options.success.call(scope, responseJSON);
    }).catch(function(exception){
        options.failure(exception);
    });
}