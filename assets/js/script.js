// Assignment code here
var passwordInfo = {
  length: null,
  lowercase: null,
  uppercase: null,
	numbers: null,
  specialCharacters: null
};
var charactersArray = [];

var buttonPrompt = function(){
	window.alert("Hello there! Please answer the following questions for your own randomized password.");
  lengthPrompt();
	typePrompt();
	writePassword();
}

var lengthPrompt = function(){
  var lengthQuestion = window.prompt("How long would you like your password to be? (Minimum of 8 and a maximum of 128)");
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
	var lowercaseQuestion = window.confirm("Would you like lowercase letters to be included in your password?")
	if(lowercaseQuestion){
		passwordInfo.lowercase = true;
	}
	var uppercaseQuestion = window.confirm("Would you like uppercase letters to be included in your password?")
	if(uppercaseQuestion){
		passwordInfo.uppercase = true;
	}
	var numbersQuestion = window.confirm("Would you like numbers to be included in your password?")
	if(numbersQuestion){
		passwordInfo.numbers = true;
	}
	var specialCharactersQuestion = window.confirm("Would you like special characters to be included in your password?")
	if(specialCharactersQuestion){
		passwordInfo.specialCharacters = true;
	}
}

var generatePassword = function(){
	var passwordString = ""

	if(passwordInfo.lowercase == true){
		var lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		charactersArray.push(lowercaseCharacters);
	}
	if(passwordInfo.uppercase == true){
		var uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
		charactersArray.push(uppercaseCharacters);
	}
	if(passwordInfo.numbers == true){
		var numberCharacters = ['1','2','3','4','5','6','7','8','9','0'];
		charactersArray.push(numberCharacters);

	}
	if(passwordInfo.specialCharacters == true){
		var specials = [' ','!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','\\','^','_','`','{','|','}','~'];
		charactersArray.push(specials);
	}

	console.log(charactersArray);

	for (i=0;i<passwordInfo.length;i++){
		var randomCounter = Math.floor((Math.random() * charactersArray.length))
	
		var randomCharacter = Math.floor((Math.random() * charactersArray[randomCounter].length))
		console.log(charactersArray[randomCounter][randomCharacter]);
		passwordString += charactersArray[randomCounter][randomCharacter];
		}
		return passwordString;
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
