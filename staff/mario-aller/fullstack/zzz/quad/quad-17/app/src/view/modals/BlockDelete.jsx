import { deleteBlock } from '../../logic/panels'
import context from '../../context'

export function BlockDelete({ onDeletedBlock, onExitModal, panelId, blockId }) {
    const handleOnExitModal = () => onExitModal()
    const handleUpdatePost = (event) => {
        event.preventDefault()

        try {
            deleteBlock(context.tokenUser, panelId, blockId)
                .then(() => onDeletedBlock())
                .catch(error => alert('Error: ' + error.message))
        } catch (error) { alert('Error: ' + error.message) }
    }

    return <>
        {<div className="basic-modal">
            <form className="basic-form" action="submit" onSubmit={handleUpdatePost}>
                <h4>Delete block</h4>

                <div className="flex-hor">
                    <button type="submit" className="basic-button">Delete</button>
                    <button type="button" className="basic-button" onClick={handleOnExitModal}>Cancel</button>
                </div>
            </form>
        </div>}
 </>
}