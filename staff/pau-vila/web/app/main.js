/**
 * PRESENTACIÓN
 */

//Referencias

var registerView = document.querySelector('.register-view')
var registerForm = registerView.querySelector('.register-form')

var homeView = document.querySelector('.home-view')

var loginView = document.querySelector('.login-view')
var loginForm = loginView.querySelector('.login-form')

//Eventos
//REGISTER

registerForm.onsubmit = function (event) {
    event.preventDefault()

    //Captura de datos
    var newUser = {}

    var nameInput = registerForm.querySelector('#register-name')
    var name = nameInput.value 

    var emailInput = registerForm.querySelector('#register-email')
    var email = emailInput.value

    var passwordInput = registerForm.querySelector('#register-password')
    var password = passwordInput.value

    //Validación de datos
    var userExist = false
    var numUsers = users.length

    if (numUsers > 0) {
        for (var i = 0; i < numUsers; i++) {
            if (newUser.email === users[i].email) {
                userExist = true
                break
            }
        }
    }

    //Actualización de Base de Datos y navegación
    if (!userExist) {

        users.push(newUser)

        loginView.classList.remove('off')
        registerView.classList.add('off')
    }
    else {
        alert('User already registered')
    }
}
//LOGIN
var loginView = document.querySelector('.login-view')
var loginForm = loginView.querySelector('.login-form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    //Captura de datos

    var email = loginForm.querySelector('#login-email')
    var email = emailInput.value

    var password = loginForm.querySelector('#login-password')
    var password = passwordInput.value

    //Validación de datos
    var result = authenticateUser(email, password)


    //Navegación

    if (result === false) {
        alert('Wrong credentials')
    }
    else {
        loginForm.reset()

        var user = retrieveUser(email)

        if(user === null)
            alert('User dont found')
        else{
        loginView.classList.add('off')

        var homeTittle = homeView.querySelector('.home-tittle')
        homeTittle.innerText = 'Hola '+ user.name

        homePosts.innerHTML = ''

        var posts = retrivePosts()

        for (var i = 0; i < posts.length; i++) {
            var post = posts[i]

            var image = document.createElement('img')
            image.classList.add('home-post-image')
            image.src = post.image

            var text = document.createElement('p')
            text.innerText = post.text

            var article = document.createElement('article')
            article.append(image, text)

            homePosts.append(article)
        }

        homeView.classList.remove('off')

        }
    }
}