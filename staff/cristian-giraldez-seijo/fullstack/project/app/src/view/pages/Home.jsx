import { useState } from 'react'
import RegisterModal from '../modals/RegisterModal'
import LoginModal from '../modals/LoginModal'

function Home() {

        const [modal, setModal] = useState(null)

        const [login, setLogin] = useState(null)

        const handleNavigateToRegister = (() => setModal('register'))

        const handleNavigateToLogin = (() => setModal('login'))

        return (<div className="home">
                <header className="home-header">
                        <button type="button" onClick={handleNavigateToLogin}>Login</button>
                </header>
                <main>
                        <h1>Home!</h1>

                        {(modal === 'login') && <LoginModal onNavigateToRegister={handleNavigateToRegister}/>}
                        {(modal === 'register') && <RegisterModal onNavigateToLogin={handleNavigateToLogin}/>}
                </main>
                <footer></footer>
        </div>
        )
}

export default Home