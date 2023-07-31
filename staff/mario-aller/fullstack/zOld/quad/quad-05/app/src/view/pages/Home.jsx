import { retrieveUser } from '../../logic/user-ctrl'
import context from '../../context'
import { useState, useEffect } from 'react'
// import { getIdFromToken } from '../../logic/helpers/convert'
import { PanelCreate } from '../modals/PanelCreate'
// import { PostDelete } from '../modals/PostDelete'
// import { PostEdit } from '../modals/PostEdit'

function Home({ onLogout }) {
    const [userLogged, setUserLogged] = useState(null)

    const [modal, setModal] = useState(null)
    // const [idPanel, setIdPanel] = useState(null)
    // const [posts, setPosts] = useState([])

    useEffect(() => {
        try {
            retrieveUser(context.tokenUser)
                .then(user => setUserLogged(user))
                .catch(error => alert('Error: ' + error.message))
        } catch (error) { alert('Error: ' + error.message) }
    }, [])

    const handleLogout = () => {
        context.tokenUser = null
        onLogout()
    }

    const handleCreateModal = () => setModal('create-modal')
   
    // const handleEditModal = (idPost) => {
    //     setIdPanel(idPanel)
    //     setModal('edit-modal')
    // }
    // const handleDeleteModal = (idPost) => {
    //     setIdPanel(idPanel)
    //     setModal('delete-modal')
    // }
    const handleExitModal = () => {
        // setIdPanel(null)
        setModal(null)
    }
    const handleRefreshPanelsExitModal = () => {
        setModal(null)
        // try {
        //     retrievePosts(context.tokenUser)
        //         .then(posts => {
        //             // setPosts(posts)
        //             // setModal(null)
        //             // setIdPost(null)
        //         })
        //         .catch(error => alert('Error: ' + error.message))
        // } catch (error) { alert('Error: ' + error.message) }
    }

    // const userId = getIdFromToken(context.tokenUser)

    return (
        <div className="home">
            <header className="home-header">
                <div className="basic-head">
                    <img className="logo" src="../../../public/logo-block.gif" alt="logo" />
                    <h3>Hello, {userLogged ? userLogged.name : 'world'}</h3>
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
                    </article>)}  */}
 
                </section>
            </main>

            <footer className="home-nav">
                <div className="basic-nav">
                    <button type="button" className="basic-button" onClick={handleCreateModal}>New Panel</button>
                    <button type="button" className="basic-button" onClick={handleLogout}>Salir</button>
                </div>
            </footer>

            {modal === 'create-modal' && <PanelCreate onCreatedPanel={handleRefreshPanelsExitModal} onExitModal={handleExitModal} />}
            {/* {modal === 'edit-modal' && <PanelEdit onUpdatedPanel={handleRefreshPanelsExitModal} onExitModal={handleExitModal} idPanel={idPanel} />}
            {modal === 'delete-modal' && <PanelDelete onDeletedPanel={handleRefreshPanelsExitModal} onExitModal={handleExitModal} idPanel={idPanel} />} */}
        </div>
    )
}
export default Home