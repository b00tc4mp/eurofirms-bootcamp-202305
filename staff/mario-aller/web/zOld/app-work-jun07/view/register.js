const registerView = document.querySelector('.register-view')
const registerForm = registerView.querySelector('.register-form')

registerForm.onsubmit = function (event) {
    event.preventDefault()

    const nameInput = registerForm.querySelector('#register-name')
    const name = nameInput.value

    const emailInput = registerForm.querySelector('#register-email')
    const email = emailInput.value

    const passwordInput = registerForm.querySelector('#register-password')
    const password = passwordInput.value

    const result = registerUser(name, email, password)

    if (result === false)
        alert('User already exists')
    else {
        registerForm.reset()

        registerView.classList.add('off')
        loginView.classList.remove('off')
    }
}

const registerLoginLink = registerView.querySelector('.register-login-link')

registerLoginLink.onclick = function (event) {
    event.preventDefault()

    registerView.classList.add('off')
    loginView.classList.remove('off')
}
