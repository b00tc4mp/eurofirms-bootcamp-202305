import React, { useState, useEffect } from 'react'
import retrieveUser from '../../logic/retrieveUser'
import LoginModal from '../modals/LoginModal'
import RegisterModal from '../modals/RegisterModal'
import ShowStories from './ShowStories'
import ShowStory from './ShowStory'
import CreateStory from './CreateStory'
import EditStory from './EditStory'
import context from '../../context'

const Home = () => {
    const [view, setView] = useState('Stories')
    const [modal, setModal] = useState(null)
    const [user, setUser] = useState(null)
    const [storyId, setStoryId] = useState(null)
    const [story, setStory] = useState(null)

    useEffect(() => {
        try {
            context.token && retrieveUser(context.token)
                .then(user => setUser(user))
                .catch(error => alert(error.message))
        } catch (error) { alert(error.message) }
    }, [context.token])

    const handleNavigateToRegister = () => setModal('register')

    const handleNavigateToLogin = () => setModal('login')

    const handleClose = () => setModal(null)

    const handleLoggedSuccess = () => {
        setModal(null)
    }

    const handleLogout = () => {
        context.token = null
        setUser(null)
        setModal('login')
        setView('Stories')
    }

    const handleShowStory = (storyId) => {
        setStoryId(storyId)
        setView('Story') 
    }

    const handleShowEditStory = (story) => {
        setStory(story)
        setView('EditStory')
    }

    const handleShowCreateStory = (storyId) => {
        setStoryId(storyId)
        setView('CreateStory')
}
const handleStoryCreated = () => setView('Stories')
    const handleBackToStories = () => {
setStoryId(null)
setView('Stories')
    }

    return (
        <div className="home">
            <header className="">
            <a className="cursor-pointer" onClick={handleBackToStories}>Talking characters!</a>
                {!modal && !context.token && (
                    <button type="button" onClick={handleNavigateToLogin} id="login">
                        Sign in
                    </button>
                )}
                {modal && (
                    <button type="button" onClick={handleClose}>Close</button>
                )}
                {user && (<h3>Hi, {user?.nickname}!</h3>)}
                {user && (
                    <button type="button" onClick={handleLogout}>Logout</button>)}
                {modal === 'login' && <LoginModal onRegisterSuccess={handleLoggedSuccess} onNavigateToRegister={handleNavigateToRegister} />}
                {modal === 'register' && <RegisterModal onRegisterSuccess={handleLoggedSuccess} onNavigateToLogin={handleNavigateToLogin} />}
            </header>
            <main>
            {view === 'Stories' && <ShowStories onShowStory={handleShowStory} onShowCreateStory={handleShowCreateStory} />}
                {view === 'Story' && <ShowStory storyId={storyId} onShowEditStory={handleShowEditStory} onShowStory={handleShowStory} onShowCreateStory={handleShowCreateStory}/>}
                {view === 'CreateStory' && <CreateStory onStoryCreated={handleStoryCreated} storyId={storyId}/>}
                {view === 'EditStory' && <EditStory story={story} onStoryEdited={handleShowStory} onStoryDeleted={handleBackToStories}/>}
                    
            </main>
                    </div>
    )
}

export default Home