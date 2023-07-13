function Home(props) {
    console.log('Home -> render')

    const modalState = React.useState(null)
    const modal = modalState[0]
    const setModal = modalState[1]

    const postIdState = React.useState(null)
    const postId = postIdState[0]
    const setPostId = postIdState[1]

    const userState = React.useState(null)
    const user = userState[0]
    const setUser = userState[1]

    const postsState = React.useState(null)
    const posts = postsState[0]
    const setPosts = postsState[1]

    React.useEffect(() => {
        try {
            retrieveUser(context.userId)
                .then(user => setUser(user))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }

        try {
            retrievePosts(context.userId)
                .then(posts => setPosts(posts))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleLogoutClick = () => {
        context.userId = null

        props.onLoggedOut()
    }

    const handleCreatePostClick = () => setModal('create-post')

    const handlePostCreated = () => {
        try {
            retrievePosts(context.userId)
                .then(posts => {
                    setModal(null)
                    setPosts(posts)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleEditPostClick = postId => {
        setPostId(postId)
        setModal('edit-post')
    }

    const handleCreatePostCancelled = () => setModal(null)

    const handleEditPostCancelled = () => {
        setModal(null)
        setPostId(null)
    }

    const handlePostEdited = () => {
        try {
            retrievePosts(context.userId)
                .then(posts => {
                    setPosts(posts)
                    setModal(null)
                    setPostId(null)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleDeletePostClick = postId => {
        setPostId(postId)
        setModal('delete-post')
    }

    const handleDeletePostCancelled = () => {
        setModal(null)
        setPostId(null)
    }

    const handlePostDeleted = () => {
        setModal(null)
        setPostId(null)
    }

    return <div className="home-view">
        <header className="home-header">
            <h1 className="home-title">Hello, {user ? user.name : 'World'}!</h1>

            <button className="home-logout-button" onClick={handleLogoutClick}>Logout</button>
        </header>

        <main className="home-main">
            <section className="home-posts">
                {posts && posts.map(post => <article>
                    <h2>{post.author.name}</h2>

                    <img className="home-post-image"
                        src={post.image}
                        alt={post.text}></img>

                    <p>{post.text}</p>

                    {post.author.id === context.userId && <>
                        <button onClick={() => handleEditPostClick(post.id)}>Edit</button>
                        <button onClick={() => handleDeletePostClick(post.id)}>Delete</button>
                    </>}
                </article>)}
            </section>
        </main>

        <footer className="home-footer">
            <button className="home-create-post-button" onClick={handleCreatePostClick}>+</button>
        </footer>

        {modal === 'create-post' && <CreatePostModal onPostCreated={handlePostCreated} onCreatePostCancelled={handleCreatePostCancelled} />}

        {modal === 'edit-post' && <EditPostModal postId={postId} onPostEdited={handlePostEdited} onEditPostCancelled={handleEditPostCancelled} />}

        {modal === 'delete-post' && <DeletePostModal postId={postId} onPostDeleted={handlePostDeleted} onDeletePostCancelled={handleDeletePostCancelled} />}
    </div>
}