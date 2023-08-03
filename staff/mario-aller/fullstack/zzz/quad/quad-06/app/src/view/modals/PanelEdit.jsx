import { useState, useEffect } from 'react'
import { retrievePanelOne, updatePanel } from '../../logic/panel-ctrl'
import context from '../../context'

export function PanelEdit({ onUpdatedPanel, onExitModal, panelId }) {
    const [panel, setPanel] = useState(null)

    useEffect(() => {
        try {
            retrievePanelOne(context.tokenUser, panelId)
                .then(panelRet => setPanel(panelRet))
                .catch(error => alert('Error: ' + error.message))
        } catch (error) { alert('Error: ' + error.message) }
    }, [])

    const handleOnExitModal = () => onExitModal()
    const handleUpdatePost = (event) => {
        event.preventDefault()
        const reference = event.target.reference.value
        const width = event.target.width.value
        const height = event.target.height.value

        try {
            updatePanel(context.tokenUser, panelId, reference, width, height)
                .then(() => onUpdatedPanel())
                .catch(error => alert('Error: ' + error.message))
        } catch (error) { alert('Error: ' + error.message) }
    }

    return <>
        {panel && <div className="home-modal-editpost basic-modal">
            <form className="home-modal-editpost-form basic-form" action="submit" onSubmit={handleUpdatePost}>
                <h4>Editar Post</h4>

                <label className="basic-label" htmlFor="reference">Reference</label>
                <input type="text" id="reference" defaultValue={panel.reference}></input>

                <label className="basic-label" htmlFor="width">Width</label>
                <input type="text" id="width" defaultValue={panel.width}></input>

                <label className="basic-label" htmlFor="height">Height</label>
                <input type="text" id="height" defaultValue={panel.height}></input>

                <div className="flex-hor">
                    <button type="submit" className="basic-button">Save</button>
                    <button type="button" className="basic-button" onClick={handleOnExitModal}>Cancel</button>
                </div>
            </form>
        </div>}
    </>
}