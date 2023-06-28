// Database
var users = [];
users.push({ name: 'John', lastName: 'Doe' ,email: 'john@doe.com', password: '123' , subscribe: 'true'});


// home
var homeView = document.querySelector('.home-view')

// Register Form
var registerView = document.querySelector('.register-view');
var registerForm = registerView.querySelector('.register-form');

registerForm.onsubmit = function (event) {
    event.preventDefault();
    var nameInput = registerForm.querySelector('#name');
    var name = nameInput.value

    var lastNameInput = registerForm.querySelector('#lastName');
    var lastName = lastNameInput.value

    var emailInput = registerForm.querySelector('#email');
    var email = emailInput.value

    var passwordInput = registerForm.querySelector('#password');
    var password = passwordInput.value

    var subscribeInput = registerForm.querySelector('#subscribe');
    var subscribe = subscribeInput.checked
    

    var userExists = false;
    for (var i = 0; i < users.length; i++) {
        if (email === users[i].email) {
            userExists = true;
            break;
        }
    };

    if (userExists) {
        alert('E-mail already registered')
    }
    else {
        var user = {}

        user.name = name;
        user.lastName = lastName;
        user.email = email;
        user.password = password;
        user.subscribe = subscribe;

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

// Login Form
var loginView = document.querySelector('.login-view');
var loginForm = loginView.querySelector('.login-form');

loginForm.onsubmit = function (event) {
    event.preventDefault();
    var emailInput = loginForm.querySelector('#email');
    var email = emailInput.value

    var passwordInput = loginForm.querySelector('#password');
    var password = passwordInput.value

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
    } else{
        alert('Wrong credentials');
    }

}




