function createArtwork(token, image, description,typeWork, typeMaterial) {
    if (typeof token !== 'string') throw new Error('token is not a string')
    if (typeof image !== 'string') throw new Error('image is not a string')
    if (typeof description !== 'string') throw new Error('description is not a string')
    if (typeof Material !== 'string') throw new Error('material is not a string')
    if (typeof Ornaments !== 'string') throw new Error('ornaments is not a string')

    return fetch(`${import.meta.env.VITE_API_URL}/artworks`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image, description, typeWork, typeMaterial })
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

