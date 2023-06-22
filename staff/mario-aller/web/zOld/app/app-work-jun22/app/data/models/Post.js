function Post(author, image, text) {
    this.id = ++Post.count
    this.author = author
    this.image = image
    this.text = text
}

{
    Post.count = 0

    const posts = db.posts

    if (posts.length) {
        const last = posts[posts.length - 1]

        Post.count = last.id
    }
}