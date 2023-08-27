const{User,Post} = require('../data')
const{validateId, validateUrl, validateText} = require('./helpers/validators')

function createPost(userId,image,text){
    validateId(userId)
    validateUrl(image)
    validateText(text)

    return User.findById(userId)
    .then(user=>{
        if(!user) throw new Error('User not Found')
        return Post.create({author:userId,image,text})
    })
    .then(()=>{})
}
module.exports = createPost 