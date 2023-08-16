import { useState, useEffect } from 'react'
import retrieveStory from '../../logic/retrieveStory'
import context from '../../context'
import extractUserIdFromToken from '../helpers/extractUserIdFromToken'
import EditStoryModal from '../modals/EditStoryModal'

const ShowStory = (props) => {
    const [story, setStory] = useState(null)

    useEffect(() => {
        try {
            retrieveStory(props.storyId)
                .then(story => {
                    setStory(story)
                })
                .catch(error => alert(error.message))
        } catch (error) { alert(error.message) }
    }, [])

    const handleBackToStories = () => {
        props.onBackToStories()
    }

    let userId

    if (context.token)
        userId = extractUserIdFromToken(context.token)

    return (
        <div className='story-container'>
            {story ? (
                <>
                    <h1>{story.title}</h1>
                    <h4>{story.author.nickname}</h4>
                    <p>{story.summary}</p>
                    <p>{story.text}</p>
                    {story.author.id === userId && <>
                        <button>Edit</button>
                        <EditStoryModal story={story} />
                    </>}
                    <h2>{story.question}</h2>
                </>
            ) : (
                <p>Loading story...</p>
            )}
            {props.view === 'Story' && (
                <button type="button" onClick={handleBackToStories}>
                    Back to Stories
                </button>
            )}
        </div>

    )
}

export default ShowStory