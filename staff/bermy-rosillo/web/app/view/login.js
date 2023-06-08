// Login
var loginView = document.querySelector('.login-view')
var loginForm = loginView.querySelector('.login-form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = loginForm.querySelector('#login-email')
    var email = emailInput.value

    var passwordInput = loginForm.querySelector('#login-password')
    var password = passwordInput.value

    var result = authenticateUser(email, password)

    if (result === false) {
        alert('Wrong credential')
    } else {
        
        userId = result
        
        loginForm.reset()

       const user = retrieveUser(userId)
        if (user === null) {
            alert('User not found')
        } else {
            loginView.classList.add('off')

            const homeTitle = homeView.querySelector('.home-title')
            homeTitle.innerText = ' Hello, ' + user.name + '!'
            
            renderPosts() 
            
            homeView.classList.remove('off')
        }
    }
}//function closed

//link
var loginRegisterLink = loginView.querySelector('.login-register-link')

loginRegisterLink.onclick = function (event) {
    event.preventDefault()

    loginView.classList.add('off')
    registerView.classList.remove('off')
}