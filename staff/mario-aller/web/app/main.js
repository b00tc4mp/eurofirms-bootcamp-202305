
// -------------------------
// Data Base
// -------------------------


// Declaraciones
var users = []

// Carga inicial de valores en la lista
users.push({ name: 'Frodo Bolson', email: 'frodo@bolson-cerrado.com', password: 'mitril' })
users.push({ name: 'Bilbo Bolson', email: 'bilbo@bolson-cerrado.com', password: 'dardo' })
users.push({ name: 'Meriadoc Brandigamo', email: 'merry@comarca.com', password: 'rohan' })
users.push({ name: 'Peregrin Tuk', email: 'pippin@comarca.com', password: 'gondor' })

// Carga inicial de punteros
var registerForm = document.querySelector('#register-form')
var registerView = document.querySelector('.register-view')

var logForm = document.querySelector('#log-form')
var logView = document.querySelector('.log-view')

var homeView = document.querySelector('.home-view')


// -------------------------
// Business Logic
// -------------------------


// Verificacion de usuario (ret T/F)
var userExist = function (email) {
    var num = users.length

    if (num !== 0) {
        for (var i = 0; i < num; i++) {
            if (email === users[i].email) {
                return true;
            }
        }
    }
    return false;
}

// Verificacion de clave de usuario (ret T/F)
var userOK = function (email, password) {
    var num = users.length

    if (num !== 0) {
        for (i = 0; i < num; i++) {
            if (email === users[i].email) {
                if (password === users[i].password) return true;
                break;
            }
        }
    }
    return false;
}

// Delvuelve usuario (ret objeto de la lista del usuario email)
var userRetrieve = function (email) {
    var num = users.length

    if (num !== 0) {
        for (var i = 0; i < num; i++) {
            if (email === users[i].email) {
                return users[i];
            }
        }
    }
}

// Añadir usuario a la lista
var userToList = function (name, email, password) {
    var user = {}

    user.name = name
    user.email = email
    user.password = password

    users.push(user)
}


// -------------------------
// User Interface
// -------------------------


// Registro
registerForm.onsubmit = function (event) {
    event.preventDefault()

    // Captura de datos
    var newUser = {}
    newUser.name = registerForm.querySelector('#reg-name').value
    newUser.email = registerForm.querySelector('#reg-email').value
    newUser.password = registerForm.querySelector('#reg-password').value

    // Actualización de BD y navegación
    if (!userExist(newUser.email)) {
        userToList(newUser.name, newUser.email, newUser.password)

        registerView.classList.add('off')
        logView.classList.remove('off')
    } else {
        alert('Error: usuario ya registrado.')
    }
}

// Login

logForm.onsubmit = function (event) {
    event.preventDefault()

    // Captura de datos
    var logUser = {}
    logUser.email = logForm.querySelector('#log-email').value
    logUser.password = logForm.querySelector('#log-password').value

    // Validación de datos y navegación
    if (userOK (logUser.email, logUser.password)) {
        logView.classList.add('off')
        homeView.classList.remove('off')

        var user = userRetrieve(logUser.email)
        
        alert('Hola ' + user.name)
    } else {
        alert('Credenciales incorrectas.')
    }
}
