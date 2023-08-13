function retrieveWorkshop(token, WorkshopId) {
    if (typeof token !== 'string') throw new Error('userId is not a string')
    if (typeof WorkshopId !== 'string') throw new Error('WorkshopId is not a string')

    return fetch(`${import.meta.env.VITE_API_URL}/workshops/${WorkshopId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then(res => {
            if (res.status === 200)
                return res.json()
            else if (res.status === 400) {
                return res.json()
                    .then(body => {
                        const message = body.error
                        throw new Error(message)
                    })
            }
            else
                throw new Error('server error')
        })
}
export default retrieveWorkshop
