
// -------------------------
// User Interface
// -------------------------

// Carga inicial de punteros
var regFrame = document.querySelector('.register')
var regView = document.querySelector('.reg-view')
var regForm = document.querySelector('.reg-form')
var regNav = document.querySelector('.reg-nav')

var logFrame = document.querySelector('.login')
var logView = document.querySelector('.log-view')
var logForm = document.querySelector('.log-form')
var logNav = document.querySelector('.log-nav')

var homeFrame = document.querySelector('.home')
var homeView = document.querySelector('.home-view')
var homeNav = document.querySelector('.home-nav')
var homeHeader = document.querySelector('.home-header')

// Registro

// Submit
regForm.onsubmit = function (event) {
    event.preventDefault()

    // Captura de datos
    var newUser = {}
    newUser.name = regForm.querySelector('#reg-name').value
    newUser.email = regForm.querySelector('#reg-email').value
    newUser.password = regForm.querySelector('#reg-password').value

    // Actualización de BD y navegación
    if (!userExist(newUser.email)) {
        userToList(newUser.name, newUser.email, newUser.password)

        regFrame.classList.add('off')
        logFrame.classList.remove('off')
    } else {
        alert('Error: usuario ya registrado.')
    }
}

// Login

// Submit
logForm.onsubmit = function (event) {
    event.preventDefault()

    // Captura de datos
    var logUser = {}
    logUser.email = logForm.querySelector('#log-email').value
    logUser.password = logForm.querySelector('#log-password').value

    // Validación de datos y navegación
    if (userPasswordOK(logUser.email, logUser.password)) {
        var userPublic = userRetrieve(logUser.email)

        if (userPublic === null) {
            alert('No hay usuario.')
        } else {
            homeFrame.querySelector('.greetings').innerHTML = 'Hola ' + userPublic.name + '!'
            logFrame.classList.add('off')
            homeFrame.classList.remove('off')
        }
    } else {
        alert('Credenciales incorrectas.')
    }
}
