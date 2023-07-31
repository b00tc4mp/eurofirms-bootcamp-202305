import { retrieveUser } from '../../logic/user-ctrl'
import { retrievePanels } from '../../logic/panel-ctrl'
import context from '../../context'
import { useState, useEffect } from 'react'
import { PanelCreate } from '../modals/PanelCreate'
import { PanelEdit } from '../modals/PanelEdit'
import { BlockCreate } from '../modals/BlockCreate'

// import { PostDelete } from '../modals/PostDelete'
// import { PostEdit } from '../modals/PostEdit'

function Home({ onLogout }) {
    const [userLogged, setUserLogged] = useState(null)
    const [modal, setModal] = useState(null)
    const [panels, setPanels] = useState([])
    const [panelId, setPanelId] = useState(null)
    // const [blockId, setBlockId] = useState(null)

    useEffect(() => {
        try {
            Promise.all([retrieveUser(context.tokenUser), retrievePanels(context.tokenUser)])
                .then(([user, panels]) => {
                    setUserLogged(user)
                    setPanels(panels)
                })
                .catch(error => alert('Error: ' + error.message))
        } catch (error) { alert('Error: ' + error.message) }
    }, [])

    const handleLogout = () => {
        context.tokenUser = null
        onLogout()
    }
    const handleCreateModal = () => {
        setModal('create-modal')
    }
    const handleCreateBlock = (panelId) => {
        setPanelId(panelId)
        setModal('block-modal')
    }
    const handleEditModal = (panelId) => {
        setPanelId(panelId)
        setModal('edit-modal')
    }
    const handleExitModal = () => {
        setPanelId(null)
        //setBlockId(null)
        setModal(null)
    }

    // const handleDeleteModal = (idPost) => {
    //     setIdPanel(idPanel)
    //     setModal('delete-modal')
    // }


    const handleRefreshPanelsExitModal = () => {
        try {
            retrievePanels(context.tokenUser)
                .then(panels => {
                    setPanels(panels)
                    setModal(null)
                    // setIdPost(null)
                })
                .catch(error => alert('Error: ' + error.message))
        } catch (error) { alert('Error: ' + error.message) }
    }

    return (
        <div className="home">
            <header className="home-header">
                <div className="basic-head">
                    <img className="logo" src="../../../public/logo-block.gif" alt="logo" />
                    <h3>Hello, {userLogged ? userLogged.name : 'world'}</h3>
                </div>
            </header>

            <main className="home-view">
                <section className="panel-list basic-container">
                    {panels && panels.map(panel => <article className="panel" key={panel.id}>
                        <header>
                            <p className="panel-text">{`${panel.reference}: (${panel.width} x ${panel.height})`}</p>
                        </header>
                        {panel.blocks.map((block) => <p className="panel-block" key={block.id}>
                            {`(${block.width}x${block.height})`}
                            <button className="panel-block-button" type="button" onClick={() => { }}>↩️</button>
                        </p>
                        )}
                        <footer>
                            <button className="panel-button" type="button" onClick={() => handleCreateBlock(panel.id)}>📦</button>
                            <button className="panel-button" type="button" onClick={() => handleEditModal(panel.id)}>📝</button>
                            <button className="panel-button" type="button" onClick={() => { }}>🗑️</button>
                        </footer>
                    </article>)}
                </section>
            </main>

            <footer className="home-nav">
                <div className="basic-nav">
                    <button type="button" className="basic-button" onClick={handleCreateModal}>New Panel</button>
                    <button type="button" className="basic-button" onClick={handleLogout}>Salir</button>
                </div>
            </footer>

            {modal === 'create-modal' && <PanelCreate onCreatedPanel={handleRefreshPanelsExitModal} onExitModal={handleExitModal} />}
            {modal === 'block-modal' && <BlockCreate onCreatedBlock={handleRefreshPanelsExitModal} onExitModal={handleExitModal} panelId={panelId} />}
            {modal === 'edit-modal' && <PanelEdit onUpdatedPanel={handleRefreshPanelsExitModal} onExitModal={handleExitModal} panelId={panelId} />}
            {/* {modal === 'delete-modal' && <PanelDelete onDeletedPanel={handleRefreshPanelsExitModal} onExitModal={handleExitModal} idPanel={idPanel} />} */}
        </div>
    )
}
export default Home