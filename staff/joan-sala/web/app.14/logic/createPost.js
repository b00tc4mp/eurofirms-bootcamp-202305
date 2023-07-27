function createPost(userId, image, text) {
    if (image.length === 0) return false
    if (text.length === 0) return false

    const posts = db.posts

    const post = new Post(++db.postIdCount, userId, image, text)

    posts.push(post)
    
    db.posts = posts

    return true
}