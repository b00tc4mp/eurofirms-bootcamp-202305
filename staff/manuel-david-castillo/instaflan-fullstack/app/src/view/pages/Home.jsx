import { useState } from "react"

import { AllPosts } from '../components/AllPosts'
import { Explorer } from "../components/Explorer"
import { Notifications } from "../components/Notifications"
import { Messages } from "../components/Messages"
import { Profile } from "../components/Profile"

import { CreatePostModal } from "../modals/CreatePostModal"

export function Home() {
    const [page, setPage] = useState('Instaflan')
    const [modal, setModal] = useState(null)

    const handleAllPostPage = () => setPage('Instaflan')
    const handleExplorerPage = () => setPage('Explorer')
    const handleMessagesPage = () => setPage('Messages')
    const handleNotificationsPage = () => setPage('Notifications')
    const handleProfilePage = () => setPage('Profile')

    const handleCreatePostModal = () => setModal("create-post-modal")
    const handleCancelCreatePostModal = () => setModal("")
    const handleCreatePost = () => {
        setModal(null)
        /* try {
            retrievePosts(context.token)
                .then((posts) => {
                    setModal(null)
                })
                .catch(() => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        } */
    }

    return <div className="home">
        <header className="header">
            <div>
                <h2 className="h2-header">{page}</h2>
                {/* <img src="../images/flan.png" alt="Icon flan" /> */}
            </div>
            {page === 'Profile' ?
                <nav>
                    <button /* onClick={handleLogout} */ className="button button-logout">Logout</button>
                </nav>
                :
                <div className="div-search">
                    <input className="search-input" type="text" placeholder="search..." />
                    <button className="search-button">🔍</button>
                </div>
            }
        </header>
        <main className="main-home">
            {page === 'Instaflan' && <AllPosts />}
            {page === 'Explorer' && <Explorer />}
            {page === 'Messages' && <Messages />}
            {page === 'Notifications' && <Notifications />}
            {page === 'Profile' && <Profile />}
        </main>
        <footer className="footer">
            <a onClick={handleAllPostPage} className="footer-emogis" href="#">🏠</a>
            <a onClick={handleExplorerPage} className="footer-emogis" href="#">🌍</a>
            <a onClick={handleCreatePostModal} className="footer-emogis" href="#">➕</a>
            <a onClick={handleMessagesPage} className="footer-emogis" href="#">✉️</a>
            <a onClick={handleNotificationsPage} className="footer-emogis" href="#">❤️</a>
            <a onClick={handleProfilePage} className="footer-emogis" href="#">🧒</a>
        </footer>

        {modal === "create-post-modal" && <CreatePostModal onCreatePost={handleCreatePost} onHideCreatePost={handleCancelCreatePostModal} />}
    </div>
}