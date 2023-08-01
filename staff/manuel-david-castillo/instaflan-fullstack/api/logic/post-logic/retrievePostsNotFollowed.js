const {User, Post} = require('../../data/models')
const {validateId} = require('../helpers/validators')

function retrievePostsNotFollowed(userId) {
    validateId(userId)

    return User.findById(userId).lean()
    .then(user => {
        if(!user) throw new Error('user not found')

        const usersFollowed = user.following
        usersFollowed.push(user._id)

        return Promise.all([Post.aggregate([
            {
                $match: {
                    author: { $nin: usersFollowed }
                }
            },
            {
                $sample: { size: 4 }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "author",
                    foreignField: "_id",
                    as: "author"
                }
            },
            {
                $unwind: "$author"
            },
            {
                $project: { 
                    id: { $toString: "$_id" },
                    text: 1,
                    image: 1,
                    likes: 1,
                    "author.name" : 1,
                    "author.image": 1,
                    "author.id": {$toString: "$author._id"}
                }
            },
        ]),
        User.findById(userId).lean()]) 
    })
    .then(([posts, user]) => {
        if(!posts) throw new Error('posts not found')
        if(!user) throw new Error('user not found')

        posts.forEach(post => {
            delete post._id

            if (!user.favPosts) user.favPosts = []

            const favPosts = user.favPosts.map((post) => {
                return post.toString()
            })

           post.fav = favPosts.includes(post.id)
        })

        return posts 
    })
}

module.exports = retrievePostsNotFollowed