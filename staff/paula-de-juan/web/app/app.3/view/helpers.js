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

    if (post.user.id === userId) {
             
        const editButton = document.createElement('button')
        editButton.innerText = 'Edit'

        editButton.onclick = function() {
            homeEditPostModal.classList.remove('off')
            
            const idInput = homeEditPostForm.querySelector('#edit-post-id')
            idInput.value = post.id

            const imageInput = homeEditPostForm.querySelector('#edit-post-url')
            imageInput.value = post.image


            const textInput = homeEditPostForm.querySelector('#edit-post-text')
            textInput.value = post.text

            homeEditPostModal.classList.remove('off')
          }

        const deleteButton = document.createElement('button')
        deleteButton.innerText = 'Delete'

        deleteButton.onclick = function () {
            const idInput = homeDeletePostForm.querySelector('#delete-post-id')
            idInput.value = post.id

            homeDeletePostModal.classList.remove('off')
        }

        article.append(user, image, text, editButton, deleteButton)

    } else {

        article.append(user, image, text)
    }

    article.classList.add('posts-container')
    homePosts.append(article)
}
}
