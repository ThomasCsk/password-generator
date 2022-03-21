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
