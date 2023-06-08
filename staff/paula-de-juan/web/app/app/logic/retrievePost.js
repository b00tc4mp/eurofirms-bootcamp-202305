function retrievePost (postId) {
    let post
    
    for (var i = 0; i < posts.length; i++){
        var _post = posts[i]

        if (_post.id === postId){
            post = _post
            break
        }

    }
    if (post === undefined){
        return null
    }
}