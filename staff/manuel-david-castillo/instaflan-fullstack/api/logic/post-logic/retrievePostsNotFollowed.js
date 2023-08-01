const {User, Post} = require('../../data/models')
const {validateId} = require('../helpers/validators')

function retrievePostsNotFollowed(userId) {
    validateId(userId)

    return User.findById(userId).lean()
    .then(user => {
        if(!user) throw new Error('user not found')

        const usersFollowed = user.following
        usersFollowed.push(user._id)

        return Post.aggregate([
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
                    _id: { $toString: "$_id" },
                    text: 1,
                    image: 1,
                    likes: 1,
                    "author.name" : 1,
                    "author.image": 1,
                    "author._id": {$toString: "$author._id"}
                }
            },
        ])
    })
    .then(users => {
        if(!users) throw new Error('users not found')

        return users 
    })
}

module.exports = retrievePostsNotFollowed