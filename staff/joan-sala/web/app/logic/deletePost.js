function deletePost(postId) {
    let post

    for (let i = 0; i < posts.length; i++) {
        const _post = posts[i]

        if (_post.Id === postId) {
            post = _post

            break
        }
    }

    if (post !== undefined)
        return false

    

    posts.push(user)

    return true
}