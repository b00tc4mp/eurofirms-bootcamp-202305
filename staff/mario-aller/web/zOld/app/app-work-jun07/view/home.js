const homeView = document.querySelector('.home-view')
const homeCreatePostModal = homeView.querySelector('.home-create-post-modal')
const homeLogoutButton = homeView.querySelector('.home-logout-button')
const homeCreatePostForm = homeView.querySelector('.home-create-post-form')
const homeMain = homeView.querySelector('.home-main')
const homePosts = homeMain.querySelector('.home-posts')

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

    if (result === false)
        alert('Cannot create post')
    else {
        homeCreatePostForm.reset()

        homeCreatePostModal.classList.add('off')

        renderPosts()
    }
}