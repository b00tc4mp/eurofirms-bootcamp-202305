//show posts
/* 2 falta if que compare id post con el idUser
si es true
pinto edit button

1 chance var en lugaar de let*/
function renderPosts(){
    homePosts.innerHTML = ''

    var posts = retrievePosts()

    for( var i = 0 ; i < posts.length ; i++){
        var post = posts[i]

        var article = document.createElement('article')

        var author = document.createElement('h2')
        author.innerText = posts.user.name

        var image = document.createElement('img')
        image.classList.add('home-post-image')
        image.src = posts.image

        var text = document.createElement('p')
        text.innerText = posts.text
        
        article.append(author,image,text)
        //add article to section
        homePosts.append(article)


    }
}