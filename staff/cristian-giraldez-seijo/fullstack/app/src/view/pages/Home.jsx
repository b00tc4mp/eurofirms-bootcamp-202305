/* The code is defining a React functional component called "Home". It imports various dependencies
such as useState and useEffect from the 'react' library, as well as other components and functions
from different files. */
import { useState, useEffect } from 'react'
import context from '../../context'
import retrieveUser from '../../logic/retrieveUser'
import retrievePosts from '../../logic/retrievePosts'
// import extractUserIdFromToken from '../helpers/extractUserIdFromToken'
import CreatePostModal from '../modals/CreatePostModal'
import EditPostModal from '../modals/EditPostModal'
import DeletePostModal from '../modals/DeletePostModal'
function Home(props) {
    console.log('home->render')

    const [modal, setModal] = useState(null)
    const [postId, setPostId] = useState(null)
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        try {
            retrieveUser(context.token)
                .then(user => setUser(user))
                .catch(error => alert(error.message))
        } catch (error) { alert(error.message) }

        try {
            retrievePosts(context.token)
                .then(posts => setPosts(posts))
                .catch(error => alert(error.message))
        } catch (error) { alert(error.message) }
    }, [])

    const handleLogoutClick = () => {
        context.token = null
        props.onLoggedOut()
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
        } catch (error) { alert(error.message) }
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
        } catch (error) { alert(error.message) }
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
        } catch (error) { alert(error.message) }
    }

    return <div className="home-view">
        <header className="home-header">
            <h1 className="home-title">Hello, {user ? user.name : 'there'}!</h1>

            <button className="home-logout-button" onClick={handleLogoutClick}>Logout</button>
        </header>

        <main className="home-main">
            <section className="home-posts">
                {posts && posts.map(post => {
                    return <article key={post.id}>
                        <h2>{post.author.name}</h2>
                        <img src={
                            post.image
                        } alt={post.text} />
                        <p>{post.text}</p>
                        {post.author.id === context.token && <>
                            <button onClick={() => handleEditPostClick(post.id)}>Edit</button>
                            <button onClick={() => handleDeletePostClick(post.id)}>Delete</button>
                        </>}
                    </article>
                })}
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