function deletePost (postId){
    var post
    
    for (var i = 0; i < posts.length; i++){
        var _post = posts[i]

        if (_post.id === postId){
            post = _post
            break
        }

    }
    if (post === undefined){     
        return false
    
    } else{

        const index = posts.findIndex (function (post){return post.id === postId})

        posts.splice (index, 1)

        return true

    }
}