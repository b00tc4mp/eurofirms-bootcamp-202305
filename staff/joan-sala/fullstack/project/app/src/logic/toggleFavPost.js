function toggleFavPost(token, postId) { //validaciones sincronas
    if(typeof token  !== 'string') throw new Error('token is not a string')
    if(typeof postId !== 'string') throw new Error('postId is not a string')
    
    //Llamada al servidor
    return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}/favs`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}`}
    })
    .then(res => {
        if(res.status === 204)
            return
        else if(res.status === 400){
            return res.json()
                .then(body => {
                    const message = body.error
                    throw new Error(message)
                })
        }
        else throw new Error('Server error')
    })
}
export default toggleFavPost