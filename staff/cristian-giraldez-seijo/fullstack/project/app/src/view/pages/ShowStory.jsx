import { useState, useEffect } from 'react'
import retrieveStory from '../../logic/retrieveStory'

const ShowStory = (props) => {
    const [story, setStory] = useState(null)

    useEffect(() => {
        try {
            if (!props.storyId) throw new Error('Story not found')
            retrieveStory(props.storyId)
                .then(story => setStory(story))
                .catch(error => alert(error.message))
        } catch (error) { alert(error.message) }
    }, [props.storyId])

    return (
        <div className='story-container'>
            {story ? (
                <>
                    <h1>{story.title}</h1>
                    <h4>{story.author.nickname}</h4>
                    <p>{story.summary}</p>
                    <p>{story.text}</p>
                    <h2>{story.question}</h2>
                </>
            ) : (
                <p>Loading story...</p>
            )}
        </div>

    )
}

export default ShowStory