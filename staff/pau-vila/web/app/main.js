//database
var users = [];

users.push({ name: 'Cruela Devil', email: 'cruela@devil.com', password: '1234' })
users.push({ name: 'Miercoles Adams', email: 'miercoles@adams.com', password: '1234' })
users.push({ name: 'Harley Queen', email: 'harley@queen.com', password: '1234' })

//register

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

    var userExists = false

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (email === user.email) {
            userExists = true

            break
        }
    }

    if (userExists) {
        alert('email alredy registred')
    } else {
        //archivo de usuario
        var newUser = {}

        newUser.name = name
        newUser.email = email
        newUser.password = password

        users.push(newUser)

        //alert('User registered')

        loginView.classList.remove('off')
        registerView.classList.add('off')
    }
}

//login
var loginView = document.querySelector('.login-view')
var loginForm = loginView.querySelector('.login-form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    var passwordInput = loginForm.querySelector('#password')
    var password = passwordInput.value

    var emailInput = loginForm.querySelector('#email')
    var email = emailInput.value

    var user

    for (var i = 0; i < users.length; i++) {
        var _user = users[i]

        if (email === _user.email) {
            user = _user

            break
        }
    }

    if (user === undefined) {
        alert('Wrong credentials')
    } else if (user.password === password) {
        loginView.classList.add('off')
        homeView.classList.remove('off')
    } else {
        alert('Wrong credentials')
    }
}

var homeView = document.querySelector('.home-view')