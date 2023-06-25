function EditPostModal(){




    return <div className="home-edit-post-modal">
    <div className="home-edit-post-container">
      <h2>Edit post</h2>
      <form className="home-edit-post-form">
        <input type="hidden" id="edit-post-id" />

        <label htmlFor="edit-post-url">Image</label>
        <input id="edit-post-url" type="url" />

        <label htmlFor="edit-post-text">Text</label>
        <textarea id="edit-post-text"></textarea>

        <button type="submit">Save changes</button>
        <button className="home-edit-post-cancel-button">Cancel</button>
      </form>
    </div>
  </div>
}