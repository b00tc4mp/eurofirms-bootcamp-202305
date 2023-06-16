// Login
const loginView = document.querySelector('.login-view')
const loginForm = loginView.querySelector('.login-form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    const emailInput = loginForm.querySelector('#login-email')
    const email = emailInput.value

    const passwordInput = loginForm.querySelector('#login-password')
    const password = passwordInput.value

    const result = authenticateUser(email, password)

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
            homeTitle.innerText = ' Welcome, ' + user.name + '!'
            
            renderPosts() 
            
            homeView.classList.remove('off')
        }
    }
}//function closed

//link
const loginRegisterLink = loginView.querySelector('.login-register-link')

loginRegisterLink.onclick = function (event) {
    event.preventDefault()

    loginView.classList.add('off')
    registerView.classList.remove('off')
}