function Home(props) {

    const [modal, setModal] = React.useState(null)
    const [idPost, setIdPost] = React.useState(null)
    const [userLogged, setUserLogged] = React.useState(null)
    const [postsRe, setPostsRe] = React.useState([])

    const handleCreateModal = () => setModal('create-modal')
    
    const handleOnCreatedPost = () => {
        try {
            retrievePosts(context.userLoggedId)
                .then(posts => {
                    setPostsRe(posts)
                    setModal(null)
                })
                .catch(error => alert('Error: ' + error.message))
        } catch (error) { alert('Error: ' + error.message) }
    }

    const handleOnUpdatedPost = () => {
        
    }

    const handleOnDeletedPost = () => {

    }

    const handleEditModal = (idPost) => {
        setIdPost(idPost)
        setModal('edit-modal')
    }
    const handleDeleteModal = (idPost) => {
        setIdPost(idPost)
        setModal('delete-modal')
    }
    const handleExitModal = () => {
        setIdPost(null)
        setModal(null)
    }
    const handleLogout = function () {
        context.userLoggedId = null
        props.onLogout()
    }

    React.useEffect(() => {
        try {
            Promise.all([retrieveUser(context.userLoggedId), retrievePosts(context.userLoggedId)])
                .then(([user, posts]) => {
                    setUserLogged(user)
                    setPostsRe(posts)
                })
                .catch(err => alert('Error Asynch: ' + err.message))

        } catch (err) { alert('Error Synch: ' + err.message) }
    }, [])


    return (
        <div className="home">
            <header className="home-header flex-hor">
                <div className="basic-head">
                    <h3 className="greetings">Hola, {userLogged ? userLogged.name : 'mundo'}</h3>
                </div>
            </header>

            <main className="home-view">
                <section className="posts-list basic-container">
                    {postsRe && postsRe.map(post => <article className="post-item" key={post.id}>
                        <image className="post-item-image" src={post.image} alt="Foto de Post" />
                        <p className="post-item-text">{post.text}</p>
                        <p className="post-item-user">{post.author.name}</p>

                        {post.author.id === context.userLoggedId && <>
                            <button className="post-item-button" type="button" onClick={() => handleEditModal(post.id)}>Editar</button>
                            <button className="post-item-button" type="button" onClick={() => handleDeleteModal(post.id)}>Borrar</button>
                        </>}
                    </article>)}
                </section>
            </main>

            <footer className="home-nav">
                <div className="basic-nav">
                    <button type="button" className="button-newpost basic-button" onClick={handleCreateModal}>Nuevo Post</button>
                    <button type="button" className="button-logout basic-button" onClick={handleLogout}>Salir</button>
                </div>
            </footer>

            {modal === 'create-modal' && <PostCreate onCreatedPost={handleOnCreatedPost} onExitModal={handleExitModal} />}
            {modal === 'edit-modal' && <PostEdit onUpdatedPost={handleOnUpdatedPost} onExitModal={handleExitModal} idPost={idPost} />}
            {modal === 'delete-modal' && <PostDelete onDeletedPost = {handleOnDeletedPost} onExitModal={handleExitModal} idPost={idPost} />}
        </div>
    )
}
