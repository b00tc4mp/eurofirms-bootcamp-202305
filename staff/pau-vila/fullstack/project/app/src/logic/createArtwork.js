function createArtwork(token, image, description, materials, ornaments ) {
    if (typeof token !== 'string') throw new Error('token is not a string')
    if (typeof image !== 'string') throw new Error('image is not a string')
    if (typeof description !== 'string') throw new Error('description is not a string')
    if (typeof materials !== 'string') throw new Error('materials is not a string')
    if (!Array.isArray(ornaments)) throw new Error('ornaments is not a array')

    return fetch(`${import.meta.env.VITE_API_URL}/artworks`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image, description, materials, ornaments })
    })
        .then(res => {
            if (res.status === 201)
                return
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
export default createArtwork

