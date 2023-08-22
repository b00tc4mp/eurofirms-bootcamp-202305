import context from '../../context'
import createStory from '../../logic/createStory'

const CreateStory = ({ onStoryCreated }) => {

    const handleSubmit = event => {
        event.preventDefault()
        const title = event.target.title.value
        const sumary = event.target.sumary.value
        const text = event.target.text.value
        const question = event.target.question.value

        try {
            createStory(context.token, title, sumary, text, question)
                .then(() => onStoryCreated())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className="fixed z-10 m-auto top-0 bg-black bg-opacity-60 w-full h-full flex flex-col items-center justify-center">

            <form className="flex flex-col justify-center items-center p-6 bg-white border-3 border-solid border-black border-4 rounded-lg w-64" onSubmit={handleSubmit}>

                <h2 className='text-red-700'>New story</h2>
                <label htmlFor="title">Title</label>
                <input type="text" id='title'/>

                <label htmlFor="sumary">Sumary</label>
                <textarea id="sumary" cols="30" rows="10"></textarea>

                <label htmlFor="text">Text</label>
                <textarea id="text"></textarea>

                <label htmlFor="question">Question</label>
                <input type="text" id='question'/>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default CreateStory