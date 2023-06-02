/**
 * PRESENTATION
 */

// register

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

    if (result === false)
        alert('User already exists')
    else {
        registerForm.reset()

        registerView.classList.add('off')
        loginView.classList.remove('off')
    }
}

var registerLoginLink = registerView.querySelector('.register-login-link')

registerLoginLink.onclick = function(event) {
    event.preventDefault()

    registerView.classList.add('off')
    loginView.classList.remove('off')
}

// login

var loginView = document.querySelector('.login-view')
var loginForm = loginView.querySelector('.login-form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = loginForm.querySelector('#login-email')
    var email = emailInput.value

    var passwordInput = loginForm.querySelector('#login-password')
    var password = passwordInput.value

    var result = authenticateUser(email, password)

    if (result === false)
        alert('Wrong credentials')
    else {
        loginForm.reset()

        const user = retrieveUser(email)

        if (user === null)
            alert('User not found')
        else {
            loginView.classList.add('off')

            const homeTitle = homeView.querySelector('.home-title')
            homeTitle.innerText = 'Hello, ' + user.name + '!'
    
            homeView.classList.remove('off')
        }
    }
}

var loginRegisterLink = loginView.querySelector('.login-register-link')

loginRegisterLink.onclick = function(event) {
    event.preventDefault()

    loginView.classList.add('off')
    registerView.classList.remove('off')
}

// home

var homeView = document.querySelector('.home-view')

var homeLogoutButton = homeView.querySelector('.home-logout-button')

homeLogoutButton.onclick = function() {
    homeView.classList.add('off')
    loginView.classList.remove('off')
}