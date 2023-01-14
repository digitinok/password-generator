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
  // Reading in the expected length of the password and checking the size and format
  let passwordLength;
  do {
	  passwordLength = parseInt(prompt("How many character shall you password have?\n Password length should be between 10 and 69 characters"));
  } while (passwordLength < 10 || passwordLength > 69 || isNaN(passwordLength)); 
  
  // getting the expected characters in the password
  const lower = confirm("Would you like to use lower case letters a-z in your password?");
  const upper = confirm("Would you like to use upper case letters A-Zin your password?");
  const numbers = confirm("Would you like to use numbers 0-9 in your password?");
  const special = confirm("Would you like to use special charactersin your password?");

  return [passwordLength, lower, upper, numbers, special]
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
  [passwordLength, lower, upper, numbers, special] = getPasswordOptions();
  return [passwordLength, lower, upper, numbers, special];
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