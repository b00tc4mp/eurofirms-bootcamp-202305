
// -------------------------
// Declaraciones globales
// -------------------------

var users = []

// -------------------------
// Carga de valores
// -------------------------

users.push({ name: 'Frodo Bolson', email: 'frodo@bolson-cerrado.com', password: 'mitril' })
users.push({ name: 'Bilbo Bolson', email: 'bilbo@bolson-cerrado.com', password: 'dardo' })
users.push({ name: 'Merry Brandigamo', email: 'merry@comarca.com', password: 'rohan' })
users.push({ name: 'Peregrin Tuk', email: 'pippin@comarca.com', password: 'gondor' })
// -------------------------
// Punteros principales
// -------------------------
var registerForm = document.querySelector('#register-form')
var registerView = document.querySelector('.register-view')

var homeView = document.querySelector('.home-view')

var logForm = document.querySelector('#log-form')
var logView = document.querySelector('.log-view')

// -------------------------
// Eventos
// -------------------------

// Registro

registerForm.onsubmit = function (event) {
    event.preventDefault()

    // Captura de datos
    var newUser = {}

    newUser.name = registerForm.querySelector('#reg-name').value
    newUser.email = registerForm.querySelector('#reg-email').value
    newUser.password = registerForm.querySelector('#reg-password').value

    // Validación de datos
    var userExist = false
    var numUsers = users.length

    if (numUsers > 0) {
        for (var i = 0; i < numUsers; i++) {
            if (newUser.email === users[i].email) {
                userExist = true
                break
            }
        }
    }

    // Actualización de BD y navegación
    if (!userExist) {

        users.push(newUser)
        alert('Registro completado')

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

    // Validación de datos
    var userExist = false
    var numUsers = users.length

    if (numUsers > 0) {
        for (var i = 0; i < numUsers; i++) {
            if (logUser.email === users[i].email) {
                userExist = true
                break
            }
        }
    }

    var passwordCorrect = false

    if (users[i].password === logUser.password) {
        passwordCorrect = true
    }

    // Navegación
    if (userExist && passwordCorrect) {
        logView.classList.add('off')
        homeView.classList.remove('off')
    } else {
        alert('Credenciales incorrectas.')
    }
}
