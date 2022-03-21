// Assignment code here
var passwordInfo = {
  length: null,
  lowercase: null,
  uppercase: null,
  specialCharacters: null
};

var buttonPrompt = function(){
	window.alert("Hello there! Please answer the following questions for your own randomized password.");
  lengthPrompt();
	typePrompt();
	generatePassword();
}

var lengthPrompt = function(){
  var lengthQuestion = window.prompt("How long would you like your password to be? (Minimum of 8 and a maximum of 128)");
  console.log(lengthQuestion);
  if(lengthQuestion >= 8){
    if(lengthQuestion < 129){
			lengthQuestion = Math.floor(lengthQuestion);
      window.alert("Thank you! Your password will be " + lengthQuestion + " characters long.");
			passwordInfo.length = lengthQuestion
    }
    else{
      window.alert("Please enter a valid number. The number must be between 8 and 128.")
      lengthPrompt()
    }
  }
  else{
    window.alert("Please enter a valid number. The number must be between 8 and 128.")
    lengthPrompt()
  }
}

var typePrompt = function(){

}

var generatePassword = function(){

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", buttonPrompt);
