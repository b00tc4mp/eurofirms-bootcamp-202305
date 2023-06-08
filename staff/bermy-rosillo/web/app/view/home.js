//home page
const homeView = document.querySelector('.home-view')
const homeCreatePostModal = homeView.querySelector('.home-create-post-modal')
const homeLogoutButton = homeView.querySelector('.home-logout-button')
const homeCreatePostForm = homeView.querySelector('.home-create-post-form')
const homeMain = homeView.querySelector('.home-main')
const homePosts = homeMain.querySelector('.home-posts')
const homeEditPostModal = homeView.querySelector('.home-edit-post-modal')
const homeEditPostForm = homeEditPostModal.querySelector('.home-edit-post-form')


homeLogoutButton.onclick = function () {
    userId = null
   
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

    if (result === false) {
        alert('Cannot create post')
    } else {
        homeCreatePostForm.reset()
        homeCreatePostModal.classList.add('off')
        renderPost() 
        
    }
}

const homeEditPostCancelButton = homeEditPostForm.querySelector('.home-edit-post-cancel-button')

homeEditPostCancelButton.onclick=function(event){
    event.preventDefault();

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

    if (result === false)
        alert('Cannot update post')
    else {
        renderPosts()

        homeEditPostModal.classList.add('off')
    }
}