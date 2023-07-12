function CreatePostModal(props){
   const handleCancelCreatePostModal =()=> props.onCreatePostCancelled()

   const handleSubmit = event=>{
    event.preventDefault()

    const image = event.target.image.value
    const text = event.target.text.value

    const result=createPost(context.userId,image,text)

    if(!result){
        alert('You cannot create a post ')
        return
    }
    props.onCreatePost()
    
   }


    return  <div className="home-create-post-modal">
            <div className="home-create-post-container">
                <h2>Create post</h2>

                <form className="home-create-post-form" onSubmit ={handleSubmit}>
                    <label htmlFor="image">Image</label>
                    <input id="image" type="url"></input>

                    <label htmlFor="text">Text</label>
                    <textarea id="text"></textarea>

                    <button type="submit">Create</button>
                    <button onClick={handleCancelCreatePostModal} className="home-create-post-cancel-button">Cancel</button>
                </form>
            </div>
        </div>
}