function updateStory(token, storyId, title, sumary, text, question) {
    if (typeof token !== 'string') throw new Error('token is not a string')
    if (typeof storyId !== 'string') throw new Error('storyId is not a string')
    if (typeof title !== 'string') throw new Error('title is not a string')
    if (typeof sumary !== 'string') throw new Error('sumary is not a string')
    if (typeof text !== 'string') throw new Error('text is not a string')
    if (typeof question !== 'string') throw new Error('question is not a string')

    return fetch(`${import.meta.env.VITE_API_URL}/stories/${storyId}`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, sumary, text, question, shortcut, origin })
    })
        .then(res => {
            if (res.status === 204)
                return
            else if (res.status === 400)
                return res.json()
                    .then(body => { throw new Error(body.error) })
        })
}

export default updateStory