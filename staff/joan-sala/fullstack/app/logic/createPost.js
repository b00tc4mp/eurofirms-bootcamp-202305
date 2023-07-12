function createPost(userId, image, text) {
    if(typeof userId !== 'string') throw new Error('userId is not a string')
    if(typeof image !== 'string') throw new Error('Image is not a string')
    if(typeof text !== 'string') throw new Error('Text is not a string')
    
    return fetch('http://localhost:9000/post')
    
}