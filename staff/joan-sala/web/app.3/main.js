/*

    --* Database *--

*/

var users =  [];
users.push({ name: 'John Doe', email: 'john@doe.com', password: '123' });

/*
    --* Logic *--
*/

function registerUser(name, email, password) {
    var userExists = false;
    for (var i = 0; i < users.length; i++) {
        if (email === users[i].email) {
            userExists = true;
            break;
        }
    }

    if (userExists) {
        alert('E-mail already registered')
    }
    else {
        var user = {}

        user.name = name;
        user.email = email;
        user.password = password;

        users.push(user);

        if (user === undefined) {
            alert('Wrong credentials')
        }
        else if (user.password === password) {
            registerView.classList.add('off')
            loginView.classList.remove('off')
        } else
            alert('Wrong credentials')
    }
}

function authenticateUser(email, password) {

    var user;
    for (var i = 0; i < users.length; i++) {
        var _user = users[i];

        if (email === _user.email) {
            user = _user;
            break;
        }
    }

    if (user === undefined) {
        alert('Wrong credentials')
    }
    else if (user.password === password) {
        loginView.classList.add('off')
        homeView.classList.remove('off')
    } else {
        alert('Wrong credentials');
    }
}

function retrieveUser(email){
    var user
    for (var i = 0; i < users.length; i++){
        if (email === users[i].email){
        user = users[i]
        break
        }
    }
    if(!user){
        return false
    }
    else{
        var userToReturn = {
            name: user.name,
            email: user.email
        }

        return userToReturn
    }
}

/*
--* Presentation *--
*/

// Register Form
var registerView = document.querySelector('.register-view');
var registerForm = registerView.querySelector('.register-form');

registerForm.onsubmit = function (event) {
    event.preventDefault();
    var nameInput = registerForm.querySelector('#name');
    var name = nameInput.value

    var emailInput = registerForm.querySelector('#email');
    var email = emailInput.value

    var passwordInput = registerForm.querySelector('#password');
    var password = passwordInput.value

    var result = registerUser(name, email, password)

    if (result === false)
        alert('User already exists')
    else {
        registerView.classList.add('off')
        loginView.classList.remove('off')
    }
}

// Login Form
var loginView = document.querySelector('.login-view');
var loginForm = loginView.querySelector('.login-form');

loginForm.onsubmit = function (event) {
    event.preventDefault();
    var emailInput = loginForm.querySelector('#email');
    var email = emailInput.value

    var passwordInput = loginForm.querySelector('#password');
    var password = passwordInput.value

    var result = authenticateUser(email, password)

    if (result === false)
        alert('Wrong credentials')
    else {
        var user =  retrieveUser(email)

       if(!user){
        alert('User dont found')
        
       }
       else{
        var userNameHTMLTag = document.querySelector('.greeting-user')

        userNameHTMLTag.textContent = 'Hello ' + user.name
       }

       loginView.classList.add('off')
       homeView.classList.remove('off')
    }
}

// home
var homeView = document.querySelector('.home-view');
 