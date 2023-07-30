import React, { useState, useEffect } from 'react'
import LoginModal from '../modals/LoginModal'
import RegisterModal from '../modals/RegisterModal'
import context from '../../context'

const Home = () => {
        const [modal, setModal] = useState(null)
        const [showSignInButton, setShowSignInButton] = useState(true)
        const [showCloseButton, setShowCloseButton] = useState(false)
        const [showLogoutButton, setShowLogoutButton] = useState(false)
        const [token, setToken] = useState(null)

        useEffect(() => {
                // Retrieve the token from sessionStorage on component mount
                const storedToken = context.token;
                setToken(storedToken);
        })

        const handleNavigateToRegister = event => {
                event.preventDefault()
                setModal('register')
                setShowSignInButton(false)
                setShowCloseButton(true)
        }

        const handleNavigateToLogin = event => {
                event.preventDefault()
                setModal('login')
                setShowSignInButton(false)
                setShowCloseButton(true)
        }

        const handleClose = event => {
                event.preventDefault()
                setModal(null)
                setShowSignInButton(true)
                setShowCloseButton(false)
        }

        const handleRegisterSuccess = () => {
                setModal(null)
                setShowLogoutButton(true)
                setShowCloseButton(false)
        }

        const handleLogout = event => {
                event.preventDefault()
                                context.token = null
                setShowLogoutButton(false)
                setModal('login')
                setShowSignInButton(false)
                setShowCloseButton(true)
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
                                {showLogoutButton && (
                                <button type="button" onClick={handleLogout}>Logout</button>)}
                                {modal === 'login' && <LoginModal onRegisterSuccess={handleRegisterSuccess} onNavigateToRegister={handleNavigateToRegister} />}
                                {modal === 'register' && <RegisterModal onRegisterSuccess={handleRegisterSuccess} onNavigateToLogin={handleNavigateToLogin} />}
                        </header>
                        <main>
                                <h1>Hello!{token}</h1>
                        </main>
                        <footer></footer>
                </div>
        )
}

export default Home
