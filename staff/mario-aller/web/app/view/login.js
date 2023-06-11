// Carga inicial de referencias

const logFrame = document.querySelector('.login')
const logView = document.querySelector('.log-view')
const logForm = document.querySelector('.log-form')
const logNav = document.querySelector('.log-nav')

// Login

// Submit
logForm.onsubmit = function (event) {
    event.preventDefault()

    // Captura de datos
    const userLog = {}
    userLog.email = logForm.querySelector('#log-email').value
    userLog.password = logForm.querySelector('#log-password').value

    // Validación de datos y navegación
    if (userPasswordOK(userLog.email, userLog.password)) {
        userLogged = userGetId(userLog.email)
        const userPublic = userRetrieve(userLogged)

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
const regButtonTolog = document.querySelector('.button-tolog')
regButtonTolog.onclick = function () {
    regForm.reset()
    regFrame.classList.add('off')
    logFrame.classList.remove('off')
}
