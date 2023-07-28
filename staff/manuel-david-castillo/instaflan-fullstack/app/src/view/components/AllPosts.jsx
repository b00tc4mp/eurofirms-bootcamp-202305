import { useEffect, useState } from "react"

import { context } from "../../logic/helpers/context"
import { extractUserIdFromToken } from "../../logic/helpers/extractUserIdFromToken"

import { retrievePosts } from "../../logic/retrievePosts"
import { toggleFavPost } from "../../logic/toggleFavPost"


import { DeletePostModal } from "../modals/DeletePostModal"
import { EditPostModal } from "../modals/EditPostModal"

export function AllPosts(props) {
    const userId = extractUserIdFromToken(context.token)

    const [modal, setModal] = useState(null)

    const [posts, setPosts] = useState([])

    const [postId, setPostId] = useState([])

    useEffect(() => {
        try {
            retrievePosts(context.token)
                .then((posts) => {
                    setPosts(posts)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleEditPostModal = postId => {
        setPostId(postId)
        setModal("edit-post-modal")
    }

    const handleCancelEditPostModal = () => setModal(null)

    const handleEditPost = () => {
        try {
            retrievePosts(context.token)
                .then(posts => {
                    setPosts(posts)
                    setModal(null)
                    setPostId(null)
                })
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleDeletePostModal = postId => {
        setPostId(postId)
        setModal("delete-post-modal")
    }

    const handleCancelDeletePostModal = () => setModal(null)

    const handleDeletePost = () => {
        try {
            retrievePosts(context.token)
                .then(posts => {
                    setPosts(posts)
                    setModal(null)
                    setPostId(null)
                })
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

    function handletoggleFavPost(postId) {
        try {
            toggleFavPost(context.token, postId)
                .then(() => {
                    setPosts(posts => {

                        const posts2 = [...posts]

                        const index = posts2.findIndex(post => post.id === postId)
                        const post = posts2[index]

                        const post2 = { ...post }

                        if (post2.fav) {
                            post2.likes--
                        } else {
                            post2.likes++
                        }

                        post2.fav = !post2.fav

                        posts2[index] = post2

                        return posts2
                    })
                })
                .catch((error) => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleProfile = (userIdProfile) => {
        props.onHandleProfile(userIdProfile)
    }

    return <section className="all-posts">
        {posts.map(post => <article key={post.id} className="post">
            <div className="header-post">
                <div className="nameImageDiv">
                    <img className="profile-image-post" src={post.author.image} alt={post.author.name} />
                    <a onClick={() => handleProfile(post.author.id)} href="#" className="name-post">{post.author.name}</a>
                </div>
                <button onClick={() => handletoggleFavPost(post.id)} className="button favButton">{post.fav ? '🤍' : '♡'}</button>
            </div>
            <img className="img-post" src={post.image} alt={post.text} />
            <p className="text-post">🤍{post.likes}</p>
            <p className="text-post">{post.text}</p>
            <div className="div-button-edit-delete">
                {userId === post.author.id && <button onClick={() => handleEditPostModal(post.id)} className="button button-modal">Edit</button>}
                {userId === post.author.id && <button onClick={() => handleDeletePostModal(post.id)} className="button button-modal">Delete</button>}
            </div>
        </article>)}

        {modal === "delete-post-modal" && <DeletePostModal postId={postId} onDeletePost={handleDeletePost} onHideDeletePost={handleCancelDeletePostModal} />}
        {modal === "edit-post-modal" && <EditPostModal postId={postId} onEditPost={handleEditPost} onHideEditPost={handleCancelEditPostModal} />}
    </section>
}