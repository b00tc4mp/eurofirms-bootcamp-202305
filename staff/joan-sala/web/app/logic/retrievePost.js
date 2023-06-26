function retrievePost(postId) {
    const posts = db.posts
    const post = posts.find(post => post.id === postId)

    if(!post)
        return false
    
    return post
}
