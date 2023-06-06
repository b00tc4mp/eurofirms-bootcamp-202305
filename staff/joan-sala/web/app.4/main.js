/**
 * PRESENTATION
 */

/* Register*/

var registerView = document.querySelector('.register-view')
var registerForm = registerView.querySelector('.register-form')

registerForm.onsubmit = function (event) {
    event.preventDefault()

    var nameInput = registerForm.querySelector('#register-name')
    var name = nameInput.value

    var emailInput = registerForm.querySelector('#register-email')
    var email = emailInput.value

    var passwordInput = registerForm.querySelector('#register-password')
    var password = passwordInput.value

    var result = registerUser(name, email, password)

    if (result === false)
        alert('User already exists')
    else {
        registerForm.reset()

        registerView.classList.add('off')
        loginView.classList.remove('off')
    }
}

var registerLoginLink = registerView.querySelector('.register-login-link')

registerLoginLink.onclick = function (event) {
    event.preventDefault()

    registerView.classList.add('off')
    loginView.classList.remove('off')
}

/* Login */

var loginView = document.querySelector('.login-view')
var loginForm = loginView.querySelector('.login-form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = loginForm.querySelector('#login-email')
    var email = emailInput.value

    var passwordInput = loginForm.querySelector('#login-password')
    var password = passwordInput.value

    var result = authenticateUser(email, password)

    if (result === false)
        alert('Wrong credentials')
    else {
        loginForm.reset()

        var user = retrieveUser(email)

        if (user === null)
            alert('User not found')
        else {
            loginView.classList.add('off')

            var homeTitle = homeView.querySelector('.home-title')
            homeTitle.innerText = 'Hello, ' + user.name + '!'

            homePosts.innerHTML = ''

            var posts = retrievePosts()

            for (var i = 0; i < posts.length; i++) {
                var post = posts[i]

                var image = document.createElement('img')
                image.classList.add('home-post-image')
                image.src = post.image

                var text = document.createElement('p')
                text.innerText = post.text

                var article = document.createElement('article')
                article.append(image, text)

                homePosts.append(article)
            }

            homeView.classList.remove('off')
        }
    }
}

var loginRegisterLink = loginView.querySelector('.login-register-link')

loginRegisterLink.onclick = function (event) {
    event.preventDefault()

    loginView.classList.add('off')
    registerView.classList.remove('off')
}

/* Home */

var homeView = document.querySelector('.home-view')
var homeCreatePostModal = homeView.querySelector('.home-create-post-modal')
var homeLogoutButton = homeView.querySelector('.home-logout-button')
var homeCreatePostForm = homeView.querySelector('.home-create-post-form')
var homeMain = homeView.querySelector('.home-main')
var homePosts = homeMain.querySelector('.home-posts')

homeLogoutButton.onclick = function () {
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

    var result = createPost(image, text)

    if (result === false)
        alert('Cannot create post')
    else {
        homeCreatePostForm.reset()

        homeCreatePostModal.classList.add('off')

        homePosts.innerHTML = ''

        var posts = retrievePosts()

        for (var i = 0; i < posts.length; i++) {
            var post = posts[i]

            var image = document.createElement('img')
            image.classList.add('home-post-image')
            image.src = post.image

            var text = document.createElement('p')
            text.innerText = post.text

            var article = document.createElement('article')
            article.append(image, text)

            homePosts.append(article)
        }

    }
}