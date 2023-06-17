// Carga inicial de referencias

const homeFrame = document.querySelector('.home')

const homeView = document.querySelector('.home-view')
const homeNav = document.querySelector('.home-nav')
const homeHeader = document.querySelector('.home-header')

const homeModalNewpost = document.querySelector('.home-modal-newpost')
const homeModalNewpostForm = document.querySelector('.home-modal-newpost-form')

const homeModalEditpost = document.querySelector('.home-modal-editpost')
const homeModalEditpostForm = document.querySelector('.home-modal-editpost-form')

const homeModalDeletepost = document.querySelector('.home-modal-deletepost')
const homeModalDeletepostForm = document.querySelector('.home-modal-deletepost-form')

// Botones de navegación

// Boton logout: salir a login
const homeButtonLogout = homeNav.querySelector('.button-logout')
homeButtonLogout.onclick = function () {
    homeFrame.classList.add('off')
    logFrame.classList.remove('off')
    userLogged = null
}

// Boton Nuevo Post
const homeButtonNewpost = homeNav.querySelector('.button-newpost')
homeButtonNewpost.onclick = function () {
    homeModalNewpost.classList.remove('off')
}

// Modal creación de posts

// Botón creación posts
homeModalNewpostForm.onsubmit = function (event) {
    event.preventDefault()

    // Captura de datos
    const img = homeModalNewpostForm.querySelector('#newpost-img').value
    const msg = homeModalNewpostForm.querySelector('#newpost-msg').value

    // Subir datos a BD
    if (!postToList(userLogged, msg, img)) alert('No se puede crear post')

    // Salir
    homeModalNewpostForm.reset()
    homeModalNewpost.classList.add('off')

    // Actualizar lista de post
    ShowPosts()
}

// Botón Cancelar creación posts
const homeButtonNewPostCancel = homeModalNewpostForm.querySelector('.newpost-button-cancel')
homeButtonNewPostCancel.onclick = function (event) {
    // Salir
    homeModalNewpostForm.reset()
    homeModalNewpost.classList.add('off')
}

// Botón edición posts
homeModalEditpostForm.onsubmit = function (event) {
    event.preventDefault()

    // Captura de datos
    const img = homeModalEditpostForm.querySelector('#editpost-img').value
    const msg = homeModalEditpostForm.querySelector('#editpost-msg').value
    const idpost = homeModalEditpostForm.querySelector('#editpost-idpost').value

    // Subir datos a BD
    const postToUpdate = postRetrieve(parseInt(idpost))
    if (postToUpdate === null) alert('No se puede editar post')
    else {
        postToUpdate.image = img
        postToUpdate.text = msg
    }

    // Salir
    homeModalEditpostForm.reset()
    homeModalEditpost.classList.add('off')

    // Actualizar lista de post
    ShowPosts()
}

// Botón Cancelar edición posts
const homeButtonEditPostCancel = homeModalEditpostForm.querySelector('.editpost-button-cancel')
homeButtonEditPostCancel.onclick = function (event) {
    // Salir
    homeModalEditpostForm.reset()
    homeModalEditpost.classList.add('off')
}

// Botón borrado posts
homeModalDeletepostForm.onsubmit = function (event) {
    event.preventDefault()

    // Captura de datos
    const idpost = homeModalDeletepostForm.querySelector('#deletepost-idpost').value

    // Borrar datos de BD
    if (!postDelete(parseInt(idpost))) alert('No se puede borrar post')

    // Salir
    homeModalDeletepostForm.reset()
    homeModalDeletepost.classList.add('off')

    // Actualizar lista de post
    ShowPosts()
}

// Botón Cancelar borrado posts
const homeButtonDeletePostCancel = homeModalDeletepostForm.querySelector('.deletepost-button-cancel')
homeButtonDeletePostCancel.onclick = function (event) {
    // Salir
    homeModalDeletepostForm.reset()
    homeModalDeletepost.classList.add('off')
}
