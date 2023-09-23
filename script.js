// Assignment code here
var passDeets = {
  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowerCase: 'abcdefghijklmnopqrstuvwxyz',
  symbols: '!@#$%^&*(){}[]=<>/,.',
  numbers: '0123456789',
};

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
var lengthEl = document.getElementById('length');
var uppercaseEl = document.getElementById('uppercase');
var lowercaseEl = document.getElementById('lowercase');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');


// Write password to the #password input
function generatePassword() {
  var length = +lengthEl.value;
  var hasLower = lowercaseEl.checked;
  var hasUpper = uppercaseEl.checked;
  var hasNumber = numbersEl.checked;
  var hasSymbol = symbolsEl.checked;
  //function to pull  pass deets and compare to whether the checkbox is used

  let generatedPassword = '';
  const typesCount = hasLower + hasUpper + hasNumber + hasSymbol;
  
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
