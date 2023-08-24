/**
 * The function `toggleFavMeetup` is a JavaScript function that toggles the favorite status of a meetup
 * by making a PUT request to the server with the provided token and meetupId.
 * @param token - The `token` parameter is a string that represents the authentication token for the
 * user making the request. It is used to authorize the user's access to the API endpoint.
 * @param meetupId - The `meetupId` parameter is a string that represents the ID of the meetup that the
 * user wants to toggle as a favorite.
 * @returns a Promise.
 */
function toggleFavMeetup(token, meetupId) { //validaciones sincronas
    if(typeof token  !== 'string') throw new Error('token is not a string')
    if(typeof meetupId !== 'string') throw new Error('meetupId is not a string')
    
    //Llamada al servidor
    return fetch(`${import.meta.env.VITE_API_URL}/meetups/${meetupId}/favs`, {
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
export default toggleFavMeetup