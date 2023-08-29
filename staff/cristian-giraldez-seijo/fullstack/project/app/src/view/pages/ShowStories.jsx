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
        <div className="flex flex-col items-center gap-2 w-full">
            <h1 className="font-bold text-xl">Read, write, and talking!</h1>
            <h2 className="font-semibold text-lg">"Writing is the painting of the voice", Voltaire.</h2>
            <section className='w-full flex flex-col items-center'>
                <h2 className="font-semibold text-lg">New updated stories</h2>
                {userId && <>
                    <a href="" onClick={handleShowCreateStory} className="text-pink-700 font-bold">
                        write your story</a>
                </>}
                {stories && stories.map(story => {
                    return <article className="flex flex-col items-center gap-2 mt-4 border border-pink-700 rounded-xl p-8 w-1/2" key={story.id}>
                        <h4><a href="" onClick={(event) => handleShowStory(event, story.id)} className="text-blue-800 font-bold">{story.title}</a></h4>
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
        </div>
    )
}

export default ShowStories