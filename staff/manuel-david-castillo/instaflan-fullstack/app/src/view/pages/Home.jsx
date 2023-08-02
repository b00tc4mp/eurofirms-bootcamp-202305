import { useState, useEffect, useRef } from "react"
import { Routes, Route, useNavigate, Link } from "react-router-dom"

import context from "../../context"
import extractUserIdFromToken from "../helpers/extractUserIdFromToken"
import { retrievePosts } from "../../logic/retrievePosts"
import { retrieveUser } from "../../logic/retrieveUser"
import { searchUser } from "../../logic/searchUser"

import { AllPosts } from '../components/AllPosts'
import { Explorer } from "../components/Explorer"
import { Notifications } from "../components/Notifications"
import { Messages } from "../components/Messages"
import { Profile } from "../components/Profile"

import { CreatePostModal } from "../modals/CreatePostModal"
import { UsersSearchModal } from "../modals/UsersSearchModal"

export default function Home() {
    const userId = extractUserIdFromToken(context.token)
    const navigate = useNavigate()
    const firstRouteElement = window.location.pathname.split('/')[1];

    const inputRef = useRef(null)
    const modalRef = useRef(null)

    const [userIdProfile, setUserIdProfile] = useState(userId)

    const [modal, setModal] = useState(null)
    const [page, setPage] = useState('Instaflan')

    const [user, setUser] = useState(null)
    const [users, setUsers] = useState(null)
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

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

    const handleSearchUsers = (event) => {
        const text = event.target.value

        try {
            searchUser(context.token, text)
                .then(users => setUsers(users))
                .catch(() => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleClickOutside = (event) => {
        if (!modalRef.current.contains(event.target) && !inputRef.current.contains(event.target)) {
            setModal(false);
        }
    }

    const handleHideSearchModal = () => {
        setModal(null)
        inputRef.current.value = ''
        setUsers(null)
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
                    <input ref={inputRef} onChange={handleSearchUsers} /* onBlur={() => setModal(null)} */ onFocus={() => setModal('search-modal')} className="search-input" type="text" placeholder="search..." />
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
        {modal === "search-modal" && <UsersSearchModal users={users} modalRef={modalRef} onHideSearchModal={handleHideSearchModal} />}
    </div>
}