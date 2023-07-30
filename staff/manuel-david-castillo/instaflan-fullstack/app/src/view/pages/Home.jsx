import { useState, useEffect, useContext } from "react"
import { Routes, Route, useNavigate, Link } from "react-router-dom"

import { AppContext } from "../../AppContext"

import { context } from "../../logic/helpers/context"
import { extractUserIdFromToken } from "../../logic/helpers/extractUserIdFromToken"
import { retrievePosts } from "../../logic/retrievePosts"
import { retrieveUser } from "../../logic/retrieveUser"

import { AllPosts } from '../components/AllPosts'
import { Explorer } from "../components/Explorer"
import { Notifications } from "../components/Notifications"
import { Messages } from "../components/Messages"
import { Profile } from "../components/Profile"

import { CreatePostModal } from "../modals/CreatePostModal"

export function Home() {
    const userId = extractUserIdFromToken(context.token)
    const navigate = useNavigate()

    const [modal, setModal] = useState(null)
    const [posts, setPosts] = useState(null)
    const [user, setUser] = useState(null)
    const { userIdProfile, setUserIdProfile } = useContext(AppContext)
    const { page, setPage } = useContext(AppContext)

    useEffect(() => {
        try {
            retrieveUser(context.token)
                .then((user) => {
                    setUser(user)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleAllPostPage = () => setPage('Instaflan')
    const handleExplorerPage = () => setPage('Explorer')
    const handleMessagesPage = () => setPage('Messages')
    const handleNotificationsPage = () => setPage('Notifications')
    const handleProfilePage = () => {
        setUserIdProfile(userId)
        setPage('Profile')
    }

    const handleLogout = () => {
        context.token = null

        navigate('/login')
    }

    const handleCreatePostModal = () => setModal("create-post-modal")
    const handleCancelCreatePostModal = () => setModal(null)
    const handleCreatePost = () => {
        try {
            retrievePosts(context.token)
                .then((posts) => {
                    setModal(null)
                    setPosts(posts)
                })
                .catch(() => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="home">
        <header className="header">
            <div className="div-h2-img">
                <h2 className="h2-header">{page}</h2>
                {page === 'Instaflan' && <img className="icon-flan" src="./public/images/flan.png" alt="Icon flan" />}
            </div>
            {page === 'Profile' ?
                <nav>
                    <button onClick={handleLogout} className="button button-logout">Logout</button>
                </nav>
                :
                <div className="div-search">
                    <input className="search-input" type="text" placeholder="search..." />
                    <button className="search-button">🔍</button>
                </div>
            }
        </header>
        <main className="main-home">

            <Routes>
                <Route path='/home' element={<AllPosts posts={posts} />} />
                <Route path='/explorer' element={<Explorer />} />
                <Route path='/messages' element={<Messages />} />
                <Route path='/notifications' element={<Notifications />} />
                <Route path='/profile/*' element={<Profile userIdProfile={userIdProfile} />} />
            </Routes>

        </main>
        <footer className="footer">
            <Link onClick={handleAllPostPage} className="footer-emogis" to='/home'>🏠</Link>
            <Link onClick={handleExplorerPage} className="footer-emogis" to='/explorer'>🌍</Link>
            <a onClick={handleCreatePostModal} className="footer-emogis" href="#">➕</a>
            <Link onClick={handleMessagesPage} className="footer-emogis" to='/messages'>✉️</Link>
            <Link onClick={handleNotificationsPage} className="footer-emogis" to='/notifications'>❤️</Link>
            <Link onClick={handleProfilePage} className="footer-emogis" to='/profile/posts'>
                {user && <img
                    className="footer-profile-image"
                    src={user.image}
                    alt={user.name} />} </Link>
        </footer>

        {modal === "create-post-modal" && <CreatePostModal onCreatePost={handleCreatePost} onHideCreatePost={handleCancelCreatePostModal} />}
    </div>
}