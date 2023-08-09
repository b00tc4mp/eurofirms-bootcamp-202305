import { useState, useEffect } from 'react'
import extractUserIdFromToken from '../helpers/extractUserIdFromToken'
import context from '../../context'
import retrieveUser from '../../logic/retrieveUser'
import MenuMusicStyles from '../components/MenuMusicStyles'

function Home({ onLoggedOut }) {
    console.log('Home -> render')

    const [user, setUser] = useState(null)

    useEffect(() => {
        try {
            retrieveUser(context.token)
                .then(user => setUser(user))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleLogoutClick = () => {
        context.token = null

        onLoggedOut()
    }

    const userId = extractUserIdFromToken(context.token)

    return <main> <div className="layout">
        <nav className="layout__navbar">
            <header className="navbar__header">
                <img src="../../../../../public/legendary.png" alt="musical social-network" />
            </header>
            <div className="navbar_container-lists">
            </div>
        </nav>
    </div>
        <div className="bg-red mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Hello user</h2>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="col-span-full">
                        <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                        <div className="mt-2 flex items-center gap-x-3">
                            <svg className="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                            </svg>
                            <div>
                                <label htmlFor="photourl" className="block text-sm font-medium leading-6 text-gray-900">Choose your photo. Insert
                                    the url:</label>
                                <div className="mt-2">
                                    <input id="photourl" name="photourl" type="photourl" autoComplete="photourl" required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                            <div className="mt-2">
                                <input id="phone" name="phone" type="phone" autoComplete="phone" required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                </input>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                </input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg bg-orange">
                <h1 className="text-2xl font-semibold text-center text-black-500 mt-8 mb-6">Tell the world about your favourite music</h1>
                <MenuMusicStyles />
                <div>
                    <button type="submit" //onClick={handleSaveMusicStyles}
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update profile</button>
                </div>

                <div>
                    <label htmlFor="favouriteBands" className="block text-sm font-medium leading-6 text-gray-900">Favourite Bands:</label>
                    <div className="mt-2">
                        <input id="favouriteBands" name="favouriteBands" type="favouriteBands" autoComplete="favouriteBands" required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </input>
                    </div>
                </div>
                <div>
                    <label htmlFor="favouriteAlbums" className="block text-sm font-medium leading-6 text-gray-900">Favourite Albums:</label>
                    <div className="mt-2">
                        <input id="favouriteAlbums" name="favouriteAlbums" type="favouriteAlbums" autoComplete="favouriteAlbums" required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </input>
                    </div>
                </div>
                <div>
                    <label htmlFor="favouriteSongs" className="block text-sm font-medium leading-6 text-gray-900">Favourite Songs:</label>
                    <div className="mt-2">
                        <input id="favouriteSongs" name="favouriteSongs" type="favouriteSongs" autoComplete="favouriteSongs" required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </input>
                    </div>
                </div>
                <div>
                    <label htmlFor="favouriteMusicians" className="block text-sm font-medium leading-6 text-gray-900">Favourite Musicians:</label>
                    <div className="mt-2">
                        <input id="favouriteMusicians" name="favouriteMusicians" type="favouriteMusicians" autoComplete="favouriteMusicians" required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </input>
                    </div>
                </div>
                <br />
                <div>
                    <button type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update profile</button>
                </div>

            </div>

        </div>

        <div className="bg-red mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">About you</h2>
                    <div className="col-span-full">
                        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900"></label>
                        <h3 className="mt-3 text-sm leading-6 text-black-600">Tell the world something about yourself or whatever you want:</h3>
                        <div className="mt-2">
                            <textarea id="about" name="about" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                        </div>
                        <br/>
                        <div>
                            <button type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update profile</button>
                        </div>
                    </div>
                </div>
                </div>
    </div>

                <div className="bg-black mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <button className="home-logout-button flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleLogoutClick}>Logout</button>
                        </div>
                    </div>
                </div>
        
            </main>
}

            export default Home