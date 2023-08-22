import { useState, useEffect } from "react"
import context from "../../context"
import retrieveStories from '../../logic/retrieveStories'
import extractUserIdFromToken from '../helpers/extractUserIdFromToken'
import CreateStory from "./CreateStory"

const ShowStories = ({ onShowStory, onShowCreateStory }) => {
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
        onShowStory(storyId)
    }

    const handleShowCreateStory = (event) => {
        event.preventDefault()
        onShowCreateStory()
    }

    let userId

    if (context.token)
        userId = extractUserIdFromToken(context.token)

    return (
        <>
            <h1>Read, write, and talking!</h1>
            <p>"Writing is the painting of the voice", Voltaire.</p>
            <section className='stories-container'>
                <h2>New updated stories</h2>
                {userId && <>
                    <a href="" onClick={handleShowCreateStory}>write your story</a>
                </>}
                {stories && stories.map(story => {
                    return <article key={story.id}>
                        <h4><a href="" onClick={(event) => handleShowStory(event, story.id)}>{story.title}</a></h4>
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
        </>
    )
}

export default ShowStories