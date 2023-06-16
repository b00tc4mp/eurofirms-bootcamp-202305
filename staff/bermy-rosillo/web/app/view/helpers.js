//show posts
/*if que compare id post con el idUser
si es true
*/
function renderPosts() {
    homePosts.innerHTML = ''

    const posts = retrievePosts()

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i]

        const article = document.createElement('article')

        const author = document.createElement('h2')
        author.innerText = 'Author :'+post.user.name

        const image = document.createElement('img')
        image.classList.add('home-post-image')
        image.src = post.image

        const containerText = document.createElement('div')
        containerText.classList.add('container-text')

        const text = document.createElement('h3')
        text.innerText = 'Description: '+post.text

        article.append(author, image)
        containerText.append(text)
        article.append(containerText)
        //add article to section
        homePosts.append(article)

        if (post.user.id === userId) {

            const postEditButton = document.createElement('button')
            postEditButton.innerText = 'Edit post'

            postEditButton.onclick = function () {

                const idInput = homeEditPostForm.querySelector('#edit-post-id')
                idInput.value = post.id

                const imageInput = homeEditPostForm.querySelector('#edit-post-url')
                imageInput.value = post.image

                const textInput = homeEditPostForm.querySelector('#edit-post-text')
                textInput.value = post.text

                homeEditPostModal.classList.remove('off')
            }
            article.append(postEditButton)

            const postDeleteButton = document.createElement('button')
            postDeleteButton.innerText = 'Delete post'

            postDeleteButton.onclick = function () {
                
                const idInput = homeDeletePostModal.querySelector('#delete-post-id')
                idInput.value = post.id
                
                homeDeletePostModal.classList.remove('off')
            }
            article.append(postDeleteButton)

        }
        homePosts.append(article)
    }
    
}
   
