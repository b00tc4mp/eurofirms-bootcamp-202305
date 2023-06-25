function Home(props) {
  console.log('Home -> render')

  const user = retrieveUser(context.userId)

  const posts = retrievePosts()

  const onLoggedOut = function () {
      context.userId = null
      props.onLoggedOut()
  }

  return <div className="home-view">
    <header className="home-header">
      <h1 className="home-title">Hello, {user.name}!</h1>
      <button className="home-logout-button" onClick={onLoggedOut} >Logout</button>
    </header>
    <main className="home-main">
      <section className="home-posts">
        {posts.map(post =>
          <article className="posts-container">
            <h2>{post.author.name}</h2>
            <img className="home-post-image" src={post.image} alt={post.text}>
            </img>
            <p>{post.text}</p>
            {post.author.id === context.userId && <>
              <button>Edit</button>
              <button>Delete</button>
            </>}
          </article>)}
      </section>
    </main>
    <footer className="home-footer">
      <button className="home-create-post-button">+</button>
    </footer>
  </div>
}