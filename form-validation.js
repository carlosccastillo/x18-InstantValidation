function register(){
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  alert("Username: " + userEntered + " Password: "+ passEntered);
}


function validateUsername(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var usernameLength = userEntered.length;

  //Checks if username is at least 6 characters
  if (userLength < 6) {
    document.getElementById("usernameError").innerHTML="Username must contain at least 6 characters!";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.remove("has-success");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  //Checks if username contains any spaces
  else if (userEntered.indexOf(" ")){
    document.getElementById("usernameError").innerHTML="Username cannot contain any spaces!";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.remove("has-success");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  //Confirms valid username
  else {
    document.getElementById("usernameError").innerHTML="";
    document.getElementById("usernameGroup").classList.remove("has-error");
    document.getElementById("usernameGroup").classList.add("has-success");
  }

  function validatePassword(){
    var userEntered = document.getElementById("user").value;
    var passEntered = document.getElementById("pass").value;
    var passwordLength = passEntered.length;
    //Checks if username is less than 6 characters
    if (passEntered.length < 6){
      document.getElementById("passwordError").innerHTML="Password must be between 6-20 characters";
      document.getElementById("passwordError").classList.remove("hidden-message");
      document.getElementById("passwordError").classList.add("shown-message");
      document.getElementById("passwordGroup").classList.remove("has-success");
      document.getElementById("passwordGroup").classList.add("has-error");
    }
    //Checks if username is greater than 20 characters
    else if (passEntered.length > 20){
      document.getElementById("passwordError").innerHTML="Password must be between 6-20 characters";
      document.getElementById("passwordError").classList.remove("hidden-message");
      document.getElementById("passwordError").classList.add("shown-message");
      document.getElementById("passwordGroup").classList.remove("has-success");
      document.getElementById("passwordGroup").classList.add("has-error");
    }
    //Username cannot be the same as password
    else if (userEntered == passEntered){
      document.getElementById("passwordError").innerHTML="Username and password cannot be the the same!";
      document.getElementById("passwordError").classList.remove("hidden-message");
      document.getElementById("passwordError").classList.add("shown-message");
      document.getElementById("passwordGroup").classList.remove("has-success");
      document.getElementById("passwordGroup").classList.add("has-error");
    }
    //Password cannot be password
    else if ((passEntered.toLowerCase()) == "password"){
      document.getElementById("passwordError").innerHTML="Password cannot be password!";
      document.getElementById("passwordError").classList.remove("hidden-message");
      document.getElementById("passwordError").classList.add("shown-message");
      document.getElementById("passwordGroup").classList.remove("has-success");
      document.getElementById("passwordGroup").classList.add("has-error");
    }
    //Confirms password was valid; no error;
    else {
      document.getElementById("passwordError").innerHTML="";
      document.getElementById("passwordGroup").classList.remove("has-error");
      document.getElementById("passwordGroup").classList.add("has-success");
    }
