import { useEffect, useState } from "react"
import { context } from "../../logic/helpers/context"
import { retrievePosts } from "../../logic/retrievePosts"
import { extractUserIdFromToken } from "../../logic/helpers/extractUserIdFromToken"

export function AllPosts(props) {
    const userId = extractUserIdFromToken(context.token)

    const [posts, setPosts] = useState([])

    useEffect(() => {
        try {
            retrievePosts(context.token)
                .then((posts) => {
                    setPosts(posts)
                    console.log(posts)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [props.posts])

    return <section className="all-posts">
        {posts.map(post => <article key={post.id} className="post">
            <div className="header-post">
                <div className="nameImageDiv">
                    <img className="profile-image-post" src={post.author.image} alt={post.author.name} />
                    <p className="name-post">{post.author.name}</p>
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
}