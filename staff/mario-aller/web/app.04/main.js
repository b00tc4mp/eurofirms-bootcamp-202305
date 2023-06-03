
// -------------------------
// User Interface
// -------------------------

// Carga inicial de punteros
var regForm = document.querySelector('#reg-form')
var regView = document.querySelector('.reg-view')

var logForm = document.querySelector('#log-form')
var logView = document.querySelector('.log-view')

var homeView = document.querySelector('.home-view')


// Registro
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

        regView.classList.add('off')
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
    if (userPasswordOK(logUser.email, logUser.password)) {
        var user = userRetrieve(logUser.email)

        if (user === null) {
            alert('No hay usuario.')
        } else {
            homeView.querySelector('.greetings').innerHTML = 'Hola ' + user.name + '!'
            logView.classList.add('off')
            homeView.classList.remove('off')
        }
    } else {
        alert('Credenciales incorrectas.')
    }
}
