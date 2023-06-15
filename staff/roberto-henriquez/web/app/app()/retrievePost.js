function retrievePosts() {
    var posts2 = []

    for (var i = 0; i < posts.length; i++) {
        var post = posts[i]

        var post2 = {}

        posts2.id = post.id
        posts2.image = post.image
        posts2.text = post.text
        posts2.user = {}

        for (var j = 0; j < user.length; j++) {
            var user = users[j]

            if (user.id === post.user) {

                post2.user.id = user.id
                post2.user.name = user.name



                break
            }
        }
        posts2.push(post2)
    }

    return posts2