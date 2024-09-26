function Post(author,image,text){
    
    this.id= ++Post.count
    this.author=author
    this.image=image
    this.text=text
}
Post.count=0 //el conteo empieza desde 0

{
    const posts =db.posts
    const longitud= posts.length
    
    if(longitud){
        const lastPost = posts[posts.length-1]
    
        Post.count = lastPost
    }
}
