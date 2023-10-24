const logInMenuBtn = document.getElementById("logIn-menu-btn")
const loginFormDiv = document.getElementById("login-form-div")
const loginCloseBtn = document.getElementById("login-close-btn")

logInMenuBtn.addEventListener("click", function() {
    loginFormDiv.style.display = "flex"
})

loginCloseBtn.addEventListener("click", function() {
    loginFormDiv.style.display = "none"
})