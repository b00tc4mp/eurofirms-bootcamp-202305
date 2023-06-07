function renderPosts() {
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



