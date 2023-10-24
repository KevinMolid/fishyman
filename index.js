const logInMenuBtn = document.getElementById("logIn-menu-btn")
const registerMenuBtn = document.getElementById("register-menu-btn")
const loginCloseBtn = document.getElementById("login-close-btn")
const registerCloseBtn = document.getElementById("register-close-btn")

const registerA = document.getElementById("register-a")

/* FORMS */
/* Register user */
const registerFormDiv = document.getElementById("register-form-div")
const registerForm = document.getElementById("register-form")
/* Log in */
const loginFormDiv = document.getElementById("login-form-div")
const loginForm = document.getElementById("login-form")

/* Submit register-form */
registerForm.addEventListener("submit", function(e){
    e.preventDefault()
})

/* Submit login-form */
loginForm.addEventListener("submit", function(e){
    e.preventDefault()
})

/* Show register-form*/
registerMenuBtn.addEventListener("click", function() {
    registerFormDiv.style.display = "flex"
})

registerA.addEventListener("click", function() {
    registerFormDiv.style.display = "flex"
})

/* Show login-form*/
logInMenuBtn.addEventListener("click", function() {
    loginFormDiv.style.display = "flex"
})

/* Hide register-form */
registerCloseBtn.addEventListener("click", function() {
    registerFormDiv.style.display = "none"
})

/* Hide login-form */
loginCloseBtn.addEventListener("click", function() {
    loginFormDiv.style.display = "none"
})