import { useState, useEffect } from "react"
import context from "../../context"
import retrieveUser from "../../logic/retrieveUser"
import retrieveArtworks from "../../logic/retrieveArtworks"
import extractUserIdFromToken from "../helpers/extractUserIdFromToken"
import CreateArtworkModal from "../modals/CreateArtworkModal"
import DeleteArtworkModal from "../modals/DeleteArtworkModal"
import EditArtworkModal from "../modals/EditArtworkModal"
import toggleFavArtwork from "../../logic/toggleFavArtwork"
import retrieveWorkshops from "../../logic/retrieveWorkshops"
import CreateWorkshopModal from "../modals/CreateWorkshopModal"
import EditWorkshopModal from "../modals/EditWorkshopModal"
import DeleteWorkshopModal from "../modals/DeleteWorkshopModal "
import toggleAttendants from "../../logic/toggleAttendants"

function Home({ onLoggedOut }) {
    console.log('Home -> render')

    const [modal, setModal] = useState(null)
    const [artworkId, setArtworkId] = useState(null)
    const [workshopId, setWorkshopId] = useState(null)
    const [user, setUser] = useState(null)
    const [artworks, setArtworks] = useState(null)
    const [workshops, setWorkshops] = useState(null)

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
        try {
            retrieveWorkshops(context.token)
                .then(workshops => setWorkshops(workshops))
                .catch(error => alert(error.message));
        } catch (error) {
            alert(error.message);
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

    //codigo workshop
    const handleCreateWorkshopClick = () => setModal('create-workshop')

    const handleWorkshopCreated = () => {
        try {
            retrieveWorkshops(context.token)
                .then(workshops => {
                    setModal(null)
                    setWorkshops(workshops)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }
    const handleEditWorkshopClick = workshopId => {
        setWorkshopId(workshopId)
        setModal('edit-workshop')
    }

    const handleCreateWorkshopCancelled = () => setModal(null)

    const handleEditWorkshopCancelled = () => {
        setModal(null)
        setArtworkId(null)
    }

    const handleWorkshopEdited = () => {
        try {
            retrieveWorkshops(context.token)
                .then(workshops => {
                    setWorkshops(workshops)
                    setModal(null)
                    setWorkshopId(null)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }
    const handleDeleteWorkshopClick = workshopId => {
        setWorkshopId(workshopId)
        setModal('delete-workshop')
    }

    const handleDeleteWorkshopCancelled = () => {
        setModal(null)
        setArtworkId(null)
    }

    const handleWorkshopDeleted = () => {
        try {
            retrieveWorkshops(context.token)
                .then(workshops => {
                    setWorkshops(workshops)
                    setModal(null)
                    setArtworkId(null)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleToggleAttendantsClick = (workshopId) => {
        
        toggleAttendants(context.token, workshopId)
            .then(() => {
                retrieveWorkshops(context.token)
                    .then(updatedworkshops => setWorkshops(updatedworkshops))
                    .catch(error => alert(error.message));
            })
            .catch(error => alert(error.message));
    };
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

                        <p className="home-description">Description:{artwork.description}</p>

                        <p>Materials:{artwork.materials}</p>

                        {artwork.ornaments.map((ornament, index) => {
                            return <p className="home-ornament" key={artwork.id + index}>Ornament: {ornament}</p>
                        })}
                        {artwork.author.id === userId && <>
                            <button onClick={() => handleEditArtworkClick(artwork.id)}>Edit</button>
                            <button onClick={() => handleDeleteArtworkClick(artwork.id)}>Delete</button>
                        </>}
                        <button onClick={() => handleToggleArtworkClick(artwork.id)}>{artwork.fav ? '💗' : '🤍'}</button>
                    </article>)}
            </section>
            <section className="home-workshops">
                {workshops && workshops.map(workshop => (
                    <article key={workshop.id}>
                        <h2>{workshop.planner.name}</h2>
                        {workshop.image !== '' && <img className="home-workshop-img"
                            src={workshop.image} />}
                        {workshop.video !== '' && <video className="home-workshop-video"
                            src={workshop.video} />}
                        <p>Descripción: {workshop.description}</p>
                        <p>Lugar: {workshop.place}</p>
                        <p>Fecha de inicio: {workshop.dateStart.toLocaleString('es-ES')}</p>
                        <p>Fecha de finalización: {workshop.dateEnd.toLocaleString('es-ES')}</p>
                        <p>Límite de asistentes: {workshop.attendantsLimit}</p>
                        <p>ZIP: {workshop.zip}</p>
                        <button onClick={() => handleToggleAttendantsClick(workshop.id)}>{workshop.attendants.includes(userId) ? 'Unjoin' : 'Join'}</button>
                        {workshop.planner.id === userId && <>
                            <button onClick={() => handleEditWorkshopClick(workshop.id)}>Edit</button>
                            <button onClick={() => handleDeleteWorkshopClick(workshop.id)}>Delete</button>
                        </>}

                    </article>
                ))}
            </section>
        </main>

        <footer className="home-footer">
            <button className="home-create-artwork-button" onClick={handleCreateArtworkClick}>NewArtwork</button>
            <button className="home-create-workshop-button" onClick={handleCreateWorkshopClick}>NewWorkshop</button>
        </footer>

        {modal === 'create-artwork' && <CreateArtworkModal onArtworkCreated={handleArtworkCreated} onCreateArtworkCancelled={handleCreateArtworkCancelled} />}
        {modal === 'edit-artwork' && <EditArtworkModal artworkId={artworkId} onArtworkEdited={handleArtworkEdited} onEditArtworkCancelled={handleEditArtworkCancelled} />}
        {modal === 'delete-artwork' && <DeleteArtworkModal artworkId={artworkId} onArtworkDeleted={handleArtworkDeleted} onDeleteArtworkCancelled={handleDeleteArtworkCancelled} />}
        {modal === 'create-workshop' && <CreateWorkshopModal onWorkshopCreated={handleWorkshopCreated} onCreateWorkshopCancelled={handleCreateWorkshopCancelled} />}
        {modal === 'edit-workshop' && <EditWorkshopModal workshopId={workshopId} onWorkshopEdited={handleWorkshopEdited} onEditWorkshopCancelled={handleEditWorkshopCancelled} />}
        {modal === 'delete-workshop' && <DeleteWorkshopModal workshopId={workshopId} onWorkshopDeleted={handleWorkshopDeleted} onDeleteWorkshopCancelled={handleDeleteWorkshopCancelled} />}
    </div>

}
export default Home