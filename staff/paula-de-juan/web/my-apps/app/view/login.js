const loginView = document.querySelector('.login-view');
const loginForm = loginView.querySelector('.login-form');

loginForm.onsubmit = function (event) {
    event.preventDefault();
    const emailInput = loginForm.querySelector('#login-email');
    const email = emailInput.value

    const passwordInput = loginForm.querySelector('#login-password');
    const password = passwordInput.value

    const result = authenticateUser(email, password)

    if (result === false)
        alert('Wrong credentials')
    else {
        userId = result

        loginForm.reset()

        const user = retrieveUser(userId)

        if (user === null) {
            alert('User dont found')
        }
        else {
            loginView.classList.add('off')
            var homeTitle = homeView.querySelector('.home-title');            

            homeTitle.innerText = 'Hello ' + user.name + '!';

            homePosts.innerHTML = ''            

            const posts = retrievePosts()

            for(let i = 0; i < posts.length; i++){
                const post = posts[i]
                
                const user = document.createElement('h2')
                user.innerText = post.user.name
    
                const image = document.createElement('img')
                image.src = post.image
                image.classList.add('home-post-image')
               
                const text = document.createElement('p')
                text.innerHTML = post.text
                
                const article = document.createElement('article')
                article.append(user, image, text)
                
                article.classList.add('posts-container')
                homePosts.append(article)
            }
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