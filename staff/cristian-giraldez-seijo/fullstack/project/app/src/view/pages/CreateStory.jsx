import context from '../../context'
import createStory from '../../logic/createStory'

const CreateStory = ({ storyId, previousQuestion, onStoryCreated }) => {

    const handleSubmit = event => {
        event.preventDefault()
        const title = event.target.title.value
        const sumary = event.target.sumary.value
        const text = event.target.text.value
        const question = event.target.question.value
        try {
            createStory(context.token, title, sumary, text, question, storyId)
                .then(() => onStoryCreated())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className=" m-auto right-0 left-0 top-0 h-screen flex flex-col items-center justify-center">

            <form className="flex flex-col justify-center items-center p-6 bg-gradient-to-br from-green-300 to-yellow-100 border-3 border-solid border-black border-4 rounded-lg w-64" onSubmit={handleSubmit}>

                <h2 className='text-red-700 font-semibold'>
                    {(previousQuestion) ? previousQuestion : 'New story'}
                    </h2>
                
                <label htmlFor="title">Title</label>
                <input type="text" id='title'/>

                <label htmlFor="sumary">Sumary</label>
                <textarea id="sumary" cols="30" rows="10"></textarea>

                <label htmlFor="text">Text</label>
                <textarea id="text"></textarea>

                <label htmlFor="question">Question</label>
                <input type="text" id='question'/>
                <button className='bg-green-400 hover:bg-green-600 text-black font-semibold py-1 px-2 rounded m-2' type="submit">Save</button>
            </form>
        </div>
    )
}

export default CreateStory