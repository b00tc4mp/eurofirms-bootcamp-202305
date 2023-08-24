function deleteArtwork(token, artworkId) {
    if (typeof token !== 'string') throw new Error('token is not a string')
    if (typeof artworkId !== 'string') throw new Error('artworkId is not a string')

    return fetch(`${import.meta.env.VITE_API_URL}/artworks/${artworkId}`, {
        method: 'DELETE',   
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
        .then(res => {
            if (res.status === 204)
                return 
            else if (res.status === 400) {
                return res.json()
                    
                    .then(body => {
                        const message = body.error

                        throw new Error(message)
                    })}
            else
                throw new Error('server error')
        })
}
export default deleteArtwork
