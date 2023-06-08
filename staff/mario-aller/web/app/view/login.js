// Carga inicial de punteros

var logFrame = document.querySelector('.login')
var logView = document.querySelector('.log-view')
var logForm = document.querySelector('.log-form')
var logNav = document.querySelector('.log-nav')

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
            logForm.reset()
            logFrame.classList.add('off')
            homeFrame.classList.remove('off')
            ShowPosts()
        }
    } else {
        alert('Credenciales incorrectas.')
    }
}

// Botón ir a registro
var regButtonTolog = document.querySelector('.button-tolog')
regButtonTolog.onclick = function () {
    regForm.reset()
    regFrame.classList.add('off')
    logFrame.classList.remove('off')
}