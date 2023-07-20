/*delete post */

function deletePost(token,postId) {
    if(typeof token !== 'string') throw new Error('token is not a string')
    if(typeof postId !== 'string') throw new Error('postId is not a string')
    
    return fetch(`http://localhost:9000/posts/${postId}`, {
     method: 'DELETE',
     headers: {
         Authorization: `Bearer ${token}`,
     },

    })
    //response
    .then(res=>{
         if(res.status === 200)
             return
         
         else if(res.status === 400){
             return res.json()
             .then(body=>{
                 throw new Error(body.error)
             })
         }
    })  
}
export default deletePost