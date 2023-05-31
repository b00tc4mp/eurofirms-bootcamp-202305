// Database
var users = [];
users.push({name: 'John Doe', email: 'john@doe.com', password: '123'});

// Register Form
var registerView = document.querySelector('.register-view');
var registerForm = registerView.querySelector('.register-form');

registerForm.onsubmit = function(event){
    event.preventDefault();
    var nameInput = registerForm.querySelector('#name');
    var name = nameInput.value

    var emailInput = registerForm.querySelector('#email');
    var email = emailInput.value

    var passwordInput = registerForm.querySelector('#password');
    var password = passwordInput.value

    var user = {}

    user.name = name;
    user.email = email;
    user.password = password;

    users.push(user);

    console.log(name, email, password);
}

// Login Form
var loginView = document.querySelector('.login-view');
var loginForm = registerView.querySelector('.login-form');
/*
loginForm.onsubmit = function(event){
    event.preventDefault();
    var emailInput = registerForm.querySelector('#email');
    var email = emailInput.value

    var passwordInput = registerForm.querySelector('#password');
    var password = passwordInput.value

    var user = {}

    user.name = name;
    user.email = email;
    user.password = password;

    users.push(user);

    console.log(name, email, password);
}*/
