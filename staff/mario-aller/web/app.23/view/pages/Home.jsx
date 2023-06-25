function Home(props) {

    const [modalSt, setModalSt] = React.useState(null)

    const handleCreateModal = () => setModalSt('create-modal')
    const handleEditModal = () => setModalSt('edit-modal')
    const handleDeleteModal = () => setModalSt('delete-modal')
    const handleExitModal = () => setModalSt(null)

    const userPublicLogged = userRetrieve(context.userLoggedId)
    const postsFull = postRetrieve()

    const handleLogout = function () {
        context.userLoggedId = null
        props.onLogout()
    }

    return (
        <div className="home">
            <header className="home-header flex-hor">
                <div className="basic-head">
                    <h3 className="greetings">Hola, {userPublicLogged.name}</h3>
                </div>
            </header>

            <main className="home-view">
                <section className="posts-list basic-container">
                    {postsFull.map(post => <article className="post-item" key={post.id}>
                        <img className="post-item-img" src={post.image} alt="Foto de Post" />
                        <p className="post-item-msg">{post.text}</p>
                        <p className="post-item-user">{post.author.name}</p>

                        {post.author.id === context.userLoggedId && <>
                            <button className="post-item-button" type="button">Editar</button>
                            <button className="post-item-button" type="button">Borrar</button>
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
            {modalSt === 'create-modal' && <PostCreate onExitModal={handleExitModal}/>}

        </div>
    )
}
