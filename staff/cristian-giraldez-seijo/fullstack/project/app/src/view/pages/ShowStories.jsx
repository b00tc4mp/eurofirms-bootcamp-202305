import { useState, useEffect } from "react"
import context from "../../context"
import retrieveStories from '../../logic/retrieveStories'
import extractUserIdFromToken from '../helpers/extractUserIdFromToken'
import CreateStoryModal from "../modals/CreateStoryModal"

const ShowStories = (props) => {
    const [storyId, setStoryId] = useState(null)
    const [stories, setStories] = useState(null)

    useEffect(() => {
        try {
            retrieveStories()
                .then(stories => setStories(stories))
                .catch(error => alert(error.message))
        } catch (error) { alert(error.message) }
    }, [])

    const handleShowStory = (event, storyId) => {
        event.preventDefault()
        props.onShowStory(storyId)
    }

    const handleStoryCreated = () => {
        try {
            retrieveStories()
                .then(stories => setStories(stories))
                .catch(error => alert(error.message))
        } catch (error) { alert(error.message) }
    }

    let userId

    if (context.token)
        userId = extractUserIdFromToken(context.token)

    return (
        <section className='stories-container'>
            <h2>New updated stories</h2>
            {userId && <>
                <a href="">write your story</a>
<CreateStoryModal onStoryCreated={handleStoryCreated}/>
            </>}
            {stories && stories.map(story => {
                return <article key={story.id}>
                    <h4><a href="" onClick={event => handleShowStory(event, story.id)}>{story.title}</a></h4>
                    <p>Author: {story.author.nickname}</p>
                    {story.sumary !== '' && (
                        <>
                            <p>Sumary:</p>
                            <p>{story.sumary}</p>
                        </>
                    )}
                </article>
            })}
        </section>
    )
}

export default ShowStories