function Home(props) {

    const [modalSt, setModalSt] = React.useState(null)

    const handleGotoCreateModal = setModalSt('create-modal')
    const handleGotoEditModal = setModalSt('edit-modal')
    const handleGotoDeleteModal = setModalSt('detele-modal')
    const handleExitModal = setModalSt(null)

    const userPublicLogged = userRetrieve(context.userLoggedId)
    const postsFull = postRetrieve()

    const handleOnLogout = function () {
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
                    {postsFull.map(post => <article key={post.id} className="post-item">
                        <img className="post-item-img" src={post.image} alt="Foto de Post" />
                        <p className="post-item-msg">{post.text}</p>
                        <p className="post-item-user">{post.author.name}</p>

                        {post.author.id === context.userLoggedId && <>
                            <button className="post-item-button" type="button">Editar</button>
                            <button className="post-item-button" type="button">Borrar</button>
                        </>}
                    </article>
                    )}
                </section>
            </main>

            <footer className="home-nav">
                <div className="basic-nav">
                    <button type="button" className="button-newpost basic-button">Nuevo Post</button>
                    <button type="button" className="button-logout basic-button" onClick={handleOnLogout}>Salir</button>
                </div>
            </footer>

            {modalSt === 'create-modal' && <PostCreate onExitModal={handleExitModal}/>}
            {modalSt === 'edit -modal' && <PostEdit />}
            {modalSt === 'delete-modal' && <PostDelete />}
        </div>
    )
}
