 export function showError(element,errorMessage){
    const errorContainer = element.parentNode.querySelector("small");
    errorContainer.innerText = errorMessage;
    return false;
 }

 export function validatePassword(element){
    const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/
    const password = element.value.trim();
    if(!passwordRegEx.test(password)){
        const Message = "Password must contain small letters, capital letters, special characters and number"
    
        alert(Message)
        showError(element,Message)
    }
    return true
 }