function Post(author, text, image) {
    let counter = db.postIdCounter
    this.id = ++counter
    this.author = author
    this.text = text
    this.image = image
    db.postIdCounter = counter
}

Post.idCounter = 1
