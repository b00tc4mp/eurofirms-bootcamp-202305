import { useState, useEffect } from "react"
import { Routes, Route, useNavigate, Link } from "react-router-dom"

import context from "../../context"
import extractUserIdFromToken from "../helpers/extractUserIdFromToken"
import { retrievePosts } from "../../logic/retrievePosts"
import { retrieveUser } from "../../logic/retrieveUser"

import { AllPosts } from '../components/AllPosts'
import { Explorer } from "../components/Explorer"
import { Notifications } from "../components/Notifications"
import { Messages } from "../components/Messages"
import { Profile } from "../components/Profile"

import { CreatePostModal } from "../modals/CreatePostModal"

export default function Home() {
    const userId = extractUserIdFromToken(context.token)
    const navigate = useNavigate()
    const firstRouteElement = window.location.pathname.split('/')[1];

    const [userIdProfile, setUserIdProfile] = useState(userId)

    const [modal, setModal] = useState(null)
    const [posts, setPosts] = useState(null)
    const [user, setUser] = useState(null)
    const [page, setPage] = useState('Instaflan')

    useEffect(() => {
        try {
            retrieveUser(context.token)
                .then((user) => {
                    setUser(user)

                    let header = null
                    switch (firstRouteElement) {
                        case 'home':
                            header = 'Instaflan'
                            break
                        case 'explorer':
                            header = 'Explorer'
                            break
                        case 'messages':
                            header = 'Messages'
                            break
                        case 'notifications':
                            header = 'Notifications'
                            break
                        case 'profile':
                            header = 'Profile'
                            break
                    }
                    setPage(header)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [firstRouteElement])

    const handleProfilePage = () => {
        setUserIdProfile(userId)
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
                <Route path='/profile/:userIdProfile/*' element={<Profile />} />
            </Routes>

        </main>
        <footer className="footer">
            <Link className="footer-emogis" to='/home'>🏠</Link>
            <Link className="footer-emogis" to='/explorer'>🌍</Link>
            <a onClick={handleCreatePostModal} className="footer-emogis" href="#">➕</a>
            <Link className="footer-emogis" to='/messages'>✉️</Link>
            <Link className="footer-emogis" to='/notifications'>❤️</Link>
            <Link onClick={handleProfilePage} className="footer-emogis" to={`/profile/${userIdProfile}/posts`}>
                {user && (
                    <img
                        className="footer-profile-image"
                        src={user.image}
                        alt={user.name}
                    />
                )}
            </Link>
        </footer>

        {modal === "create-post-modal" && <CreatePostModal onCreatePost={handleCreatePost} onHideCreatePost={handleCancelCreatePostModal} />}
    </div>
}