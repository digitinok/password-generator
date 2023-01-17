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
  let passwordLength;

  // Reading in the expected length of the password and checking the size and format
  do {
	  passwordLength = parseInt(prompt("How many characters shall you password have? \nPassword length should be between 10 and 64 characters"));
  } while (passwordLength < 10 || passwordLength > 64 || isNaN(passwordLength)); 
  
  // getting the expected characters in the password
  alert("please choose at least one of the follwing four options:")
  const hasLowerCase = confirm("Would you like to use lower case letters a-z in your password?");
  const hasUpperCase = confirm("Would you like to use upper case letters A-Z in your password?");
  const hasNumbers = confirm("Would you like to use numbers 0-9 in your password?");
  const hasSpecialCharacters = confirm("Would you like to use special characters in your password?");

  return [passwordLength, hasLowerCase, hasUpperCase, hasNumbers, hasSpecialCharacters]
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
  let password = "";

  [passwordLength, hasLowerCase, hasUpperCase, hasNumbers, hasSpecialCharacters] = getPasswordOptions();
 
  if (!( hasLowerCase || hasUpperCase || hasNumbers || hasSpecialCharacters )) {
    return "No valid Password option chosen\n please try again"
  }
  // ensure each chosen character category is use at least once 
  // and create one array with all possible characters from which to choose randomly
  if (hasLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    password += getRandom(lowerCasedCharacters);
  }
  if (hasUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    password += getRandom(upperCasedCharacters);
  }
  if (hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    password += getRandom(numericCharacters);
  }
  if (hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    password += getRandom(specialCharacters);
  }
  // password length to get characters
  for (let i = password.length; i < passwordLength; i++) {
    password += getRandom(possibleCharacters); 
  }
  console.log(password, password.length)
  return password;
  return [passwordLength, hasLowerCase, hasUpperCase, hasNumbers, hasSpecialCharacters];
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