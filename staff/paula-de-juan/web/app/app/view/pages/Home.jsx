function Home() {
    
    const user = retrieveUser(userId)
    const posts = retrievePosts()

    return <div className="home-view">
        <header>
            <h1 className="home-title">Hello, {user.name}!</h1>
            <button className="home-logout-button">Logout</button>
        </header>

        <main className="home-main">
            <section className="home-posts">
                {posts.map(post =>
                <article className="posts-container">
                    <h2>{post.author.name}</h2>
                    <img className="post-image" src={post.image} alt={post.text}></img>
                    <p>{post.text}</p>
                    {post.author.id === userId && <>
                        <button>Edit</button>
                        <button>Delete</button>
                    </>}    
                </article>)}
            </section>
        </main>

        <footer className="home-footer">
            <button className="home-create-post-button">+</button>
        </footer>
        <div className="home-create-post-modal off">
            <div className="home-create-post-container">
                <h2>Create post</h2>
                <form className="home-create-post-form">
                    <label htmlFor="create-post-url">Image</label>
                    <input id="create-post-url" type="url" />

                    <label htmlFor="create-post-text">Text</label>
                    <textarea id="create-post-text"></textarea>

                    <button type="submit">Create</button>
                    <button className="home-create-post-cancel-button">Cancel</button>
                </form>
            </div>
        </div>

        <div className="home-edit-post-modal off">
            <div className="home-edit-post-container">
                <h2>Edit post</h2>
                <form className="home-edit-post-form">
                    <input type="hidden" id="edit-post-id" />

                        <label htmlFor="edit-post-url">Image</label>
                        <input id="edit-post-url" type="url" />

                        <label htmlFor="edit-post-text">Text</label>
                        <textarea id="edit-post-text"></textarea>

                        <button type="submit">Save changes</button>
                        <button className="home-edit-post-cancel-button">Cancel</button>
                </form>
            </div>
        </div>

        <div className="home-delete-post-modal off">
            <div className="home-delete-post-container">
                <h2>Delete post</h2>
                <form className="home-delete-post-form">

                    <input type="hidden" id="delete-post-id" />

                        <button type="submit">Delete</button>
                        <button className="home-delete-post-cancel-button">Cancel</button>
                </form>
            </div>
        </div>
    </div>
}