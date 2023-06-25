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
const postRetrieve = function (id) {
    const posts = db.posts
    const users = db.users

    if (id === undefined) {
        // Si no se pone nada devuelve todos los posts procesados
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
    } else {
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
}

// Borra el post con su id
const postDelete = function (id) {
    const posts = db.posts
    const pos = posts.findIndex(post => post.id === id)
    if (pos !== -1) {
        posts.splice(pos, 1)
        db.posts = posts
        return true
    } else {
        return false
    }
}
