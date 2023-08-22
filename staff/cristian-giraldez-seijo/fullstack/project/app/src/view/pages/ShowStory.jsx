import { useState, useEffect } from 'react'
import retrieveStory from '../../logic/retrieveStory'
import context from '../../context'
import extractUserIdFromToken from '../helpers/extractUserIdFromToken'

const ShowStory = ({ storyId, onShowEditStory }) => {
    const [story, setStory] = useState(null)

    useEffect(() => {
        try {
            retrieveStory(storyId)
                .then(story => {
                    setStory(story)
                })
                .catch(error => alert(error.message))
        } catch (error) { alert(error.message) }
    }, [])

    const handleShowEditStory = (story) => onShowEditStory(story)

    let userId

    if (context.token)
        userId = extractUserIdFromToken(context.token)

    return (
        <div className='story-container'>
            {story ? (
                <>
                    <h1>{story.title}</h1>
                    <p>By {story.author.nickname}</p>
                    <p>{story.summary}</p>
                    <pre>{story.text}</pre>
                    {story.author.id === userId && <>
                        <button type="button" onClick={() => handleShowEditStory(story)}>Edit</button>
                    </>}
                    <h2>{story.question}</h2>
                </>
            ) : (
                <p>Loading story...</p>
            )}
        </div>
    )
}

export default ShowStory