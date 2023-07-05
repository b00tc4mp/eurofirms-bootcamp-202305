return Promise.all([context.users.findOne({ _id: new ObjectId(userId) }), context.posts.findOne({ _id: new ObjectId(postId) })])
    .then(([user, post])=>{
        if (!user) throw new Error('User not found!')
        if (!post) throw new Error('Post not found!')
        if (post.author.toString() !== userId) throw new Error('Post does not belong to user!')
        return context.posts.updateOne()
    })