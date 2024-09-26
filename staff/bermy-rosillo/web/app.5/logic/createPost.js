function createPost(userId,image,text){
    if(image.length === 0 )
        return false
    if(text.length === 0)
        return false
    
    var post = {}

    post.id = ++posts.cont
    post.user = userId
    post.image = image
    post.text = text 
    posts.push(post)

    return true
}