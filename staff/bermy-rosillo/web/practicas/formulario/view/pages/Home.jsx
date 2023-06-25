function Home(props){
    console.log('Home->render')
    const user=retrieveUser(userId)
    const posts = retrievePosts()
   //------------------------------- 
    const handleLogout= event=>{

        props.onLogout()
    }
    return  <div className="home-view ">
        <header className="home-header">
            <h1 className="home-title">Welcome,{user.name} </h1>
            <button className="home-logout-button" onClick={handleLogout}>Logout </button>
        </header>

        <main className="home-main">
            <section className="home-posts">
               {posts.map(post=><article key={post.id}>
                    
                    <h2>{post.author.name}</h2>
                    <img className='home-post-image' src={post.image} alt={post.text}></img>
                    <p>{post.text}</p>

               </article>
               )}
            </section>
        </main>

        <footer className="home-footer">
            <button className="home-create-post-button">Add new post</button>
        </footer>

    </div>
    
   }
    