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
	  passwordLength = parseInt(prompt("How many character shall you password have?\n Password length should be between 10 and 69 characters"));
    console.log(passwordLength)
  } while (passwordLength < 10 || passwordLength > 69 || isNaN(passwordLength)); 
  
  // getting the expected characters in the password
  alert("please choose at least one of the follwing four options:")
  const lower = confirm("Would you like to use lower case letters a-z in your password?");
  const upper = confirm("Would you like to use upper case letters A-Z in your password?");
  const numbers = confirm("Would you like to use numbers 0-9 in your password?");
  const special = confirm("Would you like to use special characters in your password?");

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
  let arr = [];
  let password = "";
  [passwordLength, lower, upper, numbers, special] = getPasswordOptions();
  if (!( lower || upper || numbers || special )) {
    return "No valid Password option chosen\n please try again"
  }
  if (lower) {
    arr = arr.concat(lowerCasedCharacters);
  }
  if (lower) {
    arr = arr.concat(upperCasedCharacters);
  }
  if (lower) {
    arr = arr.concat(numericCharacters);
  }
  if (lower) {
    arr = arr.concat(specialCharacters);
  }
  // password length to get characters
  for (let i = 0; i < passwordLength; i++) {
    password += getRandom(arr); 
  }

  return password;
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