import { useState } from "react"

import { CreatePostModal } from "../modal/CreatePostModal"

export function Home() {
    const [modal, setModal] = useState(null)

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
                <h2 className="h2-header">Instaflan</h2>
                {/* <img src="../images/flan.png" alt="Icon flan" /> */}
            </div>
            <div className="div-search">
                <input className="search-input" type="text" placeholder="search..." />
                <button className="search-button">🔍</button>
            </div>
        </header>
        <main className="main-home"></main>
        <footer className="footer">
            <a className="footer-emogis" href="#">🏠</a>
            <a className="footer-emogis" href="#">🌍</a>
            <a onClick={handleCreatePostModal} className="footer-emogis" href="#">➕</a>
            <a className="footer-emogis" href="#">✉️</a>
            <a className="footer-emogis" href="#">❤️</a>
            <a className="footer-emogis" href="#">🧒</a>
        </footer>

        {modal === "create-post-modal" && <CreatePostModal onCreatePost={handleCreatePost} onHideCreatePost={handleCancelCreatePostModal} />}
    </div>
}