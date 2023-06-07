const homeView = document.querySelector('.home-view');
const homeCreatePostModal = homeView.querySelector('.home-create-post-modal')
const homeLogoutButton = homeView.querySelector('.home-logout-button')
const homeCreatePostForm = homeView.querySelector('.home-create-post-form')
const homeMain = homeView.querySelector('.home-main')
const homePosts = homeView.querySelector('.home-posts')

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
    }
}