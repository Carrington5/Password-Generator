// Assignment code here
function generatePassword() {
  // variables for criteria defined
  var passwordLength = prompt("Please select password length (must be at least 8 characters and no more than 128).");
  var passwordLowercase = window.confirm("Include Lowercase characters in your password? (OK for Yes, Cancel for No)");
  var passwordUppercase = window.confirm("Include Uppercase characters in your password? (OK for Yes, Cancel for No)");
  var passwordNumeric = window.confirm("Include Numbers in your password? (OK for Yes, Cancel for No)");
  var passwordSpecial = window.confirm("Include Special characters in your password? (OK for Yes, Cancel for No)");

  // Validation
  if (passwordLowercase === false && passwordUppercase === false && passwordNumeric === false && passwordSpecial === false){
    window.alert("You must select at least 1 criteria to generate a password.");
    return generatePassword();
  }

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) === true) {
    window.alert("Invalid length. Please choose a password length between 8 and 128 characters.");
    return generatePassword();
  }

  // all possible characters for criteria 
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberCharacters = "0123456789";
  var specialCharacters = "!#$%&()*+,-./:;<=>?@]/[^_`{|}~";

  // character string of selected password criteria
  var characterOption = "";

  // characterOption builder section
  if (passwordLowercase === true) {
    characterOption = characterOption + lowercaseLetters
  }
  if (passwordUppercase === true) {
    characterOption = characterOption + uppercaseLetters
  }
  if (passwordNumeric === true) {
    characterOption = characterOption + numberCharacters
  }
  if (passwordSpecial === true) {
    characterOption = characterOption + specialCharacters
  }

  // final password container
  var password = "";

  // loop indexing of characterOptions by length of password as integer
  for (i = 0; i < (parseInt(passwordLength)); i++){
    var indexSelector = Math.floor(Math.random() * characterOption.length);
    password = password + characterOption[indexSelector];
  }
  console.log(password);

  // present generated password to user
  return password
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
generateBtn.addEventListener("click", writePassword);