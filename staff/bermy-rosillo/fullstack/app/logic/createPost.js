function createPost(token,image,text){
   if(typeof token !== 'string') throw new Error('token is not a string')
   if(typeof image !== 'string') throw new Error('image is not a string')
   if(typeof text !== 'string') throw new Error('text is not a string')

   return fetch('http://localhost:9000/posts', {
    method: 'POST',
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    },

    body: JSON.stringify({image,text})
   })
   //response
   .then(res=>{
        if(res.status === 201)
            return
        
        else if(res.status === 400){
            return res.json()
            .then(body=>{
                throw new Error(body.error)
            })
        }
   })

}