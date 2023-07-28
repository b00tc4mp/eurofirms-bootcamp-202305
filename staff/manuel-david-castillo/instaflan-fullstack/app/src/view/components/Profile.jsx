import { useEffect, useState } from "react";

import { EditUserModal } from "../modals/EditUserModal";
import { DeletePostModal } from "../modals/DeletePostModal"
import { EditPostModal } from "../modals/EditPostModal"

import { retrieveUser } from "../../logic/retrieveUser";
import { retrieveUserById } from "../../logic/retrieveUserById";
import { context } from "../../logic/helpers/context";
import { retrievePostsOfUser } from "../../logic/retrievePostsOfUser";
import { extractUserIdFromToken } from "../../logic/helpers/extractUserIdFromToken";

export function Profile(props) {
    const userId = extractUserIdFromToken(context.token)

    const [modal, setModal] = useState(null)

    const [user, setUser] = useState(null)
    const [userProfile, setUserProfile] = useState(null)

    const [posts, setPosts] = useState(null)
    const [postId, setPostId] = useState(null)

    useEffect(() => {
        try {
            Promise.all([retrieveUser(context.token),
            retrieveUserById(context.token, props.userIdProfile),
            retrievePostsOfUser(context.token, props.userIdProfile)])
                .then(([user, userProfile, posts]) => {
                    setUser(user)
                    setUserProfile(userProfile)
                    setPosts(posts)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [userProfile])

    const handleEditUserModal = () => setModal('edit-user-modal')
    const handleCancelEditUserModal = () => setModal(null)
    const handleEditUser = () => {
        try {
            retrieveUserById(context.token, props.userIdProfile)
                .then(user => {
                    setModal(null)
                    setUserProfile(user)
                })
                .catch(() => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
        setModal(null)
    }

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

    return <section className="profile">
        <div className="profile-image-name-button">
            <div className="profile-image-name">
                <img className="profile-image-post" src={userProfile?.image} alt={userProfile?.name} />
                <h3 className="name-post">{userProfile?.name}</h3>
            </div>
            {user?.name === userProfile?.name && <button onClick={handleEditUserModal} className="button button-modal edit-profile-button">Edit profile</button>}
        </div>
        <p className="description-profile">{userProfile?.description}</p>
        {user?.name === userProfile?.name && <div className="two-buttons-profile">
            <button className="button button-modal">My posts</button>
            <button className="button button-modal">My favorite posts</button>
        </div>}
        <section className="all-posts">
            {posts?.map(post => <article key={post.id} className="post">
                <div className="header-post">
                    <div className="nameImageDiv">
                        <img className="profile-image-post" src={post.author.image} alt={post.author.name} />
                        <a onClick={() => handleProfile(post.author.id)} href="#" className="name-post">{post.author.name}</a>
                    </div>
                    <button onClick={() => handletoggleFavPost(post.id)} className="button favButton">{post.fav ? '🤍' : '♡'}</button>
                </div>
                <img className="img-post" src={post.image} alt={post.text} />
                <p className="text-post">{post.text}</p>
                <div className="div-button-edit-delete">
                    {userId === post.author.id && <button onClick={() => handleEditPostModal(post.id)} className="button button-modal">Edit</button>}
                    {userId === post.author.id && <button onClick={() => handleDeletePostModal(post.id)} className="button button-modal">Delete</button>}
                </div>
            </article>)}
        </section>

        {modal === "delete-post-modal" && <DeletePostModal postId={postId} onDeletePost={handleDeletePost} onHideDeletePost={handleCancelDeletePostModal} />}
        {modal === "edit-post-modal" && <EditPostModal postId={postId} onEditPost={handleEditPost} onHideEditPost={handleCancelEditPostModal} />}
        {modal === "edit-user-modal" && <EditUserModal onEditUser={handleEditUser} onHideEditUser={handleCancelEditUserModal} />}
    </section>
}