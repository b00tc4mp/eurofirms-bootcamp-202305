import { updatePanelStatusToOptimize } from '../../logic/panels'
import context from '../../context'

/**
 * The `PanelToOptimize` component is a React component that renders a modal with a form to send a
 * panel to be optimized, and it includes event handlers for submitting the form and canceling the
 * modal.
 */
export function PanelToOptimize({ onToOptimizePanel, onExitModal, panelId }) {
    const handleOnExitModal = () => onExitModal()
    const handleUpdatePost = (event) => {
        event.preventDefault()

        try {
            updatePanelStatusToOptimize(context.tokenUser, panelId)
                .then(() => {
                    onToOptimizePanel()
                })
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