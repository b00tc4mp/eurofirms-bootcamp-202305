// Carga inicial de referencias

const homeFrame = document.querySelector('.home')
const homeView = document.querySelector('.home-view')
const homeNav = document.querySelector('.home-nav')
const homeHeader = document.querySelector('.home-header')
const homeModalNewpost = document.querySelector('.home-modal-newpost')
const homeModalNewpostForm = document.querySelector('.home-modal-newpost-form')

// Boton logout: salir a login
const homeButtonLogout = homeNav.querySelector('.button-logout')
homeButtonLogout.onclick = function () {
    homeFrame.classList.add('off')
    logFrame.classList.remove('off')
}

// Boton Nuevo Post
const homeButtonNewpost = homeNav.querySelector('.button-newpost')
homeButtonNewpost.onclick = function () {
    homeModalNewpost.classList.remove('off')
}

// Mostrar posts en Home
const ShowPosts = function () {
    const lista = homeView.querySelector('.posts-list')
    lista.innerHTML = ''
    const postsList = userRetrieveAll()

    for (i = postsList.length - 1; i >= 0; i--) {
        const post = document.createElement('article')
        post.className = 'post-item'

        const img = document.createElement('img')
        const msg = document.createElement('p')

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
    const num = posts.length
    let maximus = 0;
    if (num !== 0) {
        for (i = 0; i < num; i++) {
            if (posts[i].id > maximus) {
                maximus = posts[i].id
            }
        }
    }
    const img = homeModalNewpostForm.querySelector('#newpost-img').value
    const msg = homeModalNewpostForm.querySelector('#newpost-msg').value

    // Subir datos a BD
    if (!postToList(maximus, img, msg)) alert('No se puede crear post')

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
