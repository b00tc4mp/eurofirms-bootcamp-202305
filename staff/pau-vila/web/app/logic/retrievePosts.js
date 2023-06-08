function retrievePosts () {
    const posts2 = []

    for (let i = 0; i < posts.length; i++) {
        const post = posts [i]

        const post2 = {}

        post2.id = post.id
        post2.image = post.image
        post2.text = post.text
        post2.user = {}

        for (let j = 0; j < users.length; j++) {
            const user = users[j]

            if (user.id === post.user) {
                post2.user.id = user.id
                post2.user.name = user.name

                break
            }
        }

        posts2.push(post2)

    }

    return posts2
}