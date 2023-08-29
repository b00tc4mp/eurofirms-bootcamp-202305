function deleteStory(token, storyId) {
    if (typeof token !== 'string') throw new Error('token is not a string')
    if (typeof storyId !== 'string') throw new Error('storyId is not a string')

    return fetch(`${import.meta.env.VITE_API_URL}/stories/${storyId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
        .then(res => {
            if (res.status === 200)
                return
            else if (res.status === 400)
                return res.json()
                    .then(body => { throw new Error(body.error) })
            else
                throw new Error('server error')
        })
}

export default deleteStory