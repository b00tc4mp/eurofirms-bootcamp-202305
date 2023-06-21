function retrievePosts() {
    const posts2 = posts.map(post => {
        const post2 = {}

        post2.id = post.id
        post2.image = post.image
        post2.text = post.text
        post2.author = {}

        const user = users.find(user => user.id === post.author)

        post2.author.id = userId
        post2.author.name = user.name

        return post2
    })
    return posts2
}