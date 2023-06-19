function renderPosts() {
    homePosts.innerHTML = ''

    const posts = retrievePosts()

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i]

        const author = document.createElement('h2')
        author.innerText = post.author.name

        const image = document.createElement('img')
        image.classList.add('home-post-image')
        image.src = post.image

        const text = document.createElement('p')
        text.innerText = post.text

        const article = document.createElement('article')
        article.append(author, image, text)

        if (post.author.id === userId) {
            const editButton = document.createElement('button')

            editButton.innerText = 'Edit'

            editButton.onclick = function () {
                const idInput = homeEditPostForm.querySelector('#edit-post-id')
                idInput.value = post.id

                const imageInput = homeEditPostForm.querySelector('#edit-post-url')
                imageInput.value = post.image

                const textInput = homeEditPostForm.querySelector('#edit-post-text')
                textInput.value = post.text
                //abrir el modal
                homeEditPostModal.classList.remove('off')
            }
            const deleteButton = document.createElement('button')
            deleteButton.innerText = 'Delete'

            deleteButton.onclick = function(){
                const idInput = homeDeletePostForm.querySelector('#delete-post-id')
                idInput.value = post.id

                homeDeletePostModal.classList.remove('off')
            }
            
            article.append(editButton, deleteButton)
        }

        homePosts.append(article)
    }
}