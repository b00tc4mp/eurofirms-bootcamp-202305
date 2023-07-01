function CreatePostModal(props) {






    return <div className="home-create-post-modal">
        <div className="home-create-post-container">
            <h2>Create post</h2>

            <form className="home-create-post-form">
                <label htmlFor="create-post-url">Image</label>
                <input id="create-post-url" type="url"></input>

                <label htmlFor="create-psot-text">Text</label>
                <textarea id="create-post-text"></textarea>

                <button type="submit">Create</button>
                <button className="home-create-post-cancel-button">Cancel</button>
            </form>
        </div>
    </div>
}