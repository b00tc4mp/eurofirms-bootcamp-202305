function Home() {
   return <div className="home-view">
      <header>
        <h2 className="h2-home">My posts</h2>
        <nav>
          <button className="button-logout">Logout</button>
        </nav>
      </header>

      <main className="home">
        <section className="all-posts"></section>

        <div className="container-new-post off">
          <form className="form-new-post" action="">
            <h3 className="h3-new-post">New post</h3>
            <p className="p-form">Image</p>
            <input id="url-image-new-post" type="url" />
            <p className="p-form">Text</p>
            <textarea
              id="textarea-new-post"
              name=""
              cols="25"
              rows="5"
            ></textarea>
            <div className="buttons-create-cancel">
              <button type="submit" className="button-create-new-post">
                Create
              </button>
              <button type="button" className="button-cancel-new-post">
                Cancel
              </button>
            </div>
          </form>
        </div>

        <div className="container-edit-post off">
          <form className="form-edit-post" action="">
            <input type="hidden" id="edit-post-id" />
            <h3 className="h3-edit-post">Edit post</h3>
            <p className="p-form">Image</p>
            <input id="url-image-edit-post" type="url" />
            <p className="p-form">Text</p>
            <textarea
              id="textarea-edit-post"
              name=""
              cols="25"
              rows="5"
            ></textarea>
            <div className="buttons-create-cancel">
              <button type="submit" className="button-create-edit-post">
                Edit
              </button>
              <button type="button" className="button-cancel-edit-post">
                Cancel
              </button>
            </div>
          </form>
        </div>

        <div className="container-delete-post off">
          <form className="form-delete-post" action="">
            <input type="hidden" id="delete-post-id" />
            <h3 className="h3-delete-post">Delete post</h3>
            <p>Are you sure to delete this post?</p>
            <div className="buttons-create-cancel">
              <button type="submit" className="button-create-delete-post">
                Delete
              </button>
              <button type="button" className="button-cancel-delete-post">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>

      <footer>
        <button className="button-new-post">New Post</button>
      </footer>
    </div>
}