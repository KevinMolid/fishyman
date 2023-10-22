const logInMenuBtn = document.getElementById("logIn-menu-btn")
const logInModal = document.getElementById("logIn-modal")
const loginCloseBtn = document.getElementById("login-close-btn")

logInMenuBtn.addEventListener("click", function() {
    logInModal.style.display = "flex"
})

loginCloseBtn.addEventListener("click", function() {
    logInModal.style.display = "none"
})