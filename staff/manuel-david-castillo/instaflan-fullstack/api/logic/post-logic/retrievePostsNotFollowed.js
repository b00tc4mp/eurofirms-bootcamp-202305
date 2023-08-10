const {User, Post} = require('../../data/models')
const {validateId} = require('../helpers/validators')

function retrievePostsNotFollowed(userId) {
    validateId(userId)

    return User.findById(userId).lean()
    .then(user => {
        if(!user) throw new Error('user not found')

        const usersFollowed = user.following ? user.following : []
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
                $lookup: {
                    from: "users",
                    localField: "comments.author",
                    foreignField: "_id",
                    as: "authorComment"
                }
            },
            {
                $project: { 
                    id: { $toString: "$_id" },
                    text: 1,
                    image: 1,
                    likes: 1, 
                    "author.name" : 1,
                    "author.image": 1,
                    "author.id": {$toString: "$author._id"},
                    comments: {
                        $map: {
                            input: "$comments", 
                            as: "comment",
                            in: {
                                author: {
                                    $arrayElemAt: [
                                        {
                                            $filter: {
                                                input: "$authorComment", 
                                                as: "author",
                                                cond: {
                                                    $eq: [
                                                        "$$author._id",
                                                        "$$comment.author"
                                                    ]
                                                }
                                            }
                                        },
                                        0
                                    ],
                                },
                                text: "$$comment.text",
                                date: "$$comment.date",
                            }
                        }
                    }
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

           if(post.comments) {
            post.comments.forEach(comment => {
                if (comment._id) {
                    comment.id = comment._id.toString()
                    delete comment._id
                }

            if(comment.author._id) {
                comment.author.id = comment.author._id
                delete comment.author._id
            }

            delete comment.author.description
            delete comment.author.email
            delete comment.author.password
            delete comment.author.favPosts
            delete comment.author.__v
            delete comment.author.following
            delete comment.author.followed 
           })
           }
        })

        return posts 
    })
}

module.exports = retrievePostsNotFollowed