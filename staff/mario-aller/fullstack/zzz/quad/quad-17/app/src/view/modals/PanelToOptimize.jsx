import { updatePanelStatus } from '../../logic/panels'
import context from '../../context'

export function PanelToOptimize({ onToOptimizePanel, onExitModal, panelId }) {
    const handleOnExitModal = () => onExitModal()
    const handleUpdatePost = (event) => {
        event.preventDefault()

        try {
            updatePanelStatus(context.tokenUser, panelId)
                .then(() => onToOptimizePanel())
                .catch(error => alert('Error: ' + error.message))
        } catch (error) { alert('Error: ' + error.message) }
    }

    return <>
        {<div className="basic-modal">
            <form className="basic-form" action="submit" onSubmit={handleUpdatePost}>
                <h4>Send to Optimize</h4>

                <div className="flex-hor">
                    <button type="submit" className="basic-button">Send</button>
                    <button type="button" className="basic-button" onClick={handleOnExitModal}>Cancel</button>
                </div>
            </form>
        </div>}
    </>
}