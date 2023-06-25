function CreatePostModal(props){
   
    return  <div className="home-create-post-modal">
            <div className="home-create-post-container">
                <h2>Create post</h2>

                <form className="home-create-post-form" >
                    <label htmlFor="image">Image</label>
                    <input id="image" type="url"></input>

                    <label htmlFor="text">Text</label>
                    <textarea id="text"></textarea>

                    <button type="submit">Create</button>
                    <button className="home-create-post-cancel-button">Cancel</button>
                </form>
            </div>
        </div>
}