import { useState, useEffect } from 'react'
import extractUserIdFromToken from '../helpers/extractUserIdFromToken'
import context from '../../context'
import retrieveUser from '../../logic/retrieveUser'
import retrievePosts from '../../logic/retrievePosts'
import CreatePostModal from '../modals/CreatePostModal'
import EditPostModal from '../modals/EditPostModal'
import DeletePostModal from '../modals/DeletePostModal'
import toggleFavPost from '../../logic/toggleFavPost'

function Home({ onLoggedOut }) {
    console.log('Home -> render')

    const [modal, setModal] = useState(null)
    const [postId, setPostId] = useState(null)
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState(null)

    useEffect(() => {
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
    }, [])

    const handleLogoutClick = () => {
        context.token = null

        onLoggedOut()
    }

    const handleCreatePostClick = () => setModal('create-post')

    const handlePostCreated = () => {
        try {
            retrievePosts(context.token)
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

    const handleDeletePostClick = postId => {
        setPostId(postId)
        setModal('delete-post')
    }

    const handleDeletePostCancelled = () => {
        setModal(null)
        setPostId(null)
    }

    const handlePostDeleted = () => {
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

    const handleTogglePostClick = postId => {
        try {
            toggleFavPost(context.token, postId)
                .then(() => retrievePosts(context.token))
                .then(posts => setPosts(posts))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const userId = extractUserIdFromToken(context.token)

    return <div className="home-view">
        <header className="home-header">
            <h1 className="home-title">Hello, {user ? user.name : 'World'}!</h1>

            <button className="home-logout-button" onClick={handleLogoutClick}>Logout</button>
        </header>

        <main className="home-main">
            <section className="home-posts">
                {posts && posts.map(post => <article key={post.id} className="home-post">
                    <h2>{post.author.name}</h2>

                    <img className="home-post-image"
                        src={post.image}
                        alt={post.text}></img>

                    <p>{post.text}</p>

                    {post.author.id === userId && <>
                        <button onClick={() => handleEditPostClick(post.id)}>Edit</button>
                        <button onClick={() => handleDeletePostClick(post.id)}>Delete</button>
                    </>}

                    <button onClick={() => handleTogglePostClick(post.id)}>{post.fav ? 'Unsave' : 'Save'}</button>
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

export default Home