// Carga inicial de punteros

var homeFrame = document.querySelector('.home')
var homeView = document.querySelector('.home-view')
var homeNav = document.querySelector('.home-nav')
var homeHeader = document.querySelector('.home-header')
var homeModalNewpost = document.querySelector('.home-modal-newpost')
var homeModalNewpostForm = document.querySelector('.home-modal-newpost-form')

// Boton logout: salir a login
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

// Mostrar posts en Home
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

// Modal creación de posts

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
