import createArtwork from "../../../api/logic/createArtwork"

function createArtwork(token, image, description,typeWork, typeMaterial) {
    if (typeof token !== 'string') throw new Error('token is not a string')
    if (typeof image !== 'string') throw new Error('image is not a string')
    if (typeof description !== 'string') throw new Error('description is not a string')
    if (typeof typeWork !== 'string') throw new Error('typeWork is not a string')
    if (typeof typeMaterial !== 'string') throw new Error('typeMaterial is not a string')

    return fetch(`${import.meta.env.VITE_API_URL}/posts`, {
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

