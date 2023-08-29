function retrieveStory(storyId) {
    
    return fetch(`${import.meta.env.VITE_API_URL}/stories/${storyId}`)
    .then(res => {
        if (res.status === 200) return res.json()
        else if (res.status === 400) return res.json()
    .then(body => { throw new Error(body.error) })
    })
}
export default retrieveStory