import { useState, useEffect } from "react"
import retrieveStories from '../../logic/retrieveStories'

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

    return (
        <section className='stories-container'>
            <h2>New updated stories</h2>
            {stories && stories.map(story => {
                return <article key={story.id}>
                    <h4><a href="" onClick={event => handleShowStory(event, story.id)}>{story.title}</a></h4>
                    <h4>{story.author.nickname}</h4>
                    <p>{story.sumary}</p>
                </article>
            })}
        </section>
    )
}

export default ShowStories