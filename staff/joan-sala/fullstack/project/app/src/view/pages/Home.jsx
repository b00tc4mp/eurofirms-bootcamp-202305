import { useState, useEffect } from 'react'
import extractUserIdFromToken from '../helpers/extractUserIdFromToken'
import context from '../../context'
import retrieveUser from '../../logic/retrieveUser'
import retrieveMeetups from '../../logic/retrieveMeetups'
import CreateMeetupModal from '../modals/CreateMeetupModal'
import EditMeetupModal from '../modals/EditMeetupModal'
import DeleteMeetupModal from '../modals/DeleteMeetupModal'
import toggleFavMeetup from '../../logic/toggleFavMeetup'

function Home({ onLoggedOut }) {
    console.log('Home ->render')

    const [modal, setModal] = useState(null)
    const [meetupId, setMeetupId] = useState(null)
    const [user, setUser] = useState(null)
    const [meetups, setMeetups] = useState(null)

    const [image, setImage] = useState(null)

    //Sólo se ejecuta una vez se pinta el Home
    useEffect(() => { //Para efectos secundarios como consecuéncia de llamar a una api.
        try {
            retrieveUser(context.token)
                .then(user => setUser(user))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }

        try {
            retrieveMeetups(context.token)
                .then(meetups => setMeetups(meetups))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleLogoutClick = () => {
        context.token = null

        onLoggedOut()
    }

    const handleCreateMeetupClick = () => setModal('create-meetup')

    const handleMeetupCreated = () => {
        try {
            retrieveMeetups(context.token)
                .then(meetups => {
                    setModal(null)
                    setMeetups(meetups)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleEditMeetupClick = meetupId => {
        setMeetupId(meetupId)
        setModal('edit-meetup')
    }

    const handleCreateMeetupCancelled = () => setModal(null)

    const handleEditMeetupCancelled = () => {
        setModal(null) //refrescar pantalla
        setMeetupId(null)
    }

    const handleMeetupEdited = () => {
        try {
            retrieveMeetups(context.token)
                .then(meetups => {
                    setMeetups(meetups)
                    setModal(null)
                    setMeetupId(null)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }
    const handleDeleteMeetupClick = meetupId => {
        setMeetupId(meetupId)
        setModal('delete-meetup')
    }

    const handleDeleteMeetupCancelled = () => {
        setModal(null)
        setMeetupId(null)
    }

    const handleMeetupDeleted = () => {
        try {
            retrieveMeetups(context.token)
                .then(meetups => {
                    setMeetups(meetups)
                    setModal(null)
                    setMeetupId(null)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleToggleMeetupClick = meetupId => {
        try {
            toggleFavMeetup(context.token, meetupId)
                .then(() => retrieveMeetups(context.token))
                .then(meetups => setMeetups(meetups))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const userId = extractUserIdFromToken(context.token) //importante el context

    //'key={meetup.id}' para asignar una clave única a cada elemento de una lista o conjunto de componentes
    return (
        
        <div className="home-view">
            <header className="home-header">
                <h1 className="home-title">{user ? user.name : 'Check in'} </h1>
                <div className="flex flex-wrap justify-end">
                    <div className="w-6/12 sm:w-4/12 px-14">
                        <img src={user.image} id="url" alt="image of user" class="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
                    </div>
                    <button className="home-logout-button" onClick={handleLogoutClick} >Logout</button>
                </div>    
            </header>
                <main className="py-[3rem]">
                <section className="flex flex-col items-center gap-10">
                    {meetups && meetups.map(meetup => <article key={meetup.id}
                        className="w-[87%] bg-[#eeeeee] rounded-xl p-10">
                        <h2 className="uppercase text-lg font-extrabold underline">{meetup.author?.name}</h2>
                        <a className="mt-2 text-sm text-[#2C2A2A] font-style: italic">{meetup.date}</a>
                        <p className="mt-8 font-semibold text-[#2C2A2A]">Image: </p>
                        <img className="w-full"
                            src={meetup.image}
                            alt={meetup.text} />
                        <p className="mt-8 font-semibold text-[#2C2A2A]">Video: </p>
                        <video controls className="w-full"
                            src={meetup.video}
                            alt={meetup.text} />
                        <p className="mt-8 font-semibold text-[#2C2A2A]">Description: </p>
                        <p>{meetup.text}</p>
                        <p className="mt-8 font-semibold text-[#2C2A2A]">Type:</p>
                        <p> {meetup.type}</p>
                        <p className="mt-8 font-semibold text-[#2C2A2A]">Adress: </p>
                        <p>{meetup.adress}</p>
                        <p className="mt-8 font-semibold text-[#2C2A2A]">Date meetup: </p>
                        <p>{meetup.date}</p>

                        {meetup.author.id === userId && <>
                            <button className="button" onClick={() => handleEditMeetupClick(meetup.id)}>Edit</button>
                            <button className="button" onClick={() => handleDeleteMeetupClick(meetup.id)}>Delete</button>
                        </>
                        }
                        <button className="button" onClick={() => handleToggleMeetupClick(meetup.id)}>{meetup.fav ? '♥' : '♡'}</button>
                    </article>)}
                </section>
            </main>

            <footer className="text-white bg-[#d9d9d9] flex bottom-0 w-full h-[3rem] justify-center">
                <button className="bg-[#2C2A2A] br-30 p-5 hover:bg-[#707070]" onClick={handleCreateMeetupClick}>New Meetup</button>
            </footer>

            {modal === 'create-meetup' && <CreateMeetupModal onMeetupCreated={handleMeetupCreated} onCreateMeetupCancelled={handleCreateMeetupCancelled} />}

            {modal === 'edit-meetup' && <EditMeetupModal meetupId={meetupId} onMeetupEdited={handleMeetupEdited} onEditMeetupCancelled={handleEditMeetupCancelled} />}

            {modal === 'delete-meetup' && <DeleteMeetupModal meetupId={meetupId} onMeetupDeleted={handleMeetupDeleted} onDeleteMeetupCancelled={handleDeleteMeetupCancelled} />}
        </div>
    )
}
export default Home