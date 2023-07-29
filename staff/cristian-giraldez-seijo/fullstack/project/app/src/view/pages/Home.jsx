import React, { useState } from 'react'
import LoginModal from '../modals/LoginModal'
import RegisterModal from '../modals/RegisterModal'

function Home() {
        const [modal, setModal] = useState(null)
        const [showSignInButton, setShowSignInButton] = useState(true)
        const [showCloseButton, setShowCloseButton] = useState(false)

        const handleNavigateToRegister = () => {
                event.preventDefault
                setModal('register')
                setShowSignInButton(false)
                setShowCloseButton(true)
        }

        const handleNavigateToLogin = () => {
                event.preventDefault
                setModal('login')
                setShowSignInButton(false)
                setShowCloseButton(true)
        }
const handleClose = () => {
        event.preventDefault
setModal(null)
setShowSignInButton(true)
setShowCloseButton(false)
}

        return (
                <div className="home">
                        <header className="home-header">
                                <p>Read, write, and talking!</p>
                                {showSignInButton && (
                                        <button type="button" onClick={handleNavigateToLogin} id="login">
                                                Sign in
                                        </button>
                                )}
{showCloseButton && (
        <button type="button" onClick={handleClose}>Close</button>
)}
                                {modal === 'login' && <LoginModal onNavigateToRegister={handleNavigateToRegister} />}
                                {modal === 'register' && <RegisterModal onNavigateToLogin={handleNavigateToLogin} />}
                        </header>
                        <main>
                                <h1>Hello!</h1>
                        </main>
                        <footer></footer>
                </div>
        )
}

export default Home
