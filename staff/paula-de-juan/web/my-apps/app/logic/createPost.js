function createPost(userId, image, text) {
    
    const posts = db.posts

    if (image.length === 0) {
        return false
    }
    if (text.length === 0) {
        return false
    }

    const post = new Post (userId, image, text)

    posts.push(post)

    db.posts = posts

    return true
}