import { deletePanel } from '../../logic/panels'
import context from '../../context'

/**
 * The `PanelDelete` component is a React component that renders a modal for deleting a panel, and it
 * handles the delete functionality when the delete button is clicked.
 */
export function PanelDelete({ onDeletedPanel, onExitModal, panelId }) {
    const handleOnExitModal = () => onExitModal()
    const handleUpdatePost = (event) => {
        event.preventDefault()

        try {
            deletePanel(context.tokenUser, panelId)
                .then(() => onDeletedPanel())
                .catch(error => alert('Error: ' + error.message))
        } catch (error) { alert('Error: ' + error.message) }
    }

    return <>
        {<div className="basic-modal">
            <form className="basic-form" action="submit" onSubmit={handleUpdatePost}>
                <h4>Delete panel</h4>

                <div className="flex-hor">
                    <button type="submit" className="basic-button">Delete</button>
                    <button type="button" className="basic-button" onClick={handleOnExitModal}>Cancel</button>
                </div>
            </form>
        </div>}
    </>
}