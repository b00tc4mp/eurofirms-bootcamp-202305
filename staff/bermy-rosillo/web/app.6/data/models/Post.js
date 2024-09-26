function Post(author,image,text){
    this.id = ++Post.count
    this.author = author
    this.image = image
    this.text = text
}
//not post yet 
//property of function constructor , not of the instance
Post.count = -1