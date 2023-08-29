import { useState, useEffect } from 'react'
import retrieveStory from '../../logic/retrieveStory'
import createStory from '../../logic/createStory'
import context from '../../context'
import extractUserIdFromToken from '../helpers/extractUserIdFromToken'

const ShowStory = ({ storyId, onShowEditStory, onShowStory, onShowCreateStory }) => {
    const [story, setStory] = useState(null)

    useEffect(() => {
        try {
            retrieveStory(storyId)
                .then(story => {
                    setStory(story)
                })
                .catch(error => alert(error.message))
        } catch (error) { alert(error.message) }
    }, [storyId])

    const handleShowEditStory = (story) => onShowEditStory(story)

    const handleShowStory = (event, storyId) => {
        event.preventDefault()
        onShowStory(storyId)
    }

    const handleShowCreateStory = (event, storyId, previousQuestion) => {
        event.preventDefault()
        onShowCreateStory(storyId, previousQuestion)
    }

    let userId

    if (context.token)
        userId = extractUserIdFromToken(context.token)

    return (
        <div className='flex flex-col gap-2 p-20'>
            {story ? (
                <>
                    <h1 className="text-black font-semibold text-lg">{story.title}</h1>
                    <p>By {story.author.nickname}</p>
                    <p>{story.summary}</p>
                    <div className="italic pl-6 pr-8"><pre>{story.text}</pre></div>
                    {story.author.id === userId && <>
                        <button type="button" onClick={() => handleShowEditStory(story)} className="bg-pink-500 hover:bg-pink-700 text-white font-semibold py-1 w-[10%] px-3 rounded my-3">
                            Edit
                        </button>
                    </>}
                    <div className="bg-pink-600 text-white p-2 rounded">
                        <h2>{story.question}</h2>
                    </div>
                    <ul>
                        {(story.options.length === 0) ? <li className="text-black font-semibold">No further chapters</li> : <></>}
                        {
                            story.options.map(option => {
                                return <li key={option.id}><a href='' onClick={(event) => handleShowStory(event, option.id)} className="text-black font-semibold">{option.title}</a></li>
                            })
                        }
                        {context.token && <li><a href='' onClick={(event) => handleShowCreateStory(event, story.id, story.question)} className="text-pink-700 font-semibold">
                            Add a new chapter</a></li>}
                    </ul>
                </>
            ) : (
                <p>Loading story...</p>
            )}
        </div>
    )
}

export default ShowStory