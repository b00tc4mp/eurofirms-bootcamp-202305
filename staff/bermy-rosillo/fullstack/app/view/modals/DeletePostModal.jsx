function DeletePostModal(props){
    const handleCancelDeletePostModal =()=> props.onDeletePostCancelled()

    const handleDeletePost =event=>{
        event.preventDefault()
        
        try{
            deletePost(context.userId,props.postId)
            .then(()=>{
                props.onDeletePost()
            })
            .catch((error)=>alert(error.message))

        }catch(error){
            alert(error.message)
        }
    
        
    }


     return <div className="home-delete-post-modal">
         <div className="home-delete-post-container">
             <h2>delete post</h2>

             <form className="home-delete-post-form">
                 <input type="hidden" id="delete-post-id"></input>
                 <p>Do you want to delete this post?</p>
                 
                 <button onClick={handleDeletePost} className="home-delete-post-button"  type="submit">Delete</button>
                 <button onClick={handleCancelDeletePostModal} className="home-delete-post-cancel-button">Cancel</button>
             </form>
         </div>
     </div>
}