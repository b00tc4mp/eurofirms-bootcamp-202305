
//array user
var users = []
users.push({ name: 'Pin Ocho', email: 'pin@ocho.com', password: '123123123' })
users.push({ name: 'John Doe', email: 'john@doe.com', password: '123123123' })
users.push({ name: 'Ada Love', email: 'ada@love.com', password: '123123123' })
/*LOGIC*/
function authenticateUser(email, password) {
    var user
    for (var i = 0; i < users.length; i++) {
        var _user = users[i];

        if (email === _user.email) {
            user = _user
            break
        }
    }
    if (!user) {
        return false
    }
    else if (password !== user.password) {
        return false
    } else {
        return true
    }
}//function closed
//---------------------------------------------------------------
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
        alert('email already registered')
    } else {
        var newUser = {}
        newUser.name = name
        newUser.email = email
        newUser.password = password
        users.push(newUser)

        loginView.classList.remove('off')
        registerView.classList.add('off')
    }
} //function closed 
/*user login */
var loginView = document.querySelector('.login-view')
var loginForm = loginView.querySelector('.login-form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = loginForm.querySelector('#email')
    var email = emailInput.value

    var passwordInput = loginForm.querySelector('#password')
    var password = passwordInput.value

    var result = authenticateUser(email,password)
    if (!result) {
        alert('wrong credentials')
    }else{
        loginView.classList.add('off')
        homeView.classList.remove('off')
    } 
}//funtion closed
var homeView = document.querySelector('.home-view')

