function DeletePostModal(props){
    const handleCancelDeletePostModal =()=> props.onDeletePostCancelled()

    const handleDeletePost =event=>{
        event.preventDefault()
    
        const result=deletePost(props.postId)
    
        if(!result){
            alert('You cannot delete a post ')
            return
        }
        props.onDeletePost()
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