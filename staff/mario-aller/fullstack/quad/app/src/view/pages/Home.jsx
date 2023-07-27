import { retrieveUser } from '../../logic/user-ctrl'
import context from '../../context'
import { useState, useEffect } from 'react'
// import { PostCreate } from '../modals/PostCreate'
// import { PostDelete } from '../modals/PostDelete'
// import { PostEdit } from '../modals/PostEdit'

function Home({ onLogout }) {
        const [userLogged, setUserLogged] = useState(null)

    // const [modal, setModal] = useState(null)
    // const [idPost, setIdPost] = useState(null)
    // const [posts, setPosts] = useState([])

    useEffect(() => {
        try {
            Promise.all([retrieveUser(context.tokenUser), () => { }])
                .then(([user, dataPanel]) => {
                    setUserLogged(user)
                    dataPanel = null
                })
                .catch(err => alert('Error: ' + err.message))

        } catch (err) { alert('Error: ' + err.message) }
    }, [])

    const handleLogout = () => {
        context.tokenUser = null
        onLogout()
    }

    // const handleCreateModal = () => setModal('create-modal')
    // const handleEditModal = (idPost) => {
    //     setIdPost(idPost)
    //     setModal('edit-modal')
    // }
    // const handleDeleteModal = (idPost) => {
    //     setIdPost(idPost)
    //     setModal('delete-modal')
    // }
    // const handleExitModal = () => {
    //     setIdPost(null)
    //     setModal(null)
    // }
    // const handleRefreshPostsExitModal = () => {
    //     try {
    //         retrievePosts(context.tokenUser)
    //             .then(posts => {
    //                 setPosts(posts)
    //                 setModal(null)
    //                 setIdPost(null)
    //             })
    //             .catch(error => alert('Error: ' + error.message))
    //     } catch (error) { alert('Error: ' + error.message) }
    // }
    // const userId = JSON.parse(atob(context.tokenUser.split('.')[1])).sub

    return (
        <div className="home">
            <header className="home-header">
                <div className="basic-head">
                    <h3>Hola, {userLogged ? userLogged.name : 'mundo'}</h3>
                </div>
            </header>

            <main className="home-view">
                <section className="posts-list basic-container">


                    {/* {posts && posts.map(post => <article className="post-item" key={post.id}>
                        <button className="post-item-fav" type="button" onClick={() => handleToggleFavPost(post.id)}>{post.fav ? '💖' : '📦'}</button>
                        <img className="post-item-image" src={post.image} alt="Foto de Post" />
                        <p className="post-item-text">{post.text}</p>
                        <p className="post-item-user">{post.author.name}</p>

                        {post.author.id === userId && <>
                            <button className="post-item-button" type="button" onClick={() => handleEditModal(post.id)}>Editar</button>
                            <button className="post-item-button" type="button" onClick={() => handleDeleteModal(post.id)}>Borrar</button>
                        </>}
                    </article>)} */}
                </section>
            </main>

            <footer className="home-nav">
                <div className="basic-nav">
                    {/* <button type="button" className="button-newpost basic-button" onClick={handleCreateModal}>Nuevo Post</button> */}
                    <button type="button" className="basic-button" onClick={handleLogout}>Salir</button>
                </div>
            </footer>

            {/* {modal === 'create-modal' && <PostCreate onCreatedPost={handleRefreshPostsExitModal} onExitModal={handleExitModal} />}
            {modal === 'edit-modal' && <PostEdit onUpdatedPost={handleRefreshPostsExitModal} onExitModal={handleExitModal} idPost={idPost} />}
            {modal === 'delete-modal' && <PostDelete onDeletedPost={handleRefreshPostsExitModal} onExitModal={handleExitModal} idPost={idPost} />} */}
        </div>
    )
}
export default Home