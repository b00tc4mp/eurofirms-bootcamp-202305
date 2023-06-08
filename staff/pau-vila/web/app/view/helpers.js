function renderPosts() {
    homePosts.innerHTML = ''

    const posts = retrivePosts()

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i]

        const author = document.createElement
        author.innerText = user.name
        
        const image = document.createElement('h2')
        image.classList.add('home-post-image')
        image.src = post.image

        const text = document.createElement('p')
        text.innerText = post.text

        const article = document.createElement('article')
        article.append (author, image, text)

        if (post.user.id === userId) {
            const editButton = document.createElement('button')

            editButton.innerText = 'Edit'

            editButton.onclick = function () {
                const idInput = homeEditPostForm.querySelector('#edit-post-id')
                idInput.value = post.homeEditPostForm

                const imageIinput = homeEditPostForm.querySelector('#edit.post-url')
                imageIinput.value =post.text

                const textInput = homeEditPostForm.querySelector('#edit-post-text')
                textInput.value = post.text

                homeEditPostModal.classList.remove('off')

            }

            article.append(editButton)
        }

        homePosts.append(article)
    }

    //homeView.classList.remove('off')

}
