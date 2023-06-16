var registerView = document.querySelector('.register-view')
var registerForm = registerView.querySelector('.register-form')


registerForm.onsubmit = function (event) {
    event.preventDefault()

    var nameInput = registerForm.querySelector('#register-name')
    var name = nameInput.value

    var emailInput = registerForm.querySelector('#register-email')
    var email = emailInput.value

    var passwordInput = registerForm.querySelector('#register-password')
    var password = passwordInput.value

    var result = registerUser(name, email, password)
    if (result === false) {
        alert('User already exists')
    } else {
        registerForm.reset()
        registerView.classList.add('off')
        loginView.classList.remove('off')
    }
}
var registerLoginLink = registerView.querySelector('.register-login-link')

registerLoginLink.onclick = function (event) {
    event.preventDefault()
    registerView.classList.add('off')
    loginView.classList.remove('off')

}