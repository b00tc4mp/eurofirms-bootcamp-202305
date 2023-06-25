function updatePost(postId, image, text) {
    let post

    for (let i = 0; i < posts.length; i++) {
        const _post = posts[i]

        if (_post.id === postId) {
            post = _post

            break
        }
    }

    if (post === undefined)
        return false

    post.image = image
    post.text = text

    return true
}