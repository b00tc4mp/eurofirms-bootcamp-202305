import { useState, useEffect } from "react"
import context from "../../context"
import retrieveUser from "../../logic/retrieveUser"
import retrieveArtworks from "../../logic/retrieveArtworks"
import extractUserIdFromToken from "../helpers/extractUserIdFromToken"
import CreateArtworkModal from "../modals/CreateArtworkModal"
import DeleteArtworkModal from "../modals/DeleteArtworkModal"
import EditArtworkModal from "../modals/EditArtworkModal"
import toggleFavArtwork from "../../logic/toggleFavArtwork"

function Home({ onLoggedOut }) {
    console.log('Home -> render')

    const [modal, setModal] = useState(null)
    const [artworkId, setArtworkId] = useState(null)
    const [user, setUser] = useState(null)
    const [artworks, setArtworks] = useState(null)

    useEffect(() => {
        try {
            retrieveUser(context.token)
                .then(user => setUser(user))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
        try {
            retrieveArtworks(context.token)
                .then(artworks => setArtworks(artworks))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleLogoutClick = () => {
        context.token = null

        onLoggedOut()
    }

    const handleCreateArtworkClick = () => setModal('create-artwork')

    const handleArtworkCreated = () => {
        try {
            retrieveArtworks(context.token)
                .then(artworks => {
                    setModal(null)
                    setArtworks(artworks)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }
    const handleEditArtworkClick = artworkId => {
        setArtworkId(artworkId)
        setModal('edit-artwork')
    }

    const handleCreateArtworkCancelled = () => setModal(null)

    const handleEditArtworkCancelled = () => {
        setModal(null)
        setArtworkId(null)
    }

    const handleArtworkEdited = () => {
        try {
            retrieveArtwork(context.token)
                .then(artworks => {
                    setArtworks(posts)
                    setModal(null)
                    setArtworksId(null)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleDeleteArtworkClick = artworkId => {
        setArtworkId(artworkId)
        setModal('delete-artwork')
    }

    const handleDeleteArtworkCancelled = () => {
        setModal(null)
        setArtworkId(null)
    }

    const handleArtworkDeleted = () => {
        try {
            retrieveArtworks(context.token)
                .then(artworks => {
                    setArtworks(artworks)
                    setModal(null)
                    setArtworkId(null)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleToggleArtworkClick = artworkId => {
        try {
            toggleFavArtwork(context.token, artworkId)
                .then(() => retrieveArtworks(context.token))
                .then(artworks => setArtworks(artworks))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }
    const userId = extractUserIdFromToken(context.token)

    return <div className="home-view">
        <header className="home-header">
            <h1 className="home-title">La creatividad es la inteligencia divirtiendose, {user ? user.name : 'Einstain'}!</h1>

            <button className="home-logout-button" onClick={handleLogoutClick}>Logout</button>
        </header>
        <main className="home-main">
            <section className="home-artworks">
                {artworks && artworks.map(artwork =>
                    <article key={artwork.id}>
                        <h2>{artwork.author.name}</h2>

                        <img className="home-artwork-image"
                            src={artwork.image}
                            alt={artwork.description}></img>

                        <p>{artwork.description}</p>

                        {artwork.author.id === userId && <>
                            <button onClick={() => handleEditArtworkClick(artwork.id)}>Edit</button>
                            <button onClick={() => handleDeleteArtworkClick(artwork.id)}>Delete</button>
                        </>}
                        <button onClick={() => handleToggleArtworkClick(artwork.id)}>{artwork.fav ? '💗': '🤍'}</button>
                    </article>)}
            </section>
        </main>

        <footer className="home-footer">
            <button className="home-create-artwork-button" onClick={handleCreateArtworkClick}>+</button>
        </footer>

        {modal === 'create-artwork' && <CreateArtworkModal onArtworkCreated={handleArtworkCreated} onCreateArtworkCancelled={handleCreateArtworkCancelled} />}
        {modal === 'edit-artwork' && <EditArtworkModal artworkId={artworkId} onArtworkEdited={handleArtworkEdited} onEditArtworkCancelled={handleEditArtworkCancelled} />}
        {modal === 'delete-artwork' && <DeleteArtworkModal artworkId={artworkId} onArtworkDeleted={handleArtworkDeleted} onDeleteArtworkCancelled={handleDeleteArtworkCancelled} />}

    </div>

}
export default Home