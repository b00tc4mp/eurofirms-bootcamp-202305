function Post (author, text, image) {
    this.id = Post.idCounter++
    this.author = author
    this.text = text
    this.image = image
}

Post.idCounter = 1;