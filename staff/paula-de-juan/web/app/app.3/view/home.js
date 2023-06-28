const homeView = document.querySelector('.home-view');
const homeCreatePostModal = homeView.querySelector('.home-create-post-modal')
const homeLogoutButton = homeView.querySelector('.home-logout-button')
const homeCreatePostForm = homeView.querySelector('.home-create-post-form')
const homeMain = homeView.querySelector('.home-main')
const homePosts = homeView.querySelector('.home-posts')
const homeEditPostModal = homeView.querySelector('.home-edit-post-modal') 
const homeEditPostForm = homeEditPostModal.querySelector('.home-edit-post-form')
const homeDeletePostModal = homeView.querySelector('.home-delete-post-modal')
const homeDeletePostForm = homeDeletePostModal.querySelector('.home-delete-post-form')

homeLogoutButton.onclick = function () {
    homeView.classList.add('off')
    loginView.classList.remove('off')
}

const homeCreatePostButton = homeView.querySelector('.home-create-post-button')

homeCreatePostButton.onclick = function () {
    homeCreatePostModal.classList.remove('off')
}

const homeCreatePostCancelButton = homeCreatePostForm.querySelector('.home-create-post-cancel-button')

homeCreatePostCancelButton.onclick = function (event) {
    event.preventDefault()

    homeCreatePostForm.reset()

    homeCreatePostModal.classList.add('off')
}


homeCreatePostForm.onsubmit = function (event) {
    event.preventDefault()

    const imageInput = homeCreatePostForm.querySelector('#create-post-url')
    const image = imageInput.value

    const textInput = homeCreatePostForm.querySelector('#create-post-text')
    const text = textInput.value

    const result = createPost(userId, image, text)

    if (result === false)
        alert('Cannot create post')
    else {
        homeCreatePostForm.reset()

        homeCreatePostModal.classList.add('off')

        renderPosts()
           
    }
}


const homeEditPostCancelButton = homeEditPostForm.querySelector('.home-edit-post-cancel-button')

homeEditPostCancelButton.onclick = function (event) {
    event.preventDefault()

    homeEditPostForm.reset()

    homeEditPostModal.classList.add('off')
}

homeEditPostForm.onsubmit = function (event) {
    event.preventDefault()

    const idInput = homeEditPostForm.querySelector('#edit-post-id')
    const postId = parseInt(idInput.value)

    const imageInput = homeEditPostForm.querySelector('#edit-post-url')
    const image = imageInput.value

    const textInput = homeEditPostForm.querySelector('#edit-post-text')
    const text = textInput.value

    const result = updatePost(postId, image, text)

    if (result === false){
        alert('Cannot update post')        
    } else {
        homeEditPostModal.classList.add('off')

        renderPosts()
    }
}

// Delete

const homeDeletePostCancelButton = homeDeletePostForm.querySelector('.home-delete-post-cancel-button')

homeDeletePostCancelButton.onclick = function (event) {
    event.preventDefault()

    homeDeletePostForm.reset()

    homeDeletePostModal.classList.add('off')
}

homeDeletePostForm.onsubmit = function (event) {
    event.preventDefault()

    const idInput = homeDeletePostForm.querySelector('#delete-post-id')
    const postId = parseInt(idInput.value)

    const result = deletePost(postId)

    if (result === false){
        alert('Cannot delete post')        
    } else {
        homeDeletePostModal.classList.add('off')

        renderPosts()
    }
}