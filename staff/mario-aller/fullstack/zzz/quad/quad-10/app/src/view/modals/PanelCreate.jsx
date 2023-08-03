import { createPanel } from '../../logic/panel-ctrl'
import context from '../../context'

export function PanelCreate({ onCreatedPanel, onExitModal }) {
    const handleOnExit = () => onExitModal()
    const handleOnSubmitPanel = function (event) {
        event.preventDefault()

        const reference = event.target.reference.value
        const width = event.target.width.value
        const height = event.target.height.value

        try {
            createPanel(context.tokenUser, reference, width, height)
                .then(() => onCreatedPanel())
                .catch(error => { alert('Error: ' + error.message) })
        } catch (error) { alert('Error: ' + error.message) }
    }

    return <div className="basic-modal">
        <form className="basic-form" action="submit" onSubmit={handleOnSubmitPanel}>
            <h4>Nuevo Panel</h4>

            <label className="basic-label" htmlFor="reference">Reference</label>
            <input type="text" id="reference"></input>

            <label className="basic-label" htmlFor="width">Width</label>
            <input type="text" id="width"></input>

            <label className="basic-label" htmlFor="height">Height</label>
            <input type="text" id="height"></input>

            <div className="flex-center">
                <button type="submit" className="basic-button">New</button>
                <button type="button" className="basic-button" onClick={handleOnExit}>Cancel</button>
            </div>
        </form>
    </div>
}
