// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Declaring the variables being used throughout the code 
var upperCasedCharacters
var lowerCasedCharacters
var numericCharacters
var specialCharacters

// Function to generate password with user input
function generatePassword() {

  //First step was to put in the promts under generate password. 
  let passwordLength = prompt("How many characters would you like your password to contain?");
//I need to make an if statement for the system to show that the password has to be within 10-64 characters. Then I will create a further 2 statements to warn that to generate a paaword this criteria needs to be met, finally finishing off with the a reminder of how many characters they have chosen for their passeword.

  if (passwordLength <= 9 || passwordLength >= 65) {
    alert("Your password must be between 10 and 64 characters.");
    generatePassword()

  } else if (!passwordLength) {
    alert("To generate a password, you must enter a number of characters.");
    generatePassword()

  } else {
    alert(`Your password will include ${passwordLength} characters.`);
// Here I have selected my questions to ask what sort of password they want, I have used confirm so they can easily select what the user wants in the password. 
    let userGeneratedPassword = "";
    let userSelectSpecialCharacters = confirm("Click OK to confirm using special characters.");
    let userSelectNumericCharacters = confirm("Click OK to confirm using numbers.");
    let userSelectLowerCasedCharacters = confirm("Click OK to confirm using lowercase characters.");
    let userSelectUpperCasedCharacters = confirm("Click OK to confirm using uppercase characters.");

    if (userSelectUpperCasedCharacters === false && userSelectLowerCasedCharacters === false && userSelectSpecialCharacters === false && userSelectNumericCharacters === false) {
      alert("You must choose at least one type of character in order to generate a password.");
      generatePassword()
    }
//Here we are pushing the 4 given password choices together in a concat to smash them together. Also saying if this is selected then and what is included.
    var userSelectedCharacters = [];
  
    if (userSelectSpecialCharacters) {
      userSelectedCharacters = userSelectedCharacters.concat(specialCharacters)
    }

    if (userSelectNumericCharacters) {
      userSelectedCharacters = userSelectedCharacters.concat(numericCharacters)
    }


    if (userSelectLowerCasedCharacters) {
      userSelectedCharactersn = userSelectedCharacters.concat(lowerCasedCharacters)
    }


    if (userSelectUpperCasedCharacters) {
      userSelectedCharacters = userSelectedCharacters.concat(upperCasedCharacters)
    }
//A loop is needed to run through the password length to generate a password, chosen a match random as is the formula to create a genuine password, whilst setting what the user generated password would equal within the loop to pull the data. 
    for (var i = 0; i < passwordLength; i++) {
      userGeneratedPassword = userGeneratedPassword + userSelectedCharacters[Math.floor(Math.random() * userSelectedCharacters.length)];
    }

    var passwordText = document.querySelector('#password');
    passwordText.value = ""

    passwordText.value = userGeneratedPassword;
  }

};

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);