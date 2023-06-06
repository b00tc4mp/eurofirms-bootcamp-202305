/*
 
--* Presentation *--
 
*/

var userId = null;

// Register Form
var registerView = document.querySelector('.register-view');
var registerForm = registerView.querySelector('.register-form');


registerForm.onsubmit = function (event) {
    event.preventDefault();
    var nameInput = registerForm.querySelector('#register-name');
    var name = nameInput.value

    var emailInput = registerForm.querySelector('#register-email');
    var email = emailInput.value

    var passwordInput = registerForm.querySelector('#register-password');
    var password = passwordInput.value

    var result = registerUser(name, email, password)

    if (result === false)
        alert('User already exists')
    else {
        registerView.classList.add('off')
        loginView.classList.remove('off')
    }

}

var registerLoginLink = registerView.querySelector('.register-login-link')

registerLoginLink.onclick = function (event){
    event.preventDefault()
    loginView.classList.remove('off')
    registerView.classList.add('off')
}


// Login Form
var loginView = document.querySelector('.login-view');
var loginForm = loginView.querySelector('.login-form');

loginForm.onsubmit = function (event) {
    event.preventDefault();
    var emailInput = loginForm.querySelector('#login-email');
    var email = emailInput.value

    var passwordInput = loginForm.querySelector('#login-password');
    var password = passwordInput.value

    var result = authenticateUser(email, password)

    if (result === false)
        alert('Wrong credentials')
    else {
        userId = result

        loginForm.reset()

        var user = retrieveUser(userId)

        if (user === null) {
            alert('User dont found')
        }
        else {
            loginView.classList.add('off')
            var homeTitle = homeView.querySelector('.home-title');            

            homeTitle.innerText = 'Hello ' + user.name + '!';

            homePosts.innerHTML = ''            

            var posts = retrievePosts()

            for (var i = 0; i < posts.length; i++){
                
                var post = posts[i]

                var author = document.createElement('h2')
                author.innerText = post.user.name


                var image = document.createElement('img')
                var text = document.createElement('p')

                image.src = post.image
                image.classList.add('home-post-image')
                text.innerHTML = post.text

                var article = document.createElement('article')
                article.classList.add('posts-container')

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

// home
var homeView = document.querySelector('.home-view');
var homeCreatePostModal = homeView.querySelector('.home-create-post-modal')
var homeLogoutButton = homeView.querySelector('.home-logout-button')
var homeCreatePostForm = homeView.querySelector('.home-create-post-form')
var homeMain = homeView.querySelector('.home-main')
var homePosts = homeView.querySelector('.home-posts')

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

    var result = createPost(userId, image, text)

    if (result === false)
        alert('Cannot create post')
    else {
        homeCreatePostForm.reset()

        homeCreatePostModal.classList.add('off')

        homePosts.innerHTML = ''

        var posts = retrievePosts()
        for(var i = 0; i < posts.length; i++){
            var post = posts[i]
            
            var user = document.createElement('h2')
            user.innerText = post.user.name

            var image = document.createElement('img')
            image.src = post.image
            image.classList.add('home-post-image')
           
            var text = document.createElement('p')
            text.innerHTML = post.text
            
            var article = document.createElement('article')
            article.append(user, image, text)
            
            article.classList.add('posts-container')
            homePosts.append(article)
        }
    }
}