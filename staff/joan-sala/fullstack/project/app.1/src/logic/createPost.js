function createPost(token, image, text) {
    if(typeof token !== 'string') throw new Error('token is not a string')
    if(typeof image !== 'string') throw new Error('Image is not a string')
    if(typeof text !== 'string') throw new Error('Text is not a string')

    return fetch(`${import.meta.env.VITE_API_URL}/posts`, {
        method: 'POST',
        headers:{
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({image, text})
    })
    .then(res=>{
        if(res.status ===201)
            return
        else if(res.status === 400)
            return res.json()
            .then(boody =>{
                const message = body.error //no necesario

                throw new Error(message)
            })
    })
}
export default createPost