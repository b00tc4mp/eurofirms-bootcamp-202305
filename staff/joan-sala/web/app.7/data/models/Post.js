function Post(author, image, text) {
    this.id = ++Post.count
    this.author = author
    this.image = image
    this.text = text
}

Post.count = -1