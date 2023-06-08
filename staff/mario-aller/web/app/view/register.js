// Carga inicial de punteros

var regFrame = document.querySelector('.register')
var regView = document.querySelector('.reg-view')
var regForm = document.querySelector('.reg-form')
var regNav = document.querySelector('.reg-nav')

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

// Botón ir a login
var logButtonToreg = document.querySelector('.button-toreg')
logButtonToreg.onclick = function () {
    logForm.reset()
    logFrame.classList.add('off')
    regFrame.classList.remove('off')
}

