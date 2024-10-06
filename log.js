let RequestCodeButton = document.getElementById("Request");
let PasswordText = document.getElementById("PasswordText");
let MyInput = document.getElementById("Password");
let textAdmin = document.getElementById("textAdmin");

RequestCodeButton.addEventListener("click" , () => {
    if (PasswordText.innerText === "Code") {
        PasswordText.innerText = "Password";
        MyInput.placeholder = "Enter your password";
        RequestCodeButton.innerText = "Request access";
        textAdmin.style.opacity = "1";
    } else {
        PasswordText.innerText = "Code";
        MyInput.placeholder = "Enter your code";
        RequestCodeButton.innerText = "i Have an account";
        textAdmin.style.opacity = "0.1";
        } 
})
