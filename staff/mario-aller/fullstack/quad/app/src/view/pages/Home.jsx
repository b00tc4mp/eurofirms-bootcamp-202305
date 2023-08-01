import { retrieveUser } from '../../logic/user-ctrl'
import { retrievePanels, updatePanelStatus } from '../../logic/panel-ctrl'
import context from '../../context'
import { useState, useEffect } from 'react'
import { PanelCreate } from '../modals/PanelCreate'
import { PanelEdit } from '../modals/PanelEdit'
import { PanelDelete } from '../modals/PanelDelete'
import { BlockCreate } from '../modals/BlockCreate'
import { BlockDelete } from '../modals/BlockDelete'
import { UserEdit } from '../modals/UserEdit'


function Home({ onLogout }) {
    const [userLogged, setUserLogged] = useState(null)
    const [modal, setModal] = useState(null)
    const [panels, setPanels] = useState([])
    const [panelId, setPanelId] = useState(null)
    const [blockId, setBlockId] = useState(null)
    // const [panelStatus, setPanelStatus] = useState(null)

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
    // const getPanelStatus = (panelId) => panels.find(panel => panel.id === panelId).status
    const handleLogout = () => {
        context.tokenUser = null
        onLogout()
    }
    const handleExitModal = () => {
        setPanelId(null)
        setBlockId(null)
        setModal(null)
    }
    const handleCreatePanel = () => {
        setModal('create-panel')
    }
    const handleEditPanel = (panelId) => {
        setPanelId(panelId)
        setModal('edit-panel')
    }
    const handleOptimizePanel = (panelId) => {
        const status = panels.find(panel => panel.id === panelId).status
        if (status === 0) {
            updatePanelStatus(context.tokenUser, panelId)
                .then(handleRefreshPanelsExitModal())
                .catch(error => alert('Error: ' + error.message))
        }
        if (status === 2) {
            setPanelId(panelId)
            setModal('optimaze-panel')
        }
    }
    const handleDeletePanel = (panelId) => {
        setPanelId(panelId)
        setModal('delete-panel')
    }
    const handleCreateBlock = (panelId) => {
        setPanelId(panelId)
        setModal('create-block')
    }
    const handleDeleteBlock = (panelId, blockId) => {
        setPanelId(panelId)
        setBlockId(blockId)
        setModal('delete-block')
    }
    const handleEditUser = (userId) => {
        setModal('edit-user')
    }
    const handleRefreshPanelsExitModal = () => {
        try {
            retrievePanels(context.tokenUser)
                .then(panels => {
                    setPanels(panels)
                    setPanelId(null)
                    setBlockId(null)
                    setModal(null)
                })
                .catch(error => alert('Error: ' + error.message))
        } catch (error) { alert('Error: ' + error.message) }
    }
    const handleEditedUser = () => {
        try {
            retrieveUser(context.tokenUser)
                .then(user => {
                    setUserLogged(user)
                    setModal(null)
                })
                .catch(error => alert('Error: ' + error.message))
        } catch (error) { alert('Error: ' + error.message) }

    }

    return (
        <div className="home">
            <header className="home-header">
                <div className="basic-head">
                    <img className="logo" src="../../../public/logo-block.gif" alt="logo" />
                    <h2>Hello, {userLogged ? userLogged.name : 'world'}</h2>
                </div>
            </header>

            <main className="home-view">
                <section className="panel-list basic-container">
                    {panels && panels.map(panel => <article className="panel" key={panel.id}>
                        <header>
                            <p className="panel-text">{`${panel.reference}: (${panel.width} x ${panel.height})`}</p>
                        </header>
                        {panel.blocks.map((block) => <p className="panel-block flex-center" key={block.id}>
                            {`(${block.width}x${block.height})`}
                            <button className="panel-block-button" type="button" onClick={() => handleDeleteBlock(panel.id, block.id)}>🗑️</button>
                        </p>
                        )}
                        <footer>
                            <button className="panel-button" type="button" onClick={() => handleCreateBlock(panel.id)}>📦</button>
                            <button className="panel-button" type="button" onClick={() => handleEditPanel(panel.id)}>📝</button>
                            <button className="panel-button" type="button" onClick={() => handleOptimizePanel(panel.id)}>
                                {(panel.status === 0) ? '📭' : (panel.status === 1) ? '📬' : '📫'}
                            </button>
                            <button className="panel-button" type="button" onClick={() => handleDeletePanel(panel.id)}>❌</button>
                        </footer>
                    </article>)}
                </section>
            </main>

            <footer className="home-nav">
                <div className="basic-nav">
                    <button type="button" className="basic-button" onClick={handleCreatePanel}>New Panel</button>
                    <button type="button" className="basic-button" onClick={handleEditUser}>Edit Profile</button>
                    <button type="button" className="basic-button" onClick={handleLogout}>Salir</button>
                </div>
            </footer>

            {modal === 'create-panel' && <PanelCreate onCreatedPanel={handleRefreshPanelsExitModal} onExitModal={handleExitModal} />}
            {modal === 'edit-panel' && <PanelEdit onUpdatedPanel={handleRefreshPanelsExitModal} onExitModal={handleExitModal} panelId={panelId} />}
            {modal === 'delete-panel' && <PanelDelete onDeletedPanel={handleRefreshPanelsExitModal} onExitModal={handleExitModal} panelId={panelId} />}
            {modal === 'create-block' && <BlockCreate onCreatedBlock={handleRefreshPanelsExitModal} onExitModal={handleExitModal} panelId={panelId} />}
            {modal === 'delete-block' && <BlockDelete onDeletedBlock={handleRefreshPanelsExitModal} onExitModal={handleExitModal} panelId={panelId} blockId={blockId} />}
            {modal === 'edit-user' && <UserEdit onUpdatedUser={handleEditedUser} onExitModal={handleExitModal} />}
        </div>
    )
}
export default Home