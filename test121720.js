let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "?!@#$%^&*";
let passwordlength

//generate password function

var generatePassword = function(){
 passwordLength = parseInt(prompt ("Please type password length from 8-128 characters"));{
    
  while (passwordLength <=7 || passwordLength >=128 || !passwordLength){
      alert("Please enter a valid number between 8 and 128");
      return generatePassword();
  };

    passwordUppercase = confirm("Would you like uppercase letters? Click 'OK' for yes, Click 'Cancel' for no.");

      alert("Thanks for your response!");
      
    passwordLowercase = confirm("Would you like lowercase letters?  Click 'OK' for yes, Click 'Cancel' for no.");
        alert("Thanks for your response!");
        
    passwordNumbers = confirm("Would you like numbers?  Click 'OK' for yes, Click 'Cancel' for no.");
        alert("Thanks for your response!");
    
    passwordSymbols = confirm("Would you like symbols?  Click 'OK' for yes, Click 'Cancel' for no.");
        alert("Thanks for your response!");        
    }

 let passwordNew = '';

  if (passwordUppercase === true){
    passwordNew += uppercase;
  }
  if (passwordLowercase === true){
    passwordNew += lowercase;
  }
  if (passwordNumbers === true){
    passwordNew += numbers;
  }

  if (passwordSymbols === true){
    passwordNew += symbols;
  }

 //password loop
  let password = "" ;

  for(i=0; i< passwordLength; i++){
   password += passwordNew.charAt(Math.floor(Math.random() * passwordNew.length));

  }
  return password;
}
//password loop end


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
