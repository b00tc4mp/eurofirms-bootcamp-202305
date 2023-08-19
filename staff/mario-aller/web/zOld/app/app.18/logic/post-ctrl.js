// Añadir un post a la lista (ret T/F)
const postToList = function (userCreator, msg, img) {
    if (img.length === 0) return false
    if (msg.lenght === 0) return false

    posts.push(new Post(userCreator, msg, img))
    return true;
}
const postsRetrieve = function () {
    return posts.map(post => {
        const postAux = {
            text: post.text,
            image: post.image,
            author: {
                id: post.author
            }
        }
        postAux.author.name = users.find(user => user.id === postAux.author.id).name
        return postAux
    })
}
// Devuelve el post procesado a traves de su id
const postRetrieve = function (id) {
    if (id === undefined) {
        alert('No se ha enviado id')

        return
    }
    const pos = posts.findIndex(post => post.id === id)
    if (pos !== -1) {
        const postAux = {
            text: posts[pos].text,
            image: posts[pos].image,
            author: {
                id: post.author
            }
        }
        postAux.author.name = users.find(user => user.id === postAux.author.id).name
        return postAux
    }
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

