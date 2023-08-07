import { useState, useEffect } from 'react'
import extractUserIdFromToken from '../helpers/extractUserIdFromToken'
import context from '../../context'
import retrieveUser from '../../logic/retrieveUser'
import retrieveMeetups from '../../logic/retrieveMeetups'
import CreateMeetupModal from '../modals/CreateMeetupModal'
import EditMeetupModal from '../modals/EditMeetupModal'
import DeleteMeetupModal from '../modals/DeleteMeetupModal'
import toggleFavMeetup from '../../logic/toggleFavMeetup'

function Home({onLoggedOut}) {
    console.log('Home ->render')

    const [modal, setModal] = useState(null)
    const [meetupId, setMeetupId] = useState(null)
    const [user, setUser] = useState(null)
    const [meetups, setMeetups] = useState(null)

    //Sólo se ejecuta una vez se pinta el Home
    useEffect(() => { //Para efectos secundarios como consecuéncia de llama a una api.
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
    }, []) //Para pasar el array vacío si o si, sólo una vez

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

    //'key={post.id}' para asignar una clave única a cada elemento de una lista o conjunto de componentes renderizados dinámicamente. Ayuda a React a realizar actualizaciones eficientes en la lista al identificar los cambios en los elementos y evitar renderizaciones innecesarias
    return (
        <div className="fixed top-0 h-[3rem] home-view">
            <header className="home-header">
                <h1 className="home-title">{user ? user.name : 'World'}</h1>

                <button className="home-logout-button" onClick={handleLogoutClick}>Logout</button>
            </header>
        
            <main className="py-[3rem]">
                <section className="flex flex-col items-center gap-10">
                    {meetups && meetups.map(meetup => <article key={meetup.id} className="w-[65%] bg-[#eeeeee] rounded-xl p-10">
                            <h2>{meetup.author?.name}</h2>
                            <img className="w-full"
                                src={meetup.image}
                                alt={meetup.text} />
                            <p>{meetup.text}</p>

                            {meetup.author.id === userId && <>
                                <button className="button" onClick={() => handleEditMeetupClick(meetup.id)}>Edit</button>
                                <button className="button" onClick={() => handleDeleteMeetupClick(meetup.id)}>Delete</button>
                            </>
                            }
                            <button className="button" onClick={() => handleToggleMeetupClick(meetup.id)}>{meetup.fav ? '♥' : '♡'}</button>
                        </article>)}
                </section>
            </main>
                  
            <footer className=" text-white bg-[#d9d9d9] fixed flex bottom-0 w-full h-[3rem] flex justify-center align-center">
                <button className="border-solid border-2 bg-[#2C2A2A] br-30 p-5 hover:bg-[#707070]" onClick={handleCreateMeetupClick}>+</button>
            </footer>
          
            {modal === 'create-meetup' && <CreateMeetupModal onMeetupCreated={handleMeetupCreated} onCreateMeetupCancelled={handleCreateMeetupCancelled} />}

            {modal === 'edit-meetup' && <EditMeetupModal meetupId={meetupId} onMeetupEdited={handleMeetupEdited} onEditMeetupCancelled={handleEditMeetupCancelled} />}

            {modal === 'delete-meetup' && <DeleteMeetupModal meetupId={meetupId} onMeetupDeleted={handleMeetupDeleted} onDeleteMeetupCancelled={handleDeleteMeetupCancelled} />}
        </div>
    )
}
export default Home