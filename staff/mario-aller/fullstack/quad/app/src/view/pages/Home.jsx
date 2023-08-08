import { retrieveUser } from '../../logic/users'
import { retrievePanels } from '../../logic/panels'
import context from '../../context'
import { useState, useEffect } from 'react'
import { PanelCreate } from '../modals/PanelCreate'
import { PanelEdit } from '../modals/PanelEdit'
import { PanelDelete } from '../modals/PanelDelete'
import { PanelToOptimize } from '../modals/PanelToOptimize'
import { PanelView } from '../modals/PanelView'
import { PanelReEdit } from '../modals/PanelReEdit'
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

        setInterval(handleRefresh, 5000);
    }, [])
    // const getPanelStatus = (panelId) => panels.find(panel => panel.id === panelId).status
    const handleLogout = () => {
        context.tokenUser = null
        onLogout()
    }
    const handleEditPanel = (panelId) => {
        setPanelId(panelId)
        setModal('edit-panel')
    }
    const handleToOptimizePanel = (panelId) => {
        setPanelId(panelId)
        setModal('optimize-panel')
    }
    const handleViewPanel = (panelId) => {
        setPanelId(panelId)
        setModal('view-panel')
    }
    const handleDeletePanel = (panelId) => {
        setPanelId(panelId)
        setModal('delete-panel')
    }
    const handleReEditPanel = (panelId) => {
        setPanelId(panelId)
        setModal('reedit-panel')
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
    const handleRefresh = () => {
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
                        {panel.blocks.map((block) => <div className="panel-block flex-center" key={block.id}>
                            <p>{`(${block.width}x${block.height})`}</p>
                            {panel.status === 0 && <button className="panel-block-button" type="button" onClick={() => handleDeleteBlock(panel.id, block.id)}>🗑️</button>}
                        </div>)}
                        <footer className="flex-center">
                            {panel.status === 0 && <>
                                <button className="panel-button" type="button" onClick={() => handleCreateBlock(panel.id)}>📦</button>
                                <button className="panel-button" type="button" onClick={() => handleEditPanel(panel.id)}>📝</button>
                                <button className="panel-button" type="button" onClick={() => handleToOptimizePanel(panel.id)}>📭</button>
                                <button className="panel-button-cancel" type="button" onClick={() => handleDeletePanel(panel.id)}>❌</button>
                            </>}
                            {panel.status === 1 && <>
                                <p className="panel-button">📬</p>
                                <button className="panel-button-cancel" type="button" onClick={handleRefresh}>❓</button>
                            </>}
                            {panel.status === 2 && <>
                                <button className="panel-button" type="button" onClick={() => handleViewPanel(panel.id)}>🎁</button>
                                <button className="panel-button-cancel" type="button" onClick={() => handleReEditPanel(panel.id)}>🗄️</button>
                                <button className="panel-button-cancel" type="button" onClick={() => handleDeletePanel(panel.id)}>❌</button>
                            </>}
                        </footer>
                    </article>)}
                </section>
            </main>

            <footer className="home-nav">
                <div className="basic-nav">
                    <button type="button" className="basic-button" onClick={() => setModal('create-panel')}>New Panel</button>
                    <button type="button" className="basic-button" onClick={() => setModal('create-panel')}>Optimize</button>
                    <button type="button" className="basic-button" onClick={() => setModal('edit-user')}>Edit Profile</button>
                    <button type="button" className="basic-button" onClick={handleLogout}>Salir</button>
                </div>
            </footer>

            {modal === 'create-panel' && <PanelCreate onCreatedPanel={handleRefresh} onExitModal={() => setModal(null)} />}
            {modal === 'edit-panel' && <PanelEdit onUpdatedPanel={handleRefresh} onExitModal={() => setModal(null)} panelId={panelId} />}
            {modal === 'delete-panel' && <PanelDelete onDeletedPanel={handleRefresh} onExitModal={() => setModal(null)} panelId={panelId} />}
            {modal === 'optimize-panel' && <PanelToOptimize onToOptimizePanel={handleRefresh} onExitModal={() => setModal(null)} panelId={panelId} />}
            {modal === 'view-panel' && <PanelView onExitModal={() => setModal(null)} panelId={panelId} />}
            {modal === 'reedit-panel' && <PanelReEdit onReEditedPanel={handleRefresh} onExitModal={() => setModal(null)} panelId={panelId} />}
            {modal === 'create-block' && <BlockCreate onCreatedBlock={handleRefresh} onExitModal={() => setModal(null)} panelId={panelId} />}
            {modal === 'delete-block' && <BlockDelete onDeletedBlock={handleRefresh} onExitModal={() => setModal(null)} panelId={panelId} blockId={blockId} />}
            {modal === 'edit-user' && <UserEdit onUpdatedUser={handleEditedUser} onExitModal={() => setModal(null)} />}
        </div>
    )
}
export default Home