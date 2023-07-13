const context = require('./context')
const {ObjectId} = require('mongodb')
//const{ObjectId} = mongodb
function createPost(userId,image,text){
    //validations
    if(typeof userId != 'string') throw new Error('User id is not a string')
    if(userId === '') throw new Error('User id empty')
    if(typeof image != 'string') throw new Error('url image is not a string')
    if(image === '') throw new Error('Url image empty')
    if(typeof text != 'string') throw new Error('Text is not a string')
    if(text === '') throw new Error('Text is empty')
   
    //find a user
    const userObjectId = new ObjectId(userId)

    return context.users.findOne({_id: userObjectId})
    .then(user=>{
        if(!user) throw new Error('User not Found')
        //if users exists, create post
        return context.posts.insertOne({author:userObjectId,image,text, date: new Date()})
    })
    .then(()=>{})
}
//export function to be used in other doc
module.exports = createPost 