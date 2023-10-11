import { validatePassword  } from "./validate.js"
import { signUp  } from "./storage.js"


const signUpForm = document.getElementById("signup");
const fullNameField = signUpForm.elements["fullName"];
const userNameField = signUpForm.elements["userName"];
const passwordField = signUpForm.elements["password"];

signUpForm.addEventListener("submit", function(event){
    event.preventDefault();

    const fullName = fullNameField.value;
    const username = userNameField.value;
    const password = passwordField.value;

    const userData = signUp(fullName, username, password);

    console.log('User signed up using:', userData);

    if(validatePassword(passwordField)){
        // alert("Your Password is Strong")
    }
})