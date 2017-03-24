function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  //Checks if username is at least 6 characters
  if (userLength >= 6){
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  else {
    document.getElementById("usernameError").innerHTML="Username must contain at least 6 characters!";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  //Password is between 6-20 characters
  if (passEntered.length >= 6 && passEntered.length <= 20){
    document.getElementById("passwordGroup").classList.add("has-success");
  }
  //Password is not between 6-20 characters
  else {
    document.getElementById("passwordError").innerHTML="Password must be between 6-20 characters";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }

  //Show message that there is an error with the password...
  if (passEntered == "password"){
    document.getElementById("passwordError").innerHTML="Password cannot be password!";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }

  //Confirms password was valid; no error;
  else {
    document.getElementById("passwordGroup").classList.add("has-success");
  }
  if (passEntered == userEntered){
    document.getElementById("usernameError").innerHTML="Username and password cannot be the the same!";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");

    document.getElementById("passwordError").innerHTML="Username and password cannot be the the same!";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }

  //Checks if there are any spaces in username
  if (userEntered.indexOf(' ')){
    document.getElementById("usernameError").innerHTML="Username cannot contain any spaces!";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else {
    document.getElementById("usernameGroup").classList.add("has-success");
  }

  //Checks that password != password
  if (passEntered.toLowerCase() == 'password'){
    document.getElementById("passwordError").innerHTML="Password cannot be password!";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
