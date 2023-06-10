// Añadir un post a la lista (ret T/F)
const postToList = function (id, img, msg) {
    if (img.length === 0) return false
    if (msg.lenght === 0) return false

    const post = {}

    post.id = id
    post.image = img
    post.text = msg

    posts.push(post)

    return true;
}




