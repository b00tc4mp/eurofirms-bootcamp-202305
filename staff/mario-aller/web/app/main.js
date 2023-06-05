
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
var homeHeader = document.querySelector('.home-header')
var homeView = document.querySelector('.home-view')
var homeNav = document.querySelector('.home-nav')
var homeModalNewpost = document.querySelector('.home-modal-newpost')
var homeModalNewpostForm = document.querySelector('.home-modal-newpost-form')

// Funciones comunes

// Mostrar post en Home
var ShowPosts = function () {
    var lista = homeView.querySelector('.posts-list')
    lista.innerHTML = ''
    var postsList = userRetrieveAll()

    for (i = postsList.length - 1; i >= 0; i--) {
        var post = document.createElement('article')
        post.className = 'post-item'

        var img = document.createElement('img')
        var msg = document.createElement('p')

        img.src = postsList[i].image
        img.className = 'post-item-img'

        msg.innerHTML = postsList[i].text
        msg.className = 'post-item-msg'

        post.append(img, msg)
        lista.append(post)
    }
    homeView.classList.remove('off')
}

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
            logForm.reset()
            logFrame.classList.add('off')
            homeFrame.classList.remove('off')
            ShowPosts()
        }
    } else {
        alert('Credenciales incorrectas.')
    }
}

// Navegación

// Botón ir a registro
var regButtonTolog = regNav.querySelector('.button-tolog')
regButtonTolog.onclick = function () {
    regForm.reset()
    regFrame.classList.add('off')
    logFrame.classList.remove('off')

}

// Botón ir a login
var logButtonToreg = logNav.querySelector('.button-toreg')
logButtonToreg.onclick = function () {
    logForm.reset()
    logFrame.classList.add('off')
    regFrame.classList.remove('off')
}

// Boton logout: salir de login
var homeButtonLogout = homeNav.querySelector('.button-logout')
homeButtonLogout.onclick = function () {
    homeFrame.classList.add('off')
    logFrame.classList.remove('off')
}

// Boton Nuevo Post
var homeButtonNewpost = homeNav.querySelector('.button-newpost')
homeButtonNewpost.onclick = function () {
    homeModalNewpost.classList.remove('off')
}

// Posts

// Botón creación posts
homeModalNewpostForm.onsubmit = function (event) {
    event.preventDefault()

    // Captura de datos
    var num = posts.length
    var maximus = 0;
    if (num !== 0) {
        for (i = 0; i < num; i++) {
            if (posts[i].id > maximus) {
                maximus = posts[i].id
            }
        }
    }
    var img = homeModalNewpostForm.querySelector('#newpost-img').value
    var msg = homeModalNewpostForm.querySelector('#newpost-msg').value

    // Subir datos a BD
    if (!postToList(maximus, img, msg)) alert('No se puede crear post')

    // Salir
    homeModalNewpostForm.reset()
    homeModalNewpost.classList.add('off')

    // Actualizar lista de post
    ShowPosts()
}

// Botón Cancelar creación posts
var homeButtonNewPostCancel = homeModalNewpostForm.querySelector('.newpost-button-cancel')
homeButtonNewPostCancel.onclick = function (event) {
    // Salir
    homeModalNewpostForm.reset()
    homeModalNewpost.classList.add('off')
}