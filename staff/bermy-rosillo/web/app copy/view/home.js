//home page
var homeView = document.querySelector('.home-view')
var homeCreatePostModal = homeView.querySelector('.home-create-post-modal')
var homeLogoutButton = homeView.querySelector('.home-logout-button')
var homeCreatePostForm = homeView.querySelector('.home-create-post-form')
var homeMain = homeView.querySelector('.home-main')
var homePosts = homeMain.querySelector('.home-posts')
var homeEditPostModal = homeView.querySelector('.home-edit-post-modal')
var homeEditPostForm = homeEditPostModal.querySelector('.home-edit-post-form')


homeLogoutButton.onclick = function () {
    userId = null
   
    homeView.classList.add('off')
    loginView.classList.remove('off')
}

var homeCreatePostButton = homeView.querySelector('.home-create-post-button')

homeCreatePostButton.onclick = function () {
    homeCreatePostModal.classList.remove('off')
}

var homeCreatePostCancelButton = homeCreatePostForm.querySelector('.home-create-post-cancel-button')

homeCreatePostCancelButton.onclick = function (event) {
    event.preventDefault()

    homeCreatePostForm.reset()

    homeCreatePostModal.classList.add('off')
}

homeCreatePostForm.onsubmit = function (event) {
    event.preventDefault()

    var imageInput = homeCreatePostForm.querySelector('#create-post-url')
    var image = imageInput.value

    var textInput = homeCreatePostForm.querySelector('#create-post-text')
    var text = textInput.value

    var result = createPost(userId, image, text)

    if (result === false) {
        alert('Cannot create post')
    } else {
        homeCreatePostForm.reset()
        homeCreatePostModal.classList.add('off')
        renderPost() 
        
    }
}

var homeEditPostCancelButton = homeEditPostForm.querySelector('.home-edit-post-cancel-button')

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