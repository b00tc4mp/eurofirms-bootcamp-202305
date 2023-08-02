import { useEffect, useState } from "react"

import { retrievePostsNotFollowed } from "../../logic/retrievePostsNotFollowed"
import { retrieveUsersNotFollowed } from "../../logic/retrieveUsersNotFollowed"
import { toggleFavPost } from "../../logic/toggleFavPost"
import { toggleFollowUser } from "../../logic/toggleFollowUser"

import context from "../../context"

export function Explorer() {
    const [users, setUsers] = useState()
    const [posts, setPosts] = useState()

    const navigate = context.navigate

    useEffect(() => {
        try {
            Promise.all([retrieveUsersNotFollowed(context.token),
            retrievePostsNotFollowed(context.token)])
                .then(([users, posts]) => {
                    setUsers(users)
                    setPosts(posts)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleProfile = (event, userIdProfile) => {
        event.preventDefault()
        navigate(`/profile/${userIdProfile}/posts`)
    }

    function handleFollowUser(userIdProfile) {
        try {
            toggleFollowUser(context.token, userIdProfile)
                .then(() => {
                    setUsers(users => {
                        const users2 = [...users]

                        const index = users2.findIndex(user => user.id === userIdProfile)

                        users2.splice(index, 1)

                        return users2
                    })
                })
                .catch((error) => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    function handleUpdateUsers() {
        try {
            retrieveUsersNotFollowed(context.token)
                .then(users => {
                    setUsers(users)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    function handleUpdatePosts() {
        try {
            retrievePostsNotFollowed(context.token)
                .then(posts => {
                    setPosts(posts)
                })
                .catch(error => alert(error.message))
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

    return <section className="explorer">
        <article className="users-not-followed">
            <h2 className="h2-explorer">Maybe you know</h2>
            {users?.map(user => <article key={user.id} className="user">
                <div className="user-img-a">
                    <img className="profile-image-post" src={user.image} alt={user.name} />
                    <a onClick={() => handleProfile(event, user.id)} className="name-post">{user.name}</a>
                </div>
                <button onClick={() => handleFollowUser(user.id)} className="button button-modal edit-profile-button">Follow</button>
            </article>)}
            <button onClick={handleUpdateUsers} className="button update-button">Update users</button>
        </article>
        <article className="posts-users-not-followed">
            <h2 className="h2-explorer">You might be interested</h2>
            {posts?.map(post => <article key={post.id} className="post">
                <div className="header-post">
                    <div className="nameImageDiv">
                        <img className="profile-image-post" src={post.author.image} alt={post.author.name} />
                        <a onClick={(event) => handleProfile(event, post.author.id)} className="name-post">{post.author.name}</a>
                    </div>
                    <button onClick={() => handletoggleFavPost(post.id)} className="button favButton">{post.fav ? '🤍' : '♡'}</button>
                </div>
                <img className="img-post" src={post.image} alt={post.text} />
                <p className="text-post">🤍{post.likes}</p>
                <p className="text-post">{post.text}</p>
            </article>)}
            <button onClick={handleUpdatePosts} className="button update-button">Update posts</button>
        </article>
    </section>
}