import { useState, useEffect } from 'react'
import extractUserIdFromToken from '../helpers/extractUserIdFromToken'
import context from '../../context'
import retrieveUser from '../../logic/retrieveUser'
import retrieveMeetups from '../../logic/retrieveMeetups'
import CreateMeetupModal from '../modals/CreateMeetupModal'
import EditMeetupModal from '../modals/EditMeetupModal'
import DeleteMeetupModal from '../modals/DeleteMeetupModal'
import NetworkRules from '../pages/NetworkRules'
import toggleFavMeetup from '../../logic/toggleFavMeetup'

function Home({ onLoggedOut }) {
    console.log('Home ->render')

    const [modal, setModal] = useState(null)
    const [meetupId, setMeetupId] = useState(null)
    const [user, setUser] = useState(null)
    const [meetups, setMeetups] = useState(null)
    const [view, setView] = useState('home')

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
    //
    const handleNavigateToNetworkRules = () => setView('network-rules')

    const handleNavigateToHome = () => setView('home')

    const userId = extractUserIdFromToken(context.token) //importante el context

    //'key={meetup.id}' para asignar una clave única a cada elemento de una lista o conjunto de componentes
    return (
        <div>
            <header className="fixed top-0 h-[5rem] flex items-center justify-between bg-[rgb(217,217,217)] w-full py-[1rem]">
                <h1 className="font-extrabold p-5">{user ? user.name : 'Check in'} </h1>
                <div className="flex justify-center items-center ">
                    <img src={user ? user.image : ""} id="url"
                        alt="image of user" className="w-20 h-20 rounded-full drop-shadow-1xl bg-[#2c2a2a] " //"shadow-lg rounded w-1/6 h-auto align-middle border-none" 
                        />
                    <button className="bg-[#2C2A2A] text-white px-4 py-2 text-sm text-center rounded-lg shadow-sm w-32 mx-10 hover:bg-[#707070]" onClick={handleLogoutClick} >Logout</button>
                </div>
                <div className="flex flex-wrap justify-end w-24 pr-5 bg-cover sm:125rem lg:.5em">
                    <img src="public/tools.png" alt="settings"onClick={handleNavigateToNetworkRules}
                    />
                </div>
            </header>
            {view === 'home' && <main className="py-[3rem]">
                <section className="flex flex-col items-center gap-10 pt-12 pb-10">
                    {meetups && meetups.map(meetup =>
                        <article key={meetup.id}
                            className="w-[87%] bg-[#eeeeee] rounded-xl p-10">
                            <h2 className="uppercase text-lg font-extrabold underline">{meetup.author?.name}</h2>
                            <a className="mt-2 text-sm text-[#2c2a2a] font-style: italic">{meetup.date}</a>
                            <p className="mt-6 font-semibold text-[#2c2a2a]">Image: </p>
                            <img className="w-full w-50rounded-xl border-8 border-[#2c2a2a]-500"
                                src={meetup.image}
                                alt={meetup.text} />
                            <p className="mt-6 font-semibold text-[#2C2A2A]">Video: </p>
                            <video controls className="w-full rounded-xl z-auto border-8 border-[#2c2a2a]-500"
                                src={meetup.video}
                                alt={meetup.text} />
                            <p className="mt-6 font-semibold text-[#2C2A2A]">Description: </p>
                            <p>{meetup.text}</p>
                            <p className="mt-6 font-semibold text-[#2C2A2A]">Type:</p>
                            <p> {meetup.type}</p>
                            <p className="mt-6 font-semibold text-[#2C2A2A]">Adress: </p>
                            <p>{meetup.adress}</p>
                            <p className="mt-6 font-semibold text-[#2C2A2A]">Date meetup: </p>
                            <p>{meetup.dateMeetup}</p>
                            <p className="mt-6 font-semibold text-[#2C2A2A]">Likes:</p>
                            <p>{meetup.likes}</p>
                            {meetup.author.id === userId && <>
                                <button className="bg-[#2C2A2A] text-white px-4 py-2 text-sm text-center rounded-full shadow-sm w-32 my-10 hover:bg-[#707070]" onClick={() => handleEditMeetupClick(meetup.id)}>Edit</button>
                                <button className="bg-[#2C2A2A] text-white px-4 py-2 text-sm text-center rounded-full shadow-sm w-32 mx-10 hover:bg-[#707070]" onClick={() => handleDeleteMeetupClick(meetup.id)}>Delete</button>
                            </>
                            }
                            <button className="bg-[#2C2A2A] text-[#ffffff] px-4 py-2 text-sm text-center rounded-full shadow-sm w-32 my-10 hover:bg-[#707070]" onClick={() => { 
                                handleToggleMeetupClick(meetup.id)}}>{meetup.fav ? '♥' : '♡'}</button>
                        </article>)}
                </section>
            </main>}
            {view === 'network-rules' && <NetworkRules />}

            <footer className="text-white bg-[#d9d9d9] fixed flex bottom-0 w-full h-[4rem] items-center justify-center">
                <button className="bg-[#2C2A2A] text-white px-4 py-2 text-sm text-center rounded-lg shadow-sm w-32 mx-10 hover:bg-[#707070]" onClick={handleNavigateToHome}>Home</button>
                <button className="bg-[#2C2A2A] text-white px-4 py-2 text-sm text-center rounded-lg shadow-sm w-32 my-10 mx-10 hover:bg-[#707070]" onClick={handleCreateMeetupClick}>New Meetup</button>
            </footer>

            {modal === 'create-meetup' && <CreateMeetupModal onMeetupCreated={handleMeetupCreated} onCreateMeetupCancelled={handleCreateMeetupCancelled} />}

            {modal === 'edit-meetup' && <EditMeetupModal meetupId={meetupId} onMeetupEdited={handleMeetupEdited} onEditMeetupCancelled={handleEditMeetupCancelled} />}

            {modal === 'delete-meetup' && <DeleteMeetupModal meetupId={meetupId} onMeetupDeleted={handleMeetupDeleted} onDeleteMeetupCancelled={handleDeleteMeetupCancelled}
            />}
        </div>
    )
}
export default Home