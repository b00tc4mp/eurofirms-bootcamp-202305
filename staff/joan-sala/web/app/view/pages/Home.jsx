function Home(props) {
    console.log('Home ->render')

    const modalState = React.useState(null)
    const modal = modalState[0]
    const setModal = modalState[1]

    const postIdState = React.useState(null)
    const postId = postIdState[0]
    const setPostId = postIdState[1]

    const user = retrieveUser(context.userId)
    const posts = retrievePosts()

    const handleLogoutClick = () => {
        context.userId = null

        props.onLoggedOutClick()
    }

    const handleCreatePostClick = () => setModal('create-post')

    const handlePostCreated = () => setModal(null)

    const handleEditPostClick = postId => {
        setPostId(postId)
        setModal('edit-post')
    }

    const handleCreatePostCancelled = () => setModal(null)

    const handleEditPostCancelled = () => setModal(null)

    const handlePostEdited = () => setModal(null)

    const handleDeletePostClick = postId => {
        setPostId(postId)
        setModal('delete-post')
    }

    const handleDeletePostCancelled = () => setModal(null)

    const handlePostDeleted = () => setModal(null)

    return (
        <div className="home-view">
            <header className="home-header">
                <h1 className="home-title">Hello, {user.name}!</h1>

                <button className="home-logout-button" onClick={handleLogoutClick}>Logout</button>
            </header>

            <main className="home-main">
                <section className="home-posts">
                    {posts.map(post => <article>
                        <h2>{post.author.name}</h2>
                        <img className="home-post-image"
                            src={post.image}
                            alt={post.text} />
                        <p>{post.text}</p>

                        {post.author.id === context.userId && <>
                            <button>Edit</button>
                            <button>Delete</button>
                        </>
                        }
                    </article>)}
                </section>
            </main>

            <footer className="home-footer">
                <button className="home-create-post-button">+</button>
            </footer>

            {modal === 'create-post' && <CreatePostModal onPostCreated = { handlePostCreated } onCreatePostCancelled = { handleCreatePostCancelled } />}

            {modal === 'edit-post' && <EditPostModal postId = { postId } onPostEdited = { handlePostEdited } onEditPostCancelled = { handleEditPostCancelled } />}

            {modal === 'delete-post' && <DeletePostModal postId = { postId } onPostDeleted = { handlePostDeleted } onDeletePostCancelled = { handleDeletePostCancelled } />}
        </div>
    )
}