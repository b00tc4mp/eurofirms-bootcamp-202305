function retrievePost(postId){
    //const posts = db.posts

    let post = posts.find(post=>post.id === postId)
    
    if(post === undefined)
        return null

    return post
}