// database

var users = []

users.push({ name: 'Pin Ocho', email: 'pin@ocho.com', password: '123123123' })
users.push({ name: 'John Doe', email: 'john@doe.com', password: '123123123' })
users.push({ name: 'Ada Love', email: 'ada@love.com', password: '123123123' })

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

    var userExists=false

    for (var i=0;i<users.length;i++)
    {
        if(email === users[i].email)
        {
            userExists=true
            break
        }
    }
    if (userExists){
        alert('email already registered')
    }
    else {
        // Archivo de usuario
        var newUser = {}
        newUser.name=name
        newUser.email=email
        newUser.password=password
        users.push(newUser)
        
        alert('User registered')

        loginView.classList.remove('off')
        registerView.classList.add('off')
    }
}

// Login

var loginView=document.querySelector('.login-view')
var loginForm=loginView.querySelector('.login-form')

loginForm.onsubmit = function(event){
    //no poner nada dentro de parentesis
    event.preventDefault()
    
    var passwordInput = loginForm.querySelector('#password')
    var password = passwordInput.value

    var emailInput = loginForm.querySelector('#email')
    var email = emailInput.value

    var user
    for( var i=0; i < users.length;i++){
        var _user = users[i]

        if(email === _user.email){
            user = _user

            break
        }
    }
    if(!user){
        alert('Wrong credentials')
    }
    else if(user.password === password){
        loginView.classList.add('off')
        homeView.classList.remove('off')
    }
    else{
        alert('Wrong credentials')
    }
}

var homeView = document.querySelector('.home-view')
