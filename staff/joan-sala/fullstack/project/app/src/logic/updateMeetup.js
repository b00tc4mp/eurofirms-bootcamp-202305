/**
 * The function `updateMeetup` updates a meetup with the provided token, meetupId, image, video, text,
 * type, address, and dateMeetup.
 * @param token - A string representing the authentication token for the user.
 * @param meetupId - The ID of the meetup you want to update.
 * @param image - The image parameter is a string that represents the URL or file path of the image
 * associated with the meetup.
 * @param video - The `video` parameter is a string that represents the URL or path of the video
 * associated with the meetup.
 * @param text - The `text` parameter is a string that represents the text content of the meetup. It
 * can be used to provide additional information or details about the meetup event.
 * @param type - The `type` parameter represents the type of the meetup. It should be a string
 * indicating the category or type of the meetup, such as "technology", "sports", "music", etc.
 * @param adress - The address of the meetup location.
 * @param dateMeetup - The `dateMeetup` parameter is expected to be a `Date` object representing the
 * date of the meetup.
 * @returns a Promise. If the response status is 204, it returns nothing. If the response status is
 * 400, it returns a Promise that resolves to the parsed JSON body of the response.
 */
function updateMeetup(token, meetupId, image, video, text, type, adress, dateMeetup) { // lo primero que hay que hacer siempre es validarr
    if(typeof token !== 'string') throw new Error('token is not a string')
    if(typeof meetupId !== 'string') throw new Error('Image is not a string')
    if(typeof image !== 'string') throw new Error('Image is not a string')
    if(typeof video !== 'string') throw new Error('Video is not a string')
    if(typeof text !== 'string') throw new Error('Text is not a string')
    if(typeof type !== 'string') throw new Error('Type is not a string')
    if(typeof adress !== 'string') throw new Error('Adress is not a string')
    if(!(dateMeetup instanceof Date)) throw new Error('dateMeetup is not a date')

    return fetch(`${import.meta.env.VITE_API_URL}/meetups/${meetupId}`, {
        method: 'PATCH',
        headers:{
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({image, video, text, type, adress, dateMeetup})
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