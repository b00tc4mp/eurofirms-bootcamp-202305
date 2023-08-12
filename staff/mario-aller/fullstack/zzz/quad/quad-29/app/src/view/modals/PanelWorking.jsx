import { useState, useEffect } from 'react'
import { retrievePanelWorking } from '../../logic/panels'
import context from '../../context'
import Canvas from '../graphics/Canvas'

export function PanelWorking({ onExitModal, panelId }) {
    const [panel, setPanel] = useState(null)

    const handleRefreshPanelWorking = () => {
        try {
            retrievePanelWorking(context.tokenUser, panelId)
                .then(panelRet => setPanel(panelRet))
                .catch(error => alert('Error: ' + error.message))
        } catch (error) { alert('Error: ' + error.message) }
    }

    useEffect(() => {
        try {
            retrievePanelWorking(context.tokenUser, panelId)
                .then(panelRet => setPanel(panelRet))
                .catch(error => alert('Error: ' + error.message))
        } catch (error) { alert('Error: ' + error.message) }

        const RefreshWorkingInterval = setInterval(handleRefreshPanelWorking, 500);
        return () => clearInterval(RefreshWorkingInterval)
    }, [])

    const handleOnExitModal = () => onExitModal()

    return <>
        {panel && <div className="basic-modal">
            <div className="basic-view">
                <header>
                    <h4>View panel</h4>
                </header>
                {panel && panel.blocks.length === 0 && <h6>At this moment, optimization is not working.</h6>}
                {panel && panel.blocks.length !== 0 && <Canvas panel={panel} width={context.panelPictureWidth} height={context.panelPictureHeight} />}
                <footer className="flex-hor">
                    <button type="button" className="basic-button" onClick={handleOnExitModal}>Exit</button>
                </footer>
            </div>
        </div>}
    </>
}