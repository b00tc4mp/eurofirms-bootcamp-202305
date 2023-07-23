function Home(props) {
    console.log('Home ->render')

    const modalState = React.useState(null) // Create empty modal to click
    const modal = modalState[0]
    const setModal = modalState[1] // For change moodal  

    const userState = React.useState()
    const user = userState[0]
    const setUser = userState[1]

    const postIdState = React.useState(null)
    const postId = postIdState[0]
    const setPostId = postIdState[1]

    const postsState = React.useState(null)
    const posts = postsState[0]
    const setPosts = postsState[1]

    //Sólo se ejecuta una vez se pinta el Home
    React.useEffect(() => { //Para efectos secundarios como consecuéncia de llama a una api.
        try {
            retrieveUser(context.token)
                .then(user => setUser(user))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }

        try {
            retrievePosts(context.token)
                .then(posts => setPosts(posts))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, []) //Para pasar el array vacío si o si, sólo una vez
   
    const handleLogoutClick = () => {
        context.token = null 

        props.onLoggedOutClick()
    }

    const handleCreatePostClick = () => setModal('create-post')

    const handlePostCreated = () => {
        
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

    const handleEditPostClick = postId => {
        setPostId(postId)
        setModal('edit-post')
    }

    const handleCreatePostCancelled = () => setModal(null)

    const handleEditPostCancelled = () => setModal(null)

    //const handlePostEdited = () => setModal(null), refresar pantaalla
    const handlePostEdited = () => {
        try{
            retrievePosts(context.token)
            .then(posts => {
                setPosts(posts)
                setModal(null)
                setPostId(null)
            })
            .catch(error => alert(error.message))
        }catch(error){
            alert(error.message)
        }
    }
    const handleDeletePostClick = postId => {
        setPostId(postId)
        setModal('delete-post')
    }

    const handleDeletePostCancelled = () => setModal(null)

    const handlePostDeleted = () => {
        try{
            retrievePosts(context.token)
            .then(posts => {
                setPosts(posts)
                setModal(null) //PARA QUE VAYA BIEN EL BORRADO
                setPostId(null)
            })
            .catch(error => alert(error.message))
        }catch(error){
            alert(error.message)
        }
    }
    const userId = extractUserIdFromToken(context.token) //importante el context

    //'key={post.id}' se utiliza para asignar una clave única a cada elemento de una lista o conjunto de componentes renderizados dinámicamente. Esto ayuda a React a realizar actualizaciones eficientes en la lista al identificar los cambios en los elementos y evitar renderizaciones innecesarias
    return (
        <div className="home-view">
            <header className="home-header">
                <h1 className="home-title">Hello, {user ? user.name : 'World'}!</h1>

                <button className="home-logout-button" onClick={handleLogoutClick}>Logout</button>
            </header>

            <main className="home-main">
                <section className="home-posts">
                    {posts && posts.map(post => 
                    <article key={post.id}>
                        <h2>{post.author.name}</h2>
                        <img className="home-post-image"
                            src={post.image}
                            alt={post.text} />
                        <p>{post.text}</p>

                        {post.author.id === userId && <>
                            <button onClick={() => handleEditPostClick(post.id)}>Edit</button>
                            <button onClick={() => handleDeletePostClick(post.id)}>Delete</button>
                            <button onClick={() => handleToggleFavPost(post.id)} className = 'favButton'>{post.fav ? '♥' : '♡'}</button>
                        </>
                        }
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
    )
}