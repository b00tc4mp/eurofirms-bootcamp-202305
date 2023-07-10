function Post (author, text, image) {
    this.id = ++Post.count
    this.author = author
    this.text = text
    this.image = image
}

Post.count = 0;