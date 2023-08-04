function updateArtwork(token, artworkId, image, description) {
    if (typeof token !== 'string') throw new Error('token is not a string')
    if (typeof artworkId !== 'string') throw new Error('artworkId is not a string')
    if (typeof image !== 'string') throw new Error('image is not a string')
    if (typeof description !== 'string') throw new Error('description is not a string')

    return fetch(`${import.meta.env.VITE_API_URL}/artworks/${artworkId}`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image, description })
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

export default updateArtwork 