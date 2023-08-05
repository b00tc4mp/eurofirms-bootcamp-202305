function deletePost (token, postId){
    if (typeof token !== 'string') throw new Error('UserId is not a string')
    if (typeof postId !== 'string') throw new Error('PostId is not a string')

    return fetch (`${import.meta.env.VITE_API_URL}/posts/${postId}`, {
        method: "DELETE",      
        headers: {
           Authorization: `Bearer ${token}`   
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


