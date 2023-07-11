// Añadir un post a la lista (ret T/F)
const postToList = function (userCreator, msg, img) {
    const posts = db.posts
    if (img.length === 0) return false
    if (msg.lenght === 0) return false

    posts.push(new Post(++db.postIdCounter, userCreator, msg, img))
    db.posts = posts
    return true;
}

// Devuelve el post procesado a traves de su id
const postsRetrieve = function (userId) {
    validateString(userId, validateString.REGULAR)

    return fetch('http://localhost:9000/posts', {
        headers: { Authorization: `Bearer ${userId}` }
    })
        .then(res => {
            if (res.status === 200) return res.json().then(posts => posts)
            else return res.json().then(err => { throw new Error(err.error) })
        })

    // const posts = db.posts
    // const users = db.users

    // if (id === undefined) {
    //     // Si no se pone nada devuelve todos los posts procesados
    //     return posts.map(post => {
    //         const postAux = {
    //             id: post.id,
    //             text: post.text,
    //             image: post.image,
    //             author: {
    //                 id: post.author
    //             }
    //         }
    //         postAux.author.name = users.find(user => user.id === postAux.author.id).name
    //         return postAux
    //     })
    // } else {
    //     const pos = posts.findIndex(post => post.id === id)
    //     if (pos !== -1) {
    //         const postAux = {
    //             id: posts[pos].id,
    //             text: posts[pos].text,
    //             image: posts[pos].image,
    //             author: {
    //                 id: posts[pos].author
    //             }
    //         }
    //         postAux.author.name = users.find(user => user.id === postAux.author.id).name
    //         return postAux
    //     }
    //     return null
    // }
}

// Borra el post con su id
const postDelete = function (id) {
    const posts = db.posts
    const pos = posts.findIndex(post => post.id === id)
    if (pos !== -1) {
        posts.splice(pos, 1)
        db.posts = posts
        return true
    }
    return false
}

// Actualiza la imagen y el texto de un post con su di
const postUpdateContent = function (id, msg, img) {
    const posts = db.posts
    const pos = posts.findIndex(post => post.id === id)
    if (pos !== -1) {
        posts[pos].image = img
        posts[pos].text = msg
        db.posts = posts
        return true
    }
    return false
}
