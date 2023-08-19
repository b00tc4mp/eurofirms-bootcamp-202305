// Añadir un post a la lista (ret T/F)
const postToList = function (userCreator, msg, img) {
    if (img.length === 0) return false
    if (msg.lenght === 0) return false

    const post = {}

    post.id = ++posts.idCounter
    post.user = userCreator
    post.text = msg
    post.image = img

    posts.push(post)

    return true;
}

// Devuelve el post a traves de su id
const postRetrieve = function (id) {
    const pos = posts.findIndex(post => post.id === id)
    if (pos !== -1) return posts[pos]
    return null
}

// Borra el post con su id
const postDelete = function (id) {
    const pos = posts.findIndex(post => post.id === id)
    if (pos !== -1) {
        posts.splice(pos, 1)
        return true
    } else {
        return false
    }
}
// Mostrar posts en Home
const ShowPosts = function () {
    const lista = homeView.querySelector('.posts-list')
    lista.innerHTML = ''

    for (i = posts.length - 1; i >= 0; i--) {
        const post = document.createElement('article')
        post.className = 'post-item'

        const img = document.createElement('img')
        img.src = posts[i].image
        img.className = 'post-item-img'

        const msg = document.createElement('p')
        msg.innerHTML = posts[i].text
        msg.className = 'post-item-msg'

        const user = document.createElement('p')
        user.innerHTML = userRetrieve(posts[i].user).name
        user.className = 'post-item-user'

        post.append(img, msg, user)

        if (userLogged === posts[i].user) {
            // Botón de edición
            const buttonEdit = document.createElement('button')
            buttonEdit.innerHTML = 'Editar'
            buttonEdit.className = 'post-item-button'
            buttonEdit.type = 'button'
            buttonEdit.postId = posts[i].id;
            buttonEdit.onclick = function () {
                const idPostEdit = homeModalEditpost.querySelector('#editpost-idpost')
                idPostEdit.value = buttonEdit.postId
                const imageEdit = homeModalEditpost.querySelector('#editpost-img')
                imageEdit.value = retrievePost(buttonEdit.postId).image
                const textEdit = homeModalEditpost.querySelector('#editpost-msg')
                textEdit.value = retrievePost(buttonEdit.postId).text
                homeModalEditpost.classList.remove('off')
            }
            // Botón de borrado
            const buttonDelete = document.createElement('button')
            buttonDelete.innerHTML = 'Borrar'
            buttonDelete.className = 'post-item-button'
            buttonDelete.type = 'button'
            buttonDelete.postId = posts[i].id;
            buttonDelete.onclick = function () {
                const idPostDelete = homeModalDeletepost.querySelector('#deletepost-idpost')
                idPostDelete.value = buttonDelete.postId
                homeModalDeletepost.classList.remove('off')
            }
            post.append(buttonEdit, buttonDelete)
        }
        lista.append(post)
    }
    homeView.classList.remove('off')
}
