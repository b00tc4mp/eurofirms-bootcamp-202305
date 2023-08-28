function deleteMeetup(token, meetupId) {
    if (typeof token !== 'string') throw new Error('token is not a string')
    if (typeof meetupId !== 'string') throw new Error('meetupId is not a string')
    
    return fetch(`${import.meta.env.VITE_API_URL}/meetups/${meetupId}`,{
        method: 'DELETE',
        headers:{Authorization:`Bearer ${token}`        }
    })
    .then(res =>{
        if(res.status ===200)
            return
        else if(res.status===400)
            return res.json()
            .then(body => {
                const message = body.error
                throw new Error(message)
            })
    })
}
export default deleteMeetup