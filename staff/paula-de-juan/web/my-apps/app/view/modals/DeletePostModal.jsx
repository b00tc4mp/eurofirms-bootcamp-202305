function DeletePostModal(){




    return <div className="home-delete-post-modal">
    <div className="home-delete-post-container">
      <h2>Delete post</h2>
      <form className="home-delete-post-form">

        <input type="hidden" id="delete-post-id" />

        <button type="submit">Delete</button>
        <button className="home-delete-post-cancel-button">Cancel</button>
      </form>
    </div>
  </div>
}