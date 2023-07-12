function Home(props){
    console.log('Home->render')

    const viewModal = React.useState()
    const modal=viewModal[0]
    const setModal=viewModal[1]

    const postIdState = React.useState()
    const postId=postIdState[0]
    const setPostId=postIdState[1]

    const user = retrieveUser(context.userId)
    const posts = retrievePosts()
    
    const handleLoggedOut =()=>{
        context.userId=null
        
        props.logoutClick()
    }

    const handleCreatePostModal=()=>setModal('create-post-modal')
    const handleCreatePostCancelled=()=>setModal(null)
    const handleCreatedPost=()=>setModal(null)


    const handleEditPostModal=postId=>{
        setPostId(postId)

        setModal('edit-post-modal')
    }
    const handleEditPostCancelled=()=>setModal(null)
    const handleEditPost = () =>{
        setModal(null)
        setPostId(null)
    }

    const handleDeletePostModal=postId=>{
        setPostId(postId)

        setModal('delete-post-modal')
    }    
    const handleDeletePostCancelled=()=>setModal(null)
    const handleDeletePost = () =>{
        setModal(null)
        setPostId(null)
    }
    
    
    //--------------------------------------------

    return  <div className="home-view ">
        <header className="home-header">
            <h1 className="home-title">Welcome, {user ? user.name : 'User'} </h1>
            <button className="home-logout-button" onClick={handleLoggedOut}>Logout </button>
        </header>

        <main className="home-main">
            <section className="home-posts">
               {posts.map(post=>{
                return <article key={post.id}>
                    <h2>{post.author.name}</h2>
                    <img className='home-post-image' src={post.image} alt={post.text}></img>
                    <p>{post.text}</p>
                    {post.author.id === context.userId && 
                    <>
                    <button onClick ={()=>handleEditPostModal(post.id)}>Edit</button>
                    <button onClick ={()=>handleDeletePostModal(post.id)}>Delete</button>
                    </>
                    }
                </article>
               })}
            </section>
        </main>

        <footer className="home-footer">
            <button className="home-create-post-button" onClick={handleCreatePostModal}>Add new post</button>
        </footer>

        {modal === 'create-post-modal' && <CreatePostModal onCreatePost={handleCreatedPost} onCreatePostCancelled={handleCreatePostCancelled} />}

        {modal === 'edit-post-modal' && <EditPostModal postId = {postId} onEditPostCancelled={handleEditPostCancelled} onEditPost = {handleEditPost}/>}

        {modal === 'delete-post-modal' && <DeletePostModal postId = {postId} onDeletePostCancelled={handleDeletePostCancelled} onDeletePost={handleDeletePost}/>}
        

    </div>
    
   }
    