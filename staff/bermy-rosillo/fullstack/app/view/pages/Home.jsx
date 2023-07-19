function Home(props) {
    console.log('Home->render')

    const viewModal = React.useState()
    const modal = viewModal[0]
    const setModal = viewModal[1]

    const postIdState = React.useState()
    const postId = postIdState[0]
    const setPostId = postIdState[1]

    const userState = React.useState() //null
    const user = userState[0]
    const setUser = userState[1]

    const postsState = React.useState()
    const posts = postsState[0]
    const setPosts = postsState[1]

    React.useEffect(() => {
        try {
            retrieveUser(context.token)
                .then(user => setUser(user))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
        //-------
        try {
            retrievePosts(context.token)
                .then(posts => setPosts(posts))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleLoggedOut = () => {
        context.token = null

        props.logoutClick()
    }

    const handleCreatePostModal = () => setModal('create-post-modal')
    const handleCreatePostCancelled = () => setModal(null)
    const handleCreatedPost = () => {
        try {
            retrievePosts(context.token)
                .then(posts => {
                    setPosts(posts)
                    setModal(null)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }


    const handleEditPostModal = postId => {
        setPostId(postId)

        setModal('edit-post-modal')
    }
    const handleEditPostCancelled = () => setModal(null)
    const handleEditPost = () => {
        try {
            retrievePosts(context.token)
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

    const handleDeletePostModal = postId => {
        setPostId(postId)

        setModal('delete-post-modal')
    }
    const handleDeletePostCancelled = () => setModal(null)
    const handleDeletePost = () => {
        try {
            retrievePosts(context.token)
                .then(posts => {
                    setPosts(posts)
                    setModal(null) // ocultar modal
                    setPostId(null)// reinicial postID en null
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }


    //--------------------------------------------
    const userId = extractUserIdFromToken(context.token)

    return <div className="home-view ">
        <header className="home-header">
            <h1 className="home-title">Welcome, {user ? user.name : 'User'} </h1>
            <button className="home-logout-button" onClick={handleLoggedOut}>Logout </button>
        </header>

        <main className="home-main">
            <section className="home-posts">
                {posts && posts.map(post => {
                    return <article key={post.id}>
                        <h2>{post.author.name}</h2>
                        <img className='home-post-image' src={post.image} alt={post.text}></img>
                        <p>{post.text}</p>
                        {post.author.id === userId &&
                            <>
                                <button onClick={() => handleEditPostModal(post.id)}>Edit</button>
                                <button onClick={() => handleDeletePostModal(post.id)}>Delete</button>
                            </>
                        }
                    </article>
                })}
            </section>
        </main>

        <footer className="home-footer">
            <button className="home-create-post-button" onClick={handleCreatePostModal}>Add new post</button>
        </footer>

        {modal === 'create-post-modal' && <CreatePostModal onCreatePost={handleCreatedPost} onCreatePostCancelled={handleCreatePostCancelled} />}

        {modal === 'edit-post-modal' && <EditPostModal postId={postId} onEditPostCancelled={handleEditPostCancelled} onEditPost={handleEditPost} />}

        {modal === 'delete-post-modal' && <DeletePostModal postId={postId} onDeletePostCancelled={handleDeletePostCancelled} onDeletePost={handleDeletePost} />}


    </div>

}
