// globals

let userId = null

// register

const registerView = document.querySelector('.register-view')
const registerForm = registerView.querySelector('.register-form')

registerForm.onsubmit = function (event) {
    event.preventDefault()

    const nameInput = registerForm.querySelector('#register-name')
    const name = nameInput.value

    const emailInput = registerForm.querySelector('#register-email')
    const email = emailInput.value

    const passwordInput = registerForm.querySelector('#register-password')
    const password = passwordInput.value

    const result = registerUser(name, email, password)

    if (result === false)
        alert('User already exists')
    else {
        registerForm.reset()

        registerView.classList.add('off')
        loginView.classList.remove('off')
    }
}

const registerLoginLink = registerView.querySelector('.register-login-link')

registerLoginLink.onclick = function (event) {
    event.preventDefault()

    registerView.classList.add('off')
    loginView.classList.remove('off')
}

// login

const loginView = document.querySelector('.login-view')
const loginForm = loginView.querySelector('.login-form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    const emailInput = loginForm.querySelector('#login-email')
    const email = emailInput.value

    const passwordInput = loginForm.querySelector('#login-password')
    const password = passwordInput.value

    const result = authenticateUser(email, password)

    if (result === false)
        alert('Wrong credentials')
    else {
        userId = result

        loginForm.reset()

        const user = retrieveUser(email)

        if (user === null)
            alert('User not found')
        else {
            loginView.classList.add('off')

            const homeTitle = homeView.querySelector('.home-title')
            homeTitle.innerText = 'Hello, ' + user.name + '!'

            renderPosts()

            homeView.classList.remove('off')
        }
    }
}

const loginRegisterLink = loginView.querySelector('.login-register-link')

loginRegisterLink.onclick = function (event) {
    event.preventDefault()

    loginView.classList.add('off')
    registerView.classList.remove('off')
}

// home

const homeView = document.querySelector('.home-view')
const homeCreatePostModal = homeView.querySelector('.home-create-post-modal')
const homeLogoutButton = homeView.querySelector('.home-logout-button')
const homeCreatePostForm = homeCreatePostModal.querySelector('.home-create-post-form')
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

    if (result === false)
        alert('Cannot update post')
    else {
        renderPosts()

        homeEditPostModal.classList.add('off')
    }
}

// helpers

function renderPosts() {
    homePosts.innerHTML = ''

    const posts = retrievePosts()

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i]

        const author = document.createElement('h2')
        author.innerText = post.user.name

        const image = document.createElement('img')
        image.classList.add('home-post-image')
        image.src = post.image

        const text = document.createElement('p')
        text.innerText = post.text

        const article = document.createElement('article')
        article.append(author, image, text)

        if (post.user.id === userId) {
            const editButton = document.createElement('button')

            editButton.innerText = 'Edit'

            editButton.onclick = function () {
                const idInput = homeEditPostForm.querySelector('#edit-post-id')
                idInput.value = post.id

                const imageInput = homeEditPostForm.querySelector('#edit-post-url')
                imageInput.value = post.image

                const textInput = homeEditPostForm.querySelector('#edit-post-text')
                textInput.value = post.text

                homeEditPostModal.classList.remove('off')
            }

            article.append(editButton)
        }

        homePosts.append(article)
    }
}