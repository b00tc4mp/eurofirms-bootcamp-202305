function updateWorkshop(token, workshopId, place,
    codeZIP, dateStart, dateEnd, image, video, description, attendantsLimit) {
    if (typeof token !== 'string') throw new Error('token is not a string')
    if (typeof workshopId !== 'string') throw new Error('workshopId is not a string')
    if (typeof url !== 'string') throw new Error('url is not a string')
    if (typeof description !== 'string') throw new Error('description is not a string')
    if (codeZIP === '') throw new Error('codeZIP is empty')
    if (attendantsLimit <= 0 || attendantsLimit > 13) throw new Error('attendants out of limits') 
    if (typeof place !== 'string')throw new Error('Place must be a string')
    if (!(dateStart instanceof Date))throw new Error('dateStart is not a Date')
    if (!(dateEnd instanceof Date))throw new Error('dateEnd is not a Date')

    return fetch(`${import.meta.env.VITE_API_URL}/workshops/${workshopId}`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ place, codeZIP, dateStart, dateEnd, image, 
            video, description, attendantsLimit  })
    })
        .then(res => {
            if (res.status === 204)
                return
            else if (res.status === 400)
                return res.json()
                    .then(body => {
                        const message = body.error

                        throw new Error(message)
                    })
            else
                throw new Error('server error')
        })
}

export default updateWorkshop 