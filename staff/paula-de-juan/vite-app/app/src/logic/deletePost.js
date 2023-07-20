function deletePost (userId, postId){
    if (typeof userId !== 'string') throw new Error('UserId is not a string')
    if (typeof postId !== 'string') throw new Error('PostId is not a string')

    return fetch (`http://localhost:9000/posts/${postId}`, {
        method: "DELETE",      
        headers: {
           Authorization: `Bearer ${userId}`   
        }
    })
    .then( res =>{
        if (res.status === 204){
            return
        } else if (res.status === 400){
            return res.json()
            .then(body => {
                    const message = body.error  
                    throw new Error(message)
            })
        }    
    })
}
export default deletePost


