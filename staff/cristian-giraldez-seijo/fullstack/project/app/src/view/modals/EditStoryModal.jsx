import context from '../../context'
//import updateStory from '../../logic/updateStory'

const EditStoryModal = ({ story, onEditStoryCancelled, onStoryEdited }) => {

    const handleCancelClick = () => onEditStoryCancelled()
    const handleSubmit = event => {
        event.preventDefault()
        const title = event.target.title.value
        const sumary = event.target.sumary.value
        const text = event.target.text.value
        const question = event.target.question.value

        try {
            updateStory(context.token, storyId, title, sumary, text, question)
                .then(() => onStoryEdited())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className="fixed z-10 m-auto top-0 bg-black bg-opacity-60 w-full h-full flex flex-col items-center justify-center">

            {
                story && <form className="flex flex-col justify-center items-center p-6 bg-white border-3 border-solid border-black border-4 rounded-lg w-64" onSubmit={handleSubmit}>

                    <h2 className='text-red-700'>Edit story</h2>
<label htmlFor="title">Title</label>
<input type="text" id='title' defaultValue={story.title}/>

                    <label htmlFor="text">Text</label>
                    <textarea id="text" defaultValue={story.text}></textarea>

<label htmlFor="question"></label>
<input type="text" id='question' defaultValue={story.question}/>
                    <button type="submit">Save</button>
                    <button type="button" className="show-story-edit-story-cancel-button" onClick={handleCancelClick} > Cancel </button>
                </form>}
        </div>
    )
}

export default EditStoryModal