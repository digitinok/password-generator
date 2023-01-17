// Array of special characters to be included in password
const specialCharacters = [
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
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
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
const upperCasedCharacters = [
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

// Function to prompt user for password options
function getPasswordOptions() {
  // declaring variables
  let password = {
    length: 0,
  };

  // Reading in the expected length of the password and checking the size and format
	password.length = parseInt(prompt("How many characters shall you password have? \nPassword length should be between 10 and 64 characters"));
  
  // checking the length of the password and if it is numeric
  if (password.length < 10 || password.length > 64 || isNaN(password.length)) {
    password.message =  "Your Password needs to be between 10 and 64 characters long!";
    return password;
  }
  
  console.log(password.length)
  // getting the expected characters in the password
  alert("Please choose at least one of the following four options:")
  password.hasLowerCase = confirm("Would you like to use lower case letters a-z in your password?");
  password.hasUpperCase = confirm("Would you like to use upper case letters A-Z in your password?");
  password.hasNumbers = confirm("Would you like to use numbers 0-9 in your password?");
  password.hasSpecialCharacters = confirm("Would you like to use special characters in your password?");

  if (!( password.hasLowerCase || password.hasUpperCase || password.hasNumbers || password.hasSpecialCharacters )) {
    password.message =  "No valid Password option chosen (a-z, A-Z, 0-9 or special characters).\n Please try again.";
  }
  return password;
}

// Function for getting a random element from an array
function getRandom(arr) {
  if (!Array.isArray(arr) || arr.length < 1) {
    return
  }

  return arr[Math.floor(Math.random()*arr.length)]
}

// Function to generate password with user input
function generatePassword() {
  // initialize variables to be empty
  let possibleCharacters = [];
  let password = getPasswordOptions();
  password.password = "";
 
  if ('message' in password) {
    return password.message;
  }

  // ensure each chosen character category is use at least once 
  // and create one array with all possible characters from which to choose randomly
  if (password.hasLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    password.password += getRandom(lowerCasedCharacters);
  }
  if (password.hasUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    password.password += getRandom(upperCasedCharacters);
  }
  if (password.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    password.password += getRandom(numericCharacters);
  }
  if (password.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    password.password += getRandom(specialCharacters);
  }
  // password length to get characters
  for (let i = password.password.length; i < password.length; i++) {
    password.password += getRandom(possibleCharacters); 
  }
  console.log(password.password, password.password.length)
  return password.password;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
//  var passwordText = document.querySelector('#password');
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);