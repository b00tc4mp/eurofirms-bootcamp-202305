/**
 * DATA
 */

var users = []

users.push({ name: 'Pin Ocho', email: 'pin@ocho.com', password: '123123123' })
users.push({ name: 'John Doe', email: 'john@doe.com', password: '123123123' })
users.push({ name: 'Ada Love', email: 'ada@love.com', password: '123123123' })

/**
 * LOGIC
 */

function registerUser(name, email, password) {
    var user

    for (var i = 0; i < users.length; i++) {
        var _user = users[i]

        if (_user.email === email) {
            user = _user

            break
        }
    }

    if (user !== undefined)
        return false
    else {
        user = {}

        user.name = name
        user.email = email
        user.password = password

        users.push(user)

        return true
    }
}

function authenticateUser(email, password) {
    var user

    for (var i = 0; i < users.length; i++) {
        var _user = users[i]

        if (_user.email === email) {
            user = _user

            break
        }
    }

    if (user === undefined)
        return false
    else if (user.password !== password)
        return false
    else
        return true
}
funnction retriewUser(email){
    for(var i=0; i <user.length;i++){
        if(email===user[i].email){
            return false
        }
    }

}

/**
 * PRESENTATION
 */

// register

var registerView = document.querySelector('.register-view')
var registerForm = registerView.querySelector('.register-form')

registerForm.onsubmit = function (event) {
    event.preventDefault()

    var nameInput = registerForm.querySelector('#name')
    var name = nameInput.value

    var emailInput = registerForm.querySelector('#email')
    var email = emailInput.value

    var passwordInput = registerForm.querySelector('#password')
    var password = passwordInput.value

    var result = registerUser(name, email, password)

    if (result === false)
        alert('User already exists')
    else {
        registerView.classList.add('off')
        loginView.classList.remove('off')
    }
}

// login

var loginView = document.querySelector('.login-view')
var loginForm = loginView.querySelector('.login-form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = loginForm.querySelector('#email')
    var email = emailInput.value

    var passwordInput = loginForm.querySelector('#password')
    var password = passwordInput.value

    var result = authenticateUser(email, password)

    if (result === false) //(!result)
        alert('Wrong credentials')
    else {
        loginView.classList.add('off')
        homeView.classList.remove('off')
        
        var user=retriewUser(email)
    
    }
}

// home

var homeView = document.querySelector('.home-view')

