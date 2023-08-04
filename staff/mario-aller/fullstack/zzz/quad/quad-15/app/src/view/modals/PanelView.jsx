import { useState, useEffect } from 'react'
import { retrievePanelOne } from '../../logic/panels'
import context from '../../context'
import Canvas from '../graphics/Canvas'

export function PanelView({ onExitModal, panelId }) {
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
                <Canvas panel={panel} width={context.panelPictureWidth} height={context.panelPictureHeight} />
                <footer className="flex-hor">
                    <button type="button" className="basic-button" onClick={handleOnExitModal}>Exit</button>
                </footer>
            </div>
        </div>}
    </>
}