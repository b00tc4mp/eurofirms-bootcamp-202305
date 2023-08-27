import { useState } from 'react'
import context from '../../context'
import updateStory from '../../logic/updateStory'
import deleteStory from '../../logic/deleteStory'

const EditStory = ({ story, onStoryEdited, onStoryDeleted }) => {
    const [onDelete, setOnDelete] = useState(false)

    const handleSubmit = event => {
        event.preventDefault()
        const title = event.target.title.value
        const sumary = event.target.sumary.value
        const text = event.target.text.value
        const question = event.target.question.value

        try {
            updateStory(context.token, story.id, title, sumary, text, question, story.shortcut)
                .then(() => onStoryEdited(story.id))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleDeletting = (event) => {
        event.preventDefault()
        setOnDelete(true)
    }

    const handleDeleteConfirm = () => {
        try {
            deleteStory(context.token, story.id)
            .then(() => onStoryDeleted())
            .catch(error => alert(error.message))
        } catch(error) {alert(error.message)}
    }

    const handleDeleteCancel = () => setOnDelete(false)

    return (
        <div className="m-auto right-0 left-0 top-0 h-screen flex flex-col items-center justify-center">

            {
                story && <form className="flex flex-col justify-center items-center p-6 bg-gradient-to-br from-green-300 to-yellow-100 border-3 border-solid border-black border-4 rounded-lg w-64" onSubmit={handleSubmit}>

                    <h2 className='text-red-700 font-semibold'>Edit story</h2>
                    <label htmlFor="title">Title</label>
                    <input type="text" id='title' defaultValue={story.title} />

                    <label htmlFor="sumary">Sumary</label>
                    <textarea id="sumary" cols="30" rows="10" defaultValue={story.sumary}></textarea>

                    <label htmlFor="text">Text</label>
                    <textarea id="text" defaultValue={story.text}></textarea>

                    <label htmlFor="question"></label>
                    <input type="text" id='question' defaultValue={story.question} />

                    <button className='bg-green-400 hover:bg-green-600 text-black font-semibold py-1 px-2 rounded m-2' type="submit">Save</button>
                </form>}
            <a className='text-red-800 font-bold' href='' onClick={handleDeletting}>Delete story</a>
            {onDelete===true && (
                <>
                    <p>Are you sure?</p>
                    <button className='font-semibold' onClick={handleDeleteConfirm}>Yes</button>
                    <button className='font-semibold' onClick={handleDeleteCancel}>No</button>
                </>
            )}
        </div>
    )
}

export default EditStory