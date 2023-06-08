//show posts
/* 2 falta if que compare id post con el idUser
si es true
pinto edit button y el delete button

1 chance const en lugaar de let*/
function renderPosts(){
    homePosts.innerHTML = ''

    const posts = retrievePosts()

    for( let i = 0 ; i < posts.length ; i++){
        const post = posts[i]

        const article = document.createElement('article')

        const author = document.createElement('h2')
        author.innerText = post.user.name

        const image = document.createElement('img')
        image.classList.add('home-post-image')
        image.src = post.image

        const text = document.createElement('p')
        text.innerText = post.text
        
        article.append(author,image,text)
        //add article to section
        homePosts.append(article)

        if(post.user.id === userId){
        
            const postEditButton = document.createElement('button')
            postEditButton.innerText ='Edit post'
            article.append(postEditButton)
        }



    }
}