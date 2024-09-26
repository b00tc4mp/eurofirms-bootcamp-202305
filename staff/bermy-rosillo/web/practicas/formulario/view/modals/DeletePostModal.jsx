function DeletePostModal(props){
   
    return <div className="home-delete-post-modal">
         <div className="home-delete-post-container">
             <h2>delete post</h2>

             <form className="home-delete-post-form">
                 <input type="hidden" id="delete-post-id"></input>
                 <p>Do you want to delete this post?</p>
                 
                 <button className="home-delete-post-button"  type="submit">Delete</button>
                 <button className="home-delete-post-cancel-button">Cancel</button>
             </form>
         </div>
     </div>
}