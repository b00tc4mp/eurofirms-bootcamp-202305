function updateMeetup(token, meetupId, image, video, text, type, adress) { // lo primero que hay que hacer siempre es validarr
    if(typeof token !== 'string') throw new Error('token is not a string')
    if(typeof meetupId !== 'string') throw new Error('Image is not a string')
    if(typeof image !== 'string') throw new Error('Image is not a string')
    if(typeof video !== 'string') throw new Error('Video is not a string')
    if(typeof text !== 'string') throw new Error('Text is not a string')
    if(typeof type !== 'string') throw new Error('Type is not a string')
    if(typeof adress !== 'string') throw new Error('Adress is not a string')

                                            //interpolar
    return fetch(`${import.meta.env.VITE_API_URL}/meetups/${meetupId}`, {
        method: 'PATCH',
        headers:{
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({image,video, text, type, adress})
    })
    .then(res=>{
        if(res.status ===204)
            return  //al no haber nada que parsear, sólo se pone return
        else if(res.status === 400)
            return res.json()
            .then(boody =>{
                const message = body.error //no necesario

                throw new Error(message)
            })
    })
}
export default updateMeetup