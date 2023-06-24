function deletePost(postId) {
    let post

    const posts = db.posts

    for (let i = 0; i < posts.length; i++) {
        const _post = posts[i]
        //si lo encontramos
        if (_post.id === postId) {
            post = _post

            break
        }
    }

    if (post === undefined)
        return false

    const index = posts.findIndex(function(post){
        return post.id === postId
    })
    
    //borrado
    posts.splice(index, 1)

    db.posts = posts

    return true
}