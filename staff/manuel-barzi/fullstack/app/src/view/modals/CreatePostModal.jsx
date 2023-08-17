import context from '../../context'
import createPost from '../../logic/createPost'

function CreatePostModal({ onCreatePostCancelled, onPostCreated }) {
    console.log('CreatePostModal -> render')

    const handleSubmit = event => {
        event.preventDefault()

        const image = event.target.image.value
        const text = event.target.text.value

        try {
            createPost(context.token, image, text)
                .then(() => onPostCreated())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleCancelClick = () => onCreatePostCancelled()

    return <div className="bg-[blue]/50 fixed w-full h-full top-0 flex items-center justify-center">
        <div className="bg-white p-[1rem] border border-black rounded-xl">
            <h2>Create post</h2>

            <form className="flex flex-col items-center justify-center gap-[1rem]" onSubmit={handleSubmit}>
                <label htmlFor="image">Image</label>
                <input className="border rounded-md bg-[#eeeeee]" id="image" type="url"></input>

                <label htmlFor="text">Text</label>
                <textarea className="border rounded-md bg-[#eeeeee]" id="text"></textarea>

                <button className="p-2 rounded-md border border-black" type="submit">Create</button>
                <button type="button" className="p-2 rounded-md border border-black" onClick={handleCancelClick}>Cancel</button>
            </form>
        </div >
    </div >
}

export default CreatePostModal