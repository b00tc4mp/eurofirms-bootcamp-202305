//solo lectura y no se tiene que guardar nada
function retrievePosts() {
    const users = db.users 
    const posts = db.posts

    const posts2 = posts.map(post => {

        const post2 = {}
        post2.id = post.id
        post2.image = post.image
        post2.text = post.text
        post2.author = {}

        const user = users.find(user => user.id === post.author)

        post2.author.id = user.id
        post2.author.name = user.name


        return post2 //cada elemento
    })
    return posts2 //copia con datos extra
}


