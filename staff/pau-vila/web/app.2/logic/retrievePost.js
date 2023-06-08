function retrievePosts () {
    var posts2 = []

    for (var i = 0; i < posts.length; i++) {
        var post = posts [i]

        var post2 = {}

        post2.id = post.id
        post2.image = post.image
        post2.text = post.text
        post2.user = {}

        for (var j = 0; j < users.length; j++) {
            var user = users[j]

            if (user.id === post.user) {
                post2.user.id = user.id
                post2.user.name = user.name

                break
            }
        }

    }
}