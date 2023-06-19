// Añadir un post a la lista (ret T/F)
const postToList = function (userCreator, msg, img) {
    if (img.length === 0) return false
    if (msg.lenght === 0) return false
    
    posts.push(new Post(userCreator,msg,img))
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

