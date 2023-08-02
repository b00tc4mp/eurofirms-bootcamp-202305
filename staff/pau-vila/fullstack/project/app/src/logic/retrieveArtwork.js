function retrieveArtwork(token, ArtworkId) {
    if (typeof token !== 'string') throw new Error('userId is not a string')
    if (typeof ArtworkId !== 'string') throw new Error('ArtworkId is not a string')

    return fetch(`${import.meta.env.VITE_API_URL}/posts/${ArtworkId}`, {
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
export default retrieveArtwork
