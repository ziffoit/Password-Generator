// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*'];

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function generatePassword() {
  //making sure the user selects a number that is between 8 and 128 and alerting and kicking if not
  var userLength = parseInt(window.prompt('How many characters? [8-128]'));
  //console.log(userLength) 
  if ( isNaN(userLength) || userLength < 8 || userLength > 128) {
    //be angry and thrown an error
    window.alert("Length must be between 8 and 128")
    return
  }
  
  var allowedChars = [];
  //checking if you want lower case letters. converting response to uppercase
  var useLowerCase = window.prompt('Do you want lowercase letters? (Y/N)').toUpperCase();
  //console.log(useLowerCase)
   if (useLowerCase === 'Y') {
     allowedChars = allowedChars.concat(lowerCase)
     //console.log(allowedChars)
  }
  //adding uppercase letters
  var useUpperCase = window.prompt('Do you want uppercase letters? (Y/N)').toUpperCase();
  //console.log(useUpperCase)
   if (useUpperCase === 'Y') {
     allowedChars = allowedChars.concat(upperCase)
     //console.log(allowedChars)
  }
  //adding numbers
  var useNumbers = window.prompt('Do you want numbers? (Y/N)').toUpperCase();
  //console.log(useNumbers)
   if (useNumbers === 'Y') {
     allowedChars = allowedChars.concat(numbers)
     //console.log(allowedChars)
  }
  //adding special characters
  var useSpecialChar = window.prompt('Do you want special characters? (Y/N)').toUpperCase();
  //console.log(useSpecialChar)
   if (useSpecialChar === 'Y') {
     allowedChars = allowedChars.concat(specialChar)
     //console.log(allowedChars)
  }


   //  todo other character sets
  //kicks you out if you don't choose any characters
  if (allowedChars.length === 0) {
    window.alert("You shall not pass(word).")
    return
  }
  

  

  

  var password = "";
  //selects a random character and adds it to password string
  for(var i=0; i < userLength; i++) {
    var index = Math.floor(Math.random() * allowedChars.length);
    var character = allowedChars[index];
    password = password.concat(character)
  }

  return password

}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  //if password is defined it runs
  if (password) {
    var passwordText = document.querySelector("#password");
    //prints password to browser
    passwordText.value = password;
  }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
