function renderPosts () {
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

        homePosts.append(article)
    }
}