function createPost(userId,image,text){
    if(image.length === 0 )
        return false
    if(text.length === 0)
        return false
    
    const post = new Post(userId,image,text)
    posts.push(post)

    return true
}