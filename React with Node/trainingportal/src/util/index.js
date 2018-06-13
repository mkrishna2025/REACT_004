
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