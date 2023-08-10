function createMeetup(token, image, video, text, type, adress){
    if(typeof token !== 'string') throw new Error('token is not a string')
    if(typeof image !== 'string') throw new Error('Image is not a string')
    if(typeof video !== 'string') throw new Error('Video is not a string')
    if(typeof text !== 'string') throw new Error('Text is not a string')
    if(typeof type !== 'string') throw new Error('Video is not a string')
    if(typeof adress !== 'string') throw new Error('Adress is not a string')
    if(typeof dateMeeetup !=='string') throw new Error('DateMeetup in not string')

    return fetch(`${import.meta.env.VITE_API_URL}/meetups`, {
        method: 'POST',
        headers:{
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({image, video, text, type, adress, dateMeetup})
    })
    .then(res=>{
        if(res.status ===201)
            return
        else if(res.status === 400)
            return res.json()
            .then(body =>{
                const message = body.error //no necesario

                throw new Error(message)
            })
    })
}
export default createMeetup