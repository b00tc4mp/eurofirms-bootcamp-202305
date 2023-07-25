import { useState, useEffect } from "react"
import context from '../../context'
import retrieveUser from '../../logic/retrieveUser'
import retrievePosts from '../../logic/retrievePosts'
import CreatePostModal from '../modals/CreatePostModal'
import DeletePostModal from '../modals/DeletePostModal'
import EditPostModal from '../modals/EditPostModal'
// import extractUserIdFromToken from '../helpers/extractUserIdFromToken'


function Home(props) {
    console.log('Home -> render')

    const modalState = useState(null)
    const modal = modalState[0]
    const setModal = modalState[1]

    const postIdState = useState(null)
    const postId = postIdState[0]
    const setPostId = postIdState[1]

    const userState = useState(null)
    const user = userState[0]
    const setUser = userState[1]

    const postsState = useState(null)
    const posts = postsState[0]
    const setPosts = postsState[1]

    useEffect(() => {
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

    const handleLoggedOut = () => {
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
        } catch (error){
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

return <div className="home-view">
        <header>
            <h1 className="home-title">Hello, { user ? user.name : 'World'}!</h1>
            <button className="home-logout-button" onClick={handleLoggedOut}>Logout</button>
        </header>

        <main className="home-main">
            <section className="home-posts">
                {posts && posts.map(post =>
                 <article key={post.id} className="posts-container">
                    <h2>{post.author.name}</h2>
                    <img className="post-image" src={post.image} alt={post.text}></img>
                    <p>{post.text}</p>
                    {post.author.id === context.userId && <>
                        <button onClick={() => handleEditPostClick(post.id)} >Edit</button>
                        <button onClick={() => handleDeletePostClick(post.id)} >Delete</button>
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
export default Home