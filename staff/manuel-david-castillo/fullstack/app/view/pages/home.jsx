function Home(props) {
  const [modal, setModal] = React.useState(null)

  const [postId, setPostId] = React.useState(null)

  const [user, setUser] = React.useState(null)

  const [posts, setPosts] = React.useState([])


  React.useEffect(() => {
    try {
      Promise.all([retrieveUser(context.token), retrievePosts(context.token)])
        .then(([user, posts]) => {
          setUser(user)
          setPosts(posts)
        })
        .catch(error => alert(error.message))
    } catch (error) {
      alert(error.message)
    }
  }, [])

  const handleLogout = () => {
    context.token = null

    props.onLogout()
  }

  const handleCreatePostModal = () => setModal("create-post-modal")
  const handleCancelCreatePostModal = () => setModal("")
  const handleCreatePost = () => {
    try {
      retrievePosts(context.token)
        .then((posts) => {
          setModal(null)
          setPosts(posts)
        })
        .catch(() => {
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

  const handleEditPostModal = postId => {
    setPostId(postId)
    setModal("edit-post-modal")
  }

  const handleCancelEditPostModal = () => setModal(null)

  const handleUpdatePost = () => {
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
            /*
            const copyOfPosts = JSON.parse(JSON.stringify(posts))

            const post = copyOfPosts.find(post => post.id === postId)

            post.fav = !post.fav

            return copyOfPosts
            */

            /*
            const posts2 = []

            for (const key in posts)
              posts2[key] = posts[key]
            */

            //const posts2 = Array.from(posts)

            const posts2 = [...posts]

            //const post = posts2.find(post => post.id === postId)

            const index = posts2.findIndex(post => post.id === postId)
            const post = posts2[index]

            /*
            const post2 = {}

            for (const key in post)
              post2[key] = post[key]
            */

            const post2 = { ...post }

            post2.fav = !post2.fav

            //posts2.splice(index, 1, posts2)
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

    /* try {
      toggleFavPost(context.token, postId)
        .then(() => {
          retrievePosts(context.token)
            .then((posts) => {
              setPosts(posts)
            })
            .catch((error) => {
              alert(error.message)
            })
        })
    } catch (error) {
      alert(error.message)
    } */
  }

  const userId = extractUserIdFromToken(context.token)

  return <div className="home-view">
    <header>
      <h2 className="h2-home">Hello {user ? user.name : ' world'}</h2>
      <nav>
        <button onClick={handleLogout} className="button-logout">Logout</button>
      </nav>
    </header>

    <main className="home">
      <section className="all-posts">
        {posts.map(post => <article key={post.id} className="post">
          <div className="nameDiv">
            <p className="name-post">{post.author.name}</p>
          </div>
          <img className="img-post" src={post.image} alt={post.text} />
          <p className="text-post">{post.text}</p>
          <div className="div-button-edit-delete">
            {userId === post.author.id && <button onClick={() => handleEditPostModal(post.id)} className="editButton">Edit</button>}
            {userId === post.author.id && <button onClick={() => handleDeletePostModal(post.id)} className="deleteButton">Delete</button>}
            <button onClick={() => handletoggleFavPost(post.id)} className="favButton">{post.fav ? '★' : '☆'}</button>
          </div>
        </article>)}
      </section>
    </main>

    <footer>
      <button onClick={handleCreatePostModal} className="button-new-post">New Post</button>
    </footer>

    {modal === "create-post-modal" && <CreatePostModal onCreatePost={handleCreatePost} onHideCreatePost={handleCancelCreatePostModal} />}
    {modal === "delete-post-modal" && <DeletePostModal postId={postId} onDeletePost={handleDeletePost} onHideDeletePost={handleCancelDeletePostModal} />}
    {modal === "edit-post-modal" && <EditPostModal postId={postId} onUpdatePost={handleUpdatePost} onHideEditPost={handleCancelEditPostModal} />}

  </div>
}