import { useState, useEffect } from 'react'
import { retrievePanelOne } from '../../logic/panel-ctrl'
import context from '../../context'

export function PanelOptimize({ onExitModal, panelId }) {
    const [panel, setPanel] = useState(null)

    useEffect(() => {
        try {
            retrievePanelOne(context.tokenUser, panelId)
                .then(panelRet => setPanel(panelRet))
                .catch(error => alert('Error: ' + error.message))
        } catch (error) { alert('Error: ' + error.message) }
    }, [])

    const handleOnExitModal = () => onExitModal()

    return <>
        {panel && <div className="basic-modal">
            <div className="basic-view">
                <header>
                    <h4>View panel</h4>
                </header>

                <footer className="flex-hor">
                    <button type="button" className="basic-button" onClick={handleOnExitModal}>Exit</button>
                </footer>
            </div>
        </div>}
    </>
}