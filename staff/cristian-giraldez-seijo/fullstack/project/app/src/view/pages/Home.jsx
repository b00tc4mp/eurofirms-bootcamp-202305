import React, { useState, useEffect } from 'react'
import retrieveUser from '../../logic/retrieveUser'
import LoginModal from '../modals/LoginModal'
import RegisterModal from '../modals/RegisterModal'
import ShowStories from './ShowStories'
import ShowStory from './ShowStory'
import context from '../../context'

const Home = () => {
        const [view, setView] = useState('Stories')
        const [modal, setModal] = useState(null)
        const [user, setUser] = useState(null)
        const [storyId, setStoryId] = useState(null)

        useEffect(() => {
                try {
                        context.token && retrieveUser(context.token)
                                .then(user => setUser(user))
                                .catch(error => alert(error.message))
                } catch (error) { alert(error.message) }
        }, [])

        const handleNavigateToRegister = event => {
                event.preventDefault()
                setModal('register')
        }

        const handleNavigateToLogin = event => {
                event.preventDefault()
                setModal('login')
        }
        const handleStories = event => {
                event.preventDefault()
                setView('Stories')
        }
        const handleClose = event => {
                event.preventDefault()
                setModal(null)
        }

        const handleLoggedSuccess = () => {
                setModal(null)
        }

        const handleLogout = event => {
                event.preventDefault()
                context.token = null
                setModal('login')
        }
        const handleShowStory = (storyId) => {
                setStoryId(storyId)
                setView('Story')
        }

        return (
                <div className="home">
                        <header className="home-header">
                                {!modal && !context.token && (
                                        <button type="button" onClick={handleNavigateToLogin} id="login">
                                                Sign in
                                        </button>
                                )}
                                {modal && (
                                        <button type="button" onClick={handleClose}>Close</button>
                                )}
                                {view === 'Story' && (
                                        <button type="button" onClick={handleStories}>Stories</button>
                                )}
                                {context.token && (<h3>Hi, {user?.nickname}!</h3>)}
                                {context.token && (
                                        <button type="button" onClick={handleLogout}>Logout</button>)}
                                {modal === 'login' && <LoginModal onRegisterSuccess={handleLoggedSuccess} onNavigateToRegister={handleNavigateToRegister} />}
                                {modal === 'register' && <RegisterModal onRegisterSuccess={handleLoggedSuccess} onNavigateToLogin={handleNavigateToLogin} />}
                        </header>
                        <main>
                                <h1>Read, write, and talking!</h1>
                                <p>"Writing is the painting of the voice", Voltaire.</p>
                                {view === 'Stories' && <ShowStories onShowStory={handleShowStory} />}
                                {view === 'Story' && <ShowStory storyId={storyId} />}
                        </main>
                        <footer></footer>
                </div>
        )
}

export default Home